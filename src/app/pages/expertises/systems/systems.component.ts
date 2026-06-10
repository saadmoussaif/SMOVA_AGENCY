import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-systems',
  standalone: true,
  imports: [NgFor, RouterLink, LucideAngularModule],
  templateUrl: './systems.component.html',
  styleUrl: './systems.component.scss'
})
export class SystemsComponent {
  readonly highlights = ['Automatisation', 'Integrations API', 'Process internes'];
  readonly deliverables = [
    'Automatisations metier',
    'CRM et outils internes',
    'Integrations APIs',
    'Workflows no-code et code',
    'Dashboards operationnels',
    'Documentation et formation equipe'
  ];
  readonly stack = ['Node.js', 'APIs', 'Make', 'Zapier', 'Airtable', 'Docker'];
}
