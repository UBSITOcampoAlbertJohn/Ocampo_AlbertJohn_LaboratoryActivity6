import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoennService } from '../../services/hoenn';
import { GymCardComponent } from '../gym-card/gym-card';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [CommonModule, GymCardComponent],
  templateUrl: './hoenn.html',
  styleUrl: './hoenn.css'
})
export class HoennComponent {
  private hoennService = inject(HoennService);
  gymLeaders = this.hoennService.hoennLeaders;
}