import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-offres-emploi',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './offres-emploi.component.html',
  styleUrl: './offres-emploi.component.scss'
})
export class OffresEmploiComponent {
}
