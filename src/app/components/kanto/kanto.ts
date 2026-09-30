import { Component } from '@angular/core';
import { GymLeader } from '../../models/gym-leader.model';
import { GymCardComponent } from '../gym-card/gym-card';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [GymCardComponent],
  template: `
    <section class="region-section kanto-theme">
      <h2>Kanto Region Gym Leaders</h2>
      <div class="grid">
        @for (leader of kantoLeaders; track leader.name) {
          <app-gym-card [leader]="leader"></app-gym-card>
        }
      </div>
    </section>
  `,
  styles: [`
    .kanto-theme { border-left: 8px solid #ff4242; padding-left: 12px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px; }
    h2 { color: #cc0000; }
  `]
})
export class KantoComponent {
  kantoLeaders: GymLeader[] = [
    {
      name: 'Brock', type: 'Rock', badge: 'Boulder Badge', location: 'Pewter City', typeColor: '#A890F0',
      team: [{ name: 'Geodude', level: 12 }, { name: 'Onix', level: 14 }]
    },
    {
      name: 'Misty', type: 'Water', badge: 'Cascade Badge', location: 'Cerulean City', typeColor: '#6890F0',
      team: [{ name: 'Staryu', level: 18 }, { name: 'Starmie', level: 21 }]
    },
    {
      name: 'Lt. Surge', type: 'Electric', badge: 'Thunder Badge', location: 'Vermilion City', typeColor: '#F8D030',
      team: [{ name: 'Voltorb', level: 21 }, { name: 'Pikachu', level: 18 }, { name: 'Raichu', level: 24 }]
    },
    {
      name: 'Erika', type: 'Grass', badge: 'Rainbow Badge', location: 'Celadon City', typeColor: '#78C850',
      team: [{ name: 'Victreebel', level: 29 }, { name: 'Tangela', level: 24 }, { name: 'Vileplume', level: 29 }]
    },
    {
      name: 'Koga', type: 'Poison', badge: 'Soul Badge', location: 'Fuchsia City', typeColor: '#A040A0',
      team: [{ name: 'Koffing', level: 37 }, { name: 'Muk', level: 39 }, { name: 'Weezing', level: 43 }]
    },
    {
      name: 'Sabrina', type: 'Psychic', badge: 'Marsh Badge', location: 'Saffron City', typeColor: '#F85888',
      team: [{ name: 'Kadabra', level: 38 }, { name: 'Mr. Mime', level: 37 }, { name: 'Alakazam', level: 43 }]
    },
    {
      name: 'Blaine', type: 'Fire', badge: 'Volcano Badge', location: 'Cinnabar Island', typeColor: '#F08030',
      team: [{ name: 'Growlithe', level: 42 }, { name: 'Ponyta', level: 40 }, { name: 'Arcanine', level: 47 }]
    },
    {
      name: 'Giovanni', type: 'Ground', badge: 'Earth Badge', location: 'Viridian City', typeColor: '#E0C068',
      team: [{ name: 'Rhyhorn', level: 45 }, { name: 'Dugtrio', level: 42 }, { name: 'Nidoqueen', level: 47 }]
    }
  ];
}