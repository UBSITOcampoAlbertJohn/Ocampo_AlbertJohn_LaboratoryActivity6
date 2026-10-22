import { Injectable } from '@angular/core';
import { GymLeader } from '../models/gym-leader.model';

@Injectable({
  providedIn: 'root'
})
export class HoennService {
  hoennLeaders: GymLeader[] = [
    {
      name: 'Roxanne',
      type: 'Rock',
      badge: 'Stone Badge',
      location: 'Rustboro City',
      typeColor: '#A890F0',
      team: [{ name: 'Geodude', level: 12 }, { name: 'Nosepass', level: 15 }]
    },
    {
      name: 'Brawly',
      type: 'Fighting',
      badge: 'Knuckle Badge',
      location: 'Dewford Town',
      typeColor: '#C03028',
      team: [{ name: 'Machop', level: 16 }, { name: 'Makuhita', level: 19 }]
    },
    {
      name: 'Wattson',
      type: 'Electric',
      badge: 'Dynamo Badge',
      location: 'Mauville City',
      typeColor: '#F8D030',
      team: [{ name: 'Voltorb', level: 20 }, { name: 'Magneton', level: 22 }, { name: 'Manectric', level: 24 }]
    },
    {
      name: 'Flannery',
      type: 'Fire',
      badge: 'Heat Badge',
      location: 'Lavaridge Town',
      typeColor: '#F08030',
      team: [{ name: 'Numel', level: 24 }, { name: 'Camerupt', level: 26 }, { name: 'Torkoal', level: 28 }]
    },
    {
      name: 'Norman',
      type: 'Normal',
      badge: 'Balance Badge',
      location: 'Petalburg City',
      typeColor: '#A8A878',
      team: [{ name: 'Slaking', level: 28 }, { name: 'Vigoroth', level: 30 }, { name: 'Slaking', level: 31 }]
    },
    {
      name: 'Winona',
      type: 'Flying',
      badge: 'Feather Badge',
      location: 'Fortree City',
      typeColor: '#A890F0',
      team: [{ name: 'Swablu', level: 29 }, { name: 'Pelipper', level: 30 }, { name: 'Altaria', level: 33 }]
    },
    {
      name: 'Tate & Liza',
      type: 'Psychic',
      badge: 'Mind Badge',
      location: 'Mossdeep City',
      typeColor: '#F85888',
      team: [{ name: 'Lunatone', level: 41 }, { name: 'Solrock', level: 42 }]
    },
    {
      name: 'Wallace',
      type: 'Water',
      badge: 'Rain Badge',
      location: 'Sootopolis City',
      typeColor: '#6890F0',
      team: [{ name: 'Luvdisc', level: 40 }, { name: 'Whiscash', level: 42 }, { name: 'Milotic', level: 43 }]
    }
  ];
}