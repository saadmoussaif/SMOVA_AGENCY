import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-web-apps',
  standalone: true,
  imports: [NgFor, RouterLink, LucideAngularModule],
  templateUrl: './web-apps.component.html',
  styleUrl: './web-apps.component.scss'
})
export class WebAppsComponent {
  readonly highlights = ['Dashboards metier', 'APIs robustes', 'Roles utilisateurs'];
  readonly deliverables = [
    'Plateforme web sur mesure',
    'Dashboard admin',
    'Authentification et permissions',
    'Architecture API',
    'Base de donnees structuree',
    'Monitoring et maintenance'
  ];
  readonly stack = ['Angular', 'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL'];
}
