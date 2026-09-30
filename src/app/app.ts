import { Component } from '@angular/core';
import { KantoComponent } from './components/kanto/kanto';
import { JohtoComponent } from './components/johto/johto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KantoComponent, JohtoComponent],
  template: `
    <main class="container">
      <h1>Pokemon Gym Leaders Documentation</h1>
      <app-kanto></app-kanto>
      <app-johto></app-johto>
    </main>
  `,
  styles: [`
    .container { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
    h1 { text-align: center; color: #333; }
  `]
})
export class AppComponent {}