import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from '../../pokemon'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  pokemonService = inject(Pokemon);

  ngOnInit(): void {
    this.pokemonService.fetchPokemon();
  }
}