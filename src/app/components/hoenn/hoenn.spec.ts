import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymCardComponent } from '../gym-card/gym-card';
import { HoennService } from '../../services/hoenn';
import { GymLeader } from '../../models/gym-leader.model';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [CommonModule, GymCardComponent],
  templateUrl: './hoenn.html',
  styleUrl: './hoenn.css'
})
export class HoennComponent implements OnInit {
  hoennLeaders: GymLeader[] = [];

  constructor(private hoennService: HoennService) {}

  ngOnInit(): void {
    this.hoennLeaders = this.hoennService.hoennLeaders;
  }
}