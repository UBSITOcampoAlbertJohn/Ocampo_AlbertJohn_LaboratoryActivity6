import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

export interface PokeApiPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other?: {
      'official-artwork'?: {
        front_default: string;
      };
    };
  };
  types: Array<{
    slot: number;
    type: { name: string; url: string };
  }>;
  stats: Array<{
    base_stat: number;
    stat: { name: string };
  }>;
  abilities: Array<{
    ability: { name: string };
    is_hidden: boolean;
  }>;
}

export interface PokedexEntry {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
}

export interface PokedexResponse {
  name: string;
  pokemon_entries: PokedexEntry[];
}

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2';

  // In-memory caches to prevent duplicate requests
  private pokemonCache = new Map<string, PokeApiPokemon>();
  private pokedexCache = new Map<string, PokedexEntry[]>();

  // PokéAPI Regional Pokédex IDs:
  // Kanto (Kanto dex) -> 2
  // Johto (Original Johto dex) -> 3
  // Hoenn (Original Hoenn dex) -> 4
  private readonly regionDexMap: Record<string, number> = {
    kanto: 2,
    johto: 3,
    hoenn: 4
  };

  /**
   * Normalizes Pokémon names for PokéAPI (e.g., "Mr. Mime" -> "mr-mime", "Nidoran♀" -> "nidoran-f")
   */
  normalizeName(name: string): string {
    if (!name) return '';
    
    // Strip level annotations if present (e.g., "Geodude (Lv. 14)")
    let clean = name.replace(/\s*\(Lv\.\s*\d+\)/i, '').trim();

    clean = clean.toLowerCase();
    clean = clean.replace(/♀/g, '-f').replace(/♂/g, '-m');
    clean = clean.replace(/[\.\']/g, '');
    clean = clean.replace(/\s+/g, '-');
    return clean;
  }

  /**
   * Retrieves regional Pokédex list from PokéAPI v2
   */
  getRegionalPokedex(region: string): Observable<PokedexEntry[]> {
    const normRegion = region.toLowerCase();
    const dexId = this.regionDexMap[normRegion] || 2;

    if (this.pokedexCache.has(normRegion)) {
      return of(this.pokedexCache.get(normRegion)!);
    }

    return this.http.get<PokedexResponse>(`${this.baseUrl}/pokedex/${dexId}`).pipe(
      map(res => res.pokemon_entries),
      tap(entries => this.pokedexCache.set(normRegion, entries)),
      catchError(err => {
        console.error(`Failed to load Pokédex for region ${region}`, err);
        return of([]);
      })
    );
  }

  /**
   * Retrieves detailed Pokémon information by name or ID
   */
  getPokemonDetails(nameOrId: string | number): Observable<PokeApiPokemon | null> {
    const key = String(nameOrId).toLowerCase();
    const cleanKey = this.normalizeName(key);

    if (this.pokemonCache.has(cleanKey)) {
      return of(this.pokemonCache.get(cleanKey)!);
    }

    return this.http.get<PokeApiPokemon>(`${this.baseUrl}/pokemon/${cleanKey}`).pipe(
      tap(data => this.pokemonCache.set(cleanKey, data)),
      catchError(err => {
        console.warn(`PokéAPI lookup failed for ${nameOrId}`, err);
        return of(null);
      })
    );
  }

  /**
   * Bulk loads details for a list of Pokémon names (e.g. Gym Leader's team)
   */
  getMultiplePokemon(names: string[]): Observable<Array<{ name: string; details: PokeApiPokemon | null }>> {
    if (!names || names.length === 0) return of([]);

    const requests = names.map(rawName => {
      return this.getPokemonDetails(rawName).pipe(
        map(details => ({ name: rawName, details }))
      );
    });

    return forkJoin(requests);
  }

  /**
   * Helper to return high-res artwork or fallback sprite
   */
  getArtworkUrl(details: PokeApiPokemon | null): string {
    if (!details) return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
    return (
      details.sprites.other?.['official-artwork']?.front_default ||
      details.sprites.front_default ||
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
    );
  }
}