import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-mobile-apps',
  standalone: true,
  imports: [NgFor, RouterLink, LucideAngularModule],
  templateUrl: './mobile-apps.component.html',
  styleUrl: '../expertise-page.scss'
})
export class MobileAppsComponent {
  readonly highlights = ['UX mobile claire', 'Architecture scalable', 'Publication stores'];
  readonly deliverables = [
    'Application iOS et Android',
    'Design system mobile',
    'Notifications push',
    'Connexion API et back-office',
    'Tests et optimisation performance',
    'Deploiement App Store et Google Play'
  ];
  readonly stack = ['Flutter', 'React Native', 'Expo', 'Firebase', 'Node.js', 'Analytics'];
}
