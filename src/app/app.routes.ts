import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { KantoComponent } from './components/kanto/kanto';
import { JohtoComponent } from './components/johto/johto';
import { HoennComponent } from './components/hoenn/hoenn';
import { PokemartComponent } from './components/pokemart/pokemart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent },
  { path: 'hoenn', component: HoennComponent },
  { path: 'pokemart', component: PokemartComponent },
  { path: '**', redirectTo: 'home' }
];