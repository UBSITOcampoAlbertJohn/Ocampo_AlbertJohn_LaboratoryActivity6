import { Routes } from '@angular/router';
import { KantoComponent } from './components/kanto/kanto';
import { JohtoComponent } from './components/johto/johto';
import { HoennComponent } from './components/hoenn/hoenn';
import { PokemartComponent } from './components/pokemart/pokemart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'kanto', pathMatch: 'full' },
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent },
  { path: 'hoenn', component: HoennComponent },
  { path: 'pokemart', component: PokemartComponent },
  { path: '**', redirectTo: 'kanto' }
];