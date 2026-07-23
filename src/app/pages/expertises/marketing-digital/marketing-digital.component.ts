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

  // ── Barres graphique dashboard ────────────────────────
  readonly chartBars = [
    { h: 45, label: 'Jan', cls: 'bar-blue' },
    { h: 62, label: 'Fév', cls: 'bar-blue' },
    { h: 55, label: 'Mar', cls: 'bar-blue' },
    { h: 80, label: 'Avr', cls: 'bar-blue bar-active' },
    { h: 70, label: 'Mai', cls: 'bar-blue' },
    { h: 95, label: 'Jun', cls: 'bar-blue bar-active' },
    { h: 88, label: 'Jul', cls: 'bar-blue' },
  ];

  // ── Livrables avec icônes ─────────────────────────────
  readonly deliverables = [
    {
      icon: 'search',
      title: 'SEO & Content',
      text: 'Audit technique, stratégie de mots-clés et contenu optimisé pour dominer les résultats organiques.',
      items: ['Audit SEO complet', 'Stratégie de contenu', 'Link building', 'Suivi positions & trafic']
    },
    {
      icon: 'mouse-pointer-click',
      title: 'Publicité payante',
      text: 'Campagnes Google Ads et Meta Ads optimisées pour le ROI — pas pour les impressions.',
      items: ['Google Search & Display', 'Meta Ads (Facebook/Instagram)', 'Remarketing & audiences', 'Optimisation ROAS']
    },
    {
      icon: 'share-2',
      title: 'Social Media',
      text: 'Présence cohérente, communauté engagée et contenu qui convertit sur tous vos réseaux.',
      items: ['Calendrier éditorial', 'Création de contenu', 'Community management', 'Reporting mensuel']
    },
    {
      icon: 'bar-chart-3',
      title: 'Analytics & Reporting',
      text: 'Tableaux de bord sur mesure pour suivre chaque euro dépensé et chaque conversion générée.',
      items: ['GA4 & GTM', 'Looker Studio dashboards', 'Tracking & attribution', 'Rapports hebdomadaires']
    },
    {
      icon: 'mail',
      title: 'Email & Automation',
      text: 'Séquences d\'emails automatisées qui nurturent vos leads et relancent vos clients.',
      items: ['Email marketing', 'Workflows automatisés', 'Segmentation audience', 'A/B testing']
    },
    {
      icon: 'funnel',
      title: 'Optimisation CRO',
      text: 'Analyse des parcours utilisateurs et tests A/B pour maximiser vos taux de conversion.',
      items: ['Heatmaps & recordings', 'Tests A/B', 'Landing pages', 'Optimisation formulaires']
    },
  ];

  // ── Process steps ─────────────────────────────────────
  readonly steps = [
    {
      title: 'Audit & Diagnostic',
      text: 'Analyse complète de votre présence digitale, vos concurrents et vos opportunités de croissance.'
    },
    {
      title: 'Stratégie & Roadmap',
      text: 'Plan d\'action priorisé avec objectifs chiffrés, budget recommandé et calendrier d\'exécution.'
    },
    {
      title: 'Exécution & Création',
      text: 'Mise en place des campagnes, création de contenus et activation de tous les leviers définis.'
    },
    {
      title: 'Mesure & Optimisation',
      text: 'Suivi continu des KPIs, reporting transparent et ajustements hebdomadaires pour maximiser le ROI.'
    },
  ];

  // ── Stack outils ──────────────────────────────────────
  readonly stack = [
    { icon: 'globe-2',         name: 'Google Ads'       },
    { icon: 'facebook',        name: 'Meta Ads'         },
    { icon: 'search',          name: 'Google Search'    },
    { icon: 'bar-chart-2',     name: 'Google Analytics' },
    { icon: 'layout-dashboard',name: 'Looker Studio'    },
    { icon: 'mail',            name: 'Mailchimp'        },
    { icon: 'zap',             name: 'HubSpot'          },
    { icon: 'trending-up',     name: 'SEMrush'          },
    { icon: 'tag',             name: 'Google Tag Mgr'   },
    { icon: 'instagram',       name: 'Instagram Ads'    },
    { icon: 'youtube',         name: 'YouTube Ads'      },
    { icon: 'linkedin',        name: 'LinkedIn Ads'     },
  ];
}