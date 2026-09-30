import { Routes } from '@angular/router';
import { KantoComponent } from './components/kanto/kanto';
import { JohtoComponent } from './components/johto/johto';
import { HoennComponent } from './components/hoenn/hoenn';

export const routes: Routes = [
  { path: '', redirectTo: 'kanto', pathMatch: 'full' },
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent },
  { path: 'hoenn', component: HoennComponent },
  { path: '**', redirectTo: 'kanto' }
];