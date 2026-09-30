import { Component } from '@angular/core';
import { GymLeader } from '../../models/gym-leader.model';
import { GymCardComponent } from '../gym-card/gym-card';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [GymCardComponent],
  template: `
    <section class="region-section johto-theme">
      <h2>Johto Region Gym Leaders</h2>
      <div class="grid">
        @for (leader of johtoLeaders; track leader.name) {
          <app-gym-card [leader]="leader"></app-gym-card>
        }
      </div>
    </section>
  `,
  styles: [`
    .johto-theme { border-left: 8px solid #3b4cca; padding-left: 12px; margin-top: 30px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px; }
    h2 { color: #102a83; }
  `]
})
export class JohtoComponent {
  johtoLeaders: GymLeader[] = [
    {
      name: 'Falkner', type: 'Flying', badge: 'Zephyr Badge', location: 'Violet City', typeColor: '#A890F0',
      team: [{ name: 'Pidgey', level: 9 }, { name: 'Pidgeotto', level: 13 }]
    },
    {
      name: 'Bugsy', type: 'Bug', badge: 'Hive Badge', location: 'Azalea Town', typeColor: '#A8B820',
      team: [{ name: 'Scyther', level: 16 }, { name: 'Kakuna', level: 14 }, { name: 'Metapod', level: 14 }]
    },
    {
      name: 'Whitney', type: 'Normal', badge: 'Plain Badge', location: 'Goldenrod City', typeColor: '#A8A878',
      team: [{ name: 'Clefairy', level: 18 }, { name: 'Miltank', level: 20 }]
    },
    {
      name: 'Morty', type: 'Ghost', badge: 'Fog Badge', location: 'Ecruteak City', typeColor: '#705898',
      team: [{ name: 'Gastly', level: 21 }, { name: 'Haunter', level: 21 }, { name: 'Gengar', level: 25 }]
    },
    {
      name: 'Chuck', type: 'Fighting', badge: 'Storm Badge', location: 'Cianwood City', typeColor: '#C03028',
      team: [{ name: 'Primeape', level: 27 }, { name: 'Poliwrath', level: 30 }]
    },
    {
      name: 'Jasmine', type: 'Steel', badge: 'Mineral Badge', location: 'Olivine City', typeColor: '#B8B8D0',
      team: [{ name: 'Magnemite', level: 30 }, { name: 'Steelix', level: 35 }]
    },
    {
      name: 'Pryce', type: 'Ice', badge: 'Glacier Badge', location: 'Mahogany Town', typeColor: '#98D8D8',
      team: [{ name: 'Seel', level: 27 }, { name: 'Dewgong', level: 29 }, { name: 'Piloswine', level: 31 }]
    },
    {
      name: 'Clair', type: 'Dragon', badge: 'Rising Badge', location: 'Blackthorn City', typeColor: '#7038F8',
      team: [{ name: 'Dragonair', level: 37 }, { name: 'Kingdra', level: 40 }]
    }
  ];
}