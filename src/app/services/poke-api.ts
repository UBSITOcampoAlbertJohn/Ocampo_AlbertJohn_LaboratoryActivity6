import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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

  private pokemonCache = new Map<string, PokeApiPokemon>();
  private pokedexCache = new Map<string, PokedexEntry[]>();

  private readonly regionDexMap: Record<string, number> = {
    kanto: 2,
    johto: 3,
    hoenn: 4
  };

  normalizeName(name: string): string {
    if (!name) return '';
    let clean = name.replace(/\s*\(Lv\.\s*\d+\)/i, '').trim();
    clean = clean.toLowerCase();
    clean = clean.replace(/♀/g, '-f').replace(/♂/g, '-m');
    clean = clean.replace(/[\.\']/g, '');
    clean = clean.replace(/\s+/g, '-');
    return clean;
  }

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

  getArtworkUrl(details: PokeApiPokemon | null): string {
    if (!details) return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
    return (
      details.sprites.other?.['official-artwork']?.front_default ||
      details.sprites.front_default ||
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
    );
  }
}