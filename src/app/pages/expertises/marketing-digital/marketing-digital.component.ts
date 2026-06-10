import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-marketing-digital',
  standalone: true,
  imports: [NgFor, RouterLink, LucideAngularModule],
  templateUrl: './marketing-digital.component.html',
  styleUrl: '../expertise-page.scss'
})
export class MarketingDigitalComponent {
  readonly highlights = ['Acquisition qualifiee', 'Tracking propre', 'Reporting clair'];
  readonly deliverables = [
    'Strategie acquisition',
    'SEO et contenu',
    'Campagnes Ads',
    'Social media',
    'Tracking GA4 et pixels',
    'Tableaux de bord performance'
  ];
  readonly stack = ['SEO', 'Google Ads', 'Meta Ads', 'GA4', 'Looker Studio', 'CRO'];
}
