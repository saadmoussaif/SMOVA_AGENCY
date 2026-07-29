import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslationService } from '../../../core/translation.service';

@Component({
  selector: 'app-marketing-digital',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './marketing-digital.component.html',
  styleUrl: './marketing-digital.component.scss'
})
export class MarketingDigitalComponent {

  readonly i18n = inject(TranslationService);

  // ── Livrables avec photos Unsplash ───────────────────
  readonly deliverables = [
    {
      icon: 'search',
      title: 'SEO & Content',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80',
      text: 'Audit technique, stratégie de mots-clés et contenu optimisé pour dominer les résultats organiques.',
      items: ['Audit SEO complet', 'Stratégie de contenu', 'Link building', 'Suivi positions & trafic']
    },
    {
      icon: 'mouse-pointer-click',
      title: 'Publicité payante',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=600&q=80',
      text: 'Campagnes Google Ads et Meta Ads optimisées pour le ROI — pas pour les impressions.',
      items: ['Google Search & Display', 'Meta Ads (Facebook/Instagram)', 'Remarketing & audiences', 'Optimisation ROAS']
    },
    {
      icon: 'share-2',
      title: 'Social Media',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
      text: 'Présence cohérente, communauté engagée et contenu qui convertit sur tous vos réseaux.',
      items: ['Calendrier éditorial', 'Création de contenu', 'Community management', 'Reporting mensuel']
    },
    {
      icon: 'bar-chart-3',
      title: 'Analytics & Reporting',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      text: 'Tableaux de bord sur mesure pour suivre chaque euro dépensé et chaque conversion générée.',
      items: ['GA4 & GTM', 'Looker Studio dashboards', 'Tracking & attribution', 'Rapports hebdomadaires']
    },
    {
      icon: 'mail',
      title: 'Email & Automation',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=600&q=80',
      text: 'Séquences d\'emails automatisées qui nurturent vos leads et relancent vos clients.',
      items: ['Email marketing', 'Workflows automatisés', 'Segmentation audience', 'A/B testing']
    },
    {
      icon: 'funnel',
      title: 'Optimisation CRO',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      text: 'Analyse des parcours utilisateurs et tests A/B pour maximiser vos taux de conversion.',
      items: ['Heatmaps & recordings', 'Tests A/B', 'Landing pages', 'Optimisation formulaires']
    },
  ];

  // ── Process ───────────────────────────────────────────
  readonly steps = [
    { title: 'Audit & Diagnostic',    text: 'Analyse complète de votre présence digitale, vos concurrents et vos opportunités de croissance.' },
    { title: 'Stratégie & Roadmap',   text: 'Plan d\'action priorisé avec objectifs chiffrés, budget recommandé et calendrier d\'exécution.' },
    { title: 'Exécution & Création',  text: 'Mise en place des campagnes, création de contenus et activation de tous les leviers définis.' },
    { title: 'Mesure & Optimisation', text: 'Suivi continu des KPIs, reporting transparent et ajustements hebdomadaires pour maximiser le ROI.' },
  ];
  // Dans marketing-digital.component.ts
// Remplace le tableau readonly stack par celui-ci

readonly stack = [
  {
    name: 'Google Ads',
    logo: 'https://cdn.simpleicons.org/googleads/4285F4'
  },
  {
    name: 'Meta Ads',
    logo: 'https://cdn.simpleicons.org/meta/0081FB'
  },
  {
    name: 'Google Analytics',
    logo: 'https://cdn.simpleicons.org/googleanalytics/E37400'
  },
  {
    name: 'Google Search',
    logo: 'https://cdn.simpleicons.org/google/4285F4'
  },
  {
    name: 'Looker Studio',
    logo: 'https://cdn.simpleicons.org/looker/4285F4'
  },
  {
    name: 'Mailchimp',
    logo: 'https://cdn.simpleicons.org/mailchimp/FFE01B'
  },
  {
    name: 'HubSpot',
    logo: 'https://cdn.simpleicons.org/hubspot/FF7A59'
  },
  {
    name: 'Semrush',
    logo: 'https://cdn.simpleicons.org/semrush/FF642D'
  },
  {
    name: 'Instagram',
    logo: 'https://cdn.simpleicons.org/instagram/E4405F'
  },
  {
    name: 'YouTube',
    logo: 'https://cdn.simpleicons.org/youtube/FF0000'
  },
  {
    name: 'LinkedIn',
    logo: 'https://cdn.simpleicons.org/linkedin/0A66C2'
  },
  {
    name: 'TikTok Ads',
    logo: 'https://cdn.simpleicons.org/tiktok/000000'
  },
];
  // ── Fallback logo si Clearbit échoue ─────────────────
  onLogoError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const parent = img.parentElement;
    if (parent) {
      const icon = document.createElement('div');
      icon.className = 'tool-logo-fallback';
      icon.textContent = parent.querySelector('span')?.textContent?.[0] ?? '?';
      parent.insertBefore(icon, img);
    }
  }
}