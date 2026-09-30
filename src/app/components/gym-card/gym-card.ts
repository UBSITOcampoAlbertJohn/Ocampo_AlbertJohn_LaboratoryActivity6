import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymLeader } from '../../models/gym-leader.model';

@Component({
  selector: 'app-gym-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3 [style.color]="leader.typeColor">{{ leader.name }}</h3>
      <p><strong>Town/City:</strong> {{ leader.location }}</p>
      <p><strong>Badge:</strong> {{ leader.badge }}</p>
      <p><strong>Type Specialty:</strong> <span [style.color]="leader.typeColor">{{ leader.type }}</span></p>
      
      <h4>Pokemon Team:</h4>
      <ul>
        @for (pokemon of leader.team; track pokemon.name) {
          <li>{{ pokemon.name }} (Lv. {{ pokemon.level }})</li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .card {
      border: 2px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin: 10px;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h3 { margin-top: 0; }
    ul { padding-left: 20px; }
  `]
})
export class GymCardComponent {
  @Input({ required: true }) leader!: GymLeader;
}