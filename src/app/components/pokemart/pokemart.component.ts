import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemart.component.html'
})
export class PokemartComponent {
  pokemonService = inject(PokemonService);
}