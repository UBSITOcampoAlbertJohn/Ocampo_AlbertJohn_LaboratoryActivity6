import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PokedexModalComponent } from './components/pokedex-modal/pokedex-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, PokedexModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'gym-leader-doc';

  // Pokédex Modal State
  isModalOpen = signal<boolean>(false);
  currentRegion = signal<string>('kanto');

  openPokedex(regionName: string) {
    this.currentRegion.set(regionName);
    this.isModalOpen.set(true);
  }

  closePokedex() {
    this.isModalOpen.set(false);
  }
}