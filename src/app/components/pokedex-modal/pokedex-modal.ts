import { Component, input, output, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokeApiService, PokeApiPokemon, PokedexEntry } from '../../services/poke-api';

@Component({
  selector: 'app-pokedex-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokedex-modal.html',
  styleUrl: './pokedex-modal.css'
})
export class PokedexModalComponent {
  pokeApiService = inject(PokeApiService);

  isOpen = input<boolean>(false);
  region = input<string>('kanto');

  closeModal = output<void>();

  pokedexEntries = signal<PokedexEntry[]>([]);
  selectedPokemon = signal<PokeApiPokemon | null>(null);
  isLoadingList = signal<boolean>(false);
  isLoadingDetails = signal<boolean>(false);
  searchQuery = signal<string>('');
  errorMessage = signal<string | null>(null);

  filteredEntries = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    const list = this.pokedexEntries();
    if (!q) return list;
    return list.filter(e => 
      e.pokemon_species.name.toLowerCase().includes(q) || 
      String(e.entry_number).includes(q)
    );
  });

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.loadRegionDex(this.region());
      }
    });
  }

  loadRegionDex(regionName: string) {
    this.isLoadingList.set(true);
    this.errorMessage.set(null);
    this.selectedPokemon.set(null);

    this.pokeApiService.getRegionalPokedex(regionName).subscribe({
      next: (entries: PokedexEntry[]) => {
        this.pokedexEntries.set(entries);
        this.isLoadingList.set(false);
      },
      error: () => {
        this.errorMessage.set('Failed to load Pokédex entries.');
        this.isLoadingList.set(false);
      }
    });
  }

  selectPokemon(speciesName: string) {
    this.isLoadingDetails.set(true);
    this.pokeApiService.getPokemonDetails(speciesName).subscribe({
      next: (details: PokeApiPokemon | null) => {
        this.selectedPokemon.set(details);
        this.isLoadingDetails.set(false);
      },
      error: () => {
        this.isLoadingDetails.set(false);
      }
    });
  }

  backToList() {
    this.selectedPokemon.set(null);
  }

  onClose() {
    this.closeModal.emit();
  }

  getSpriteUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getTypeBadgeClass(type: string): string {
    const classes: Record<string, string> = {
      fire: 'bg-danger text-white',
      water: 'bg-primary text-white',
      grass: 'bg-success text-white',
      electric: 'bg-warning text-dark',
      ice: 'bg-info text-dark',
      fighting: 'bg-secondary text-white',
      poison: 'bg-purple text-white',
      ground: 'bg-warning text-dark',
      flying: 'bg-info text-white',
      psychic: 'bg-danger text-white',
      bug: 'bg-success text-white',
      rock: 'bg-secondary text-white',
      ghost: 'bg-dark text-white',
      dragon: 'bg-primary text-white',
      steel: 'bg-secondary text-white',
      fairy: 'bg-light text-dark border'
    };
    return classes[type.toLowerCase()] || 'bg-secondary text-white';
  }
}