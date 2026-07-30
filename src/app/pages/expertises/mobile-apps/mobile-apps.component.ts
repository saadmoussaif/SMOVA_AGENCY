import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslationService } from '../../../core/translation.service';

@Component({
  selector: 'app-mobile-apps',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './mobile-apps.component.html',
  styleUrl: './mobile-apps.component.scss'
})
export class MobileAppsComponent {

  readonly i18n = inject(TranslationService);

  readonly deliverables = [
    {
      icon: 'smartphone',
      title: 'iOS & Android',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
      text: 'Applications natives et cross-platform performantes pour les deux stores.',
      items: ['React Native / Flutter', 'UX mobile optimisée', 'Performance native', 'Tests multi-devices']
    },
    {
      icon: 'palette',
      title: 'Design System Mobile',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80',
      text: 'Interface cohérente, intuitive et pensée pour les usages mobiles réels.',
      items: ['Figma mobile-first', 'Composants réutilisables', 'Dark/light mode', 'Accessibilité WCAG']
    },
    {
      icon: 'bell',
      title: 'Notifications Push',
      image: 'https://images.unsplash.com/photo-1526628953301-3cd9eb1e3f78?auto=format&fit=crop&w=600&q=80',
      text: 'Engagement utilisateur via notifications ciblées et automatisées.',
      items: ['Firebase Cloud Messaging', 'Segmentation audience', 'Deep linking', 'Analytics notifications']
    },
    {
      icon: 'plug',
      title: 'API & Back-office',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      text: 'Connexion robuste à vos APIs, bases de données et systèmes existants.',
      items: ['REST & GraphQL', 'Auth sécurisée', 'Sync temps réel', 'Gestion hors-ligne']
    },
    {
      icon: 'gauge',
      title: 'Performance & Tests',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      text: 'Tests automatisés et optimisation pour une app fluide sur tous les appareils.',
      items: ['Tests unitaires & E2E', 'Profiling mémoire', 'Crash reporting', 'CI/CD mobile']
    },
    {
      icon: 'upload-cloud',
      title: 'Publication Stores',
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=600&q=80',
      text: 'Déploiement complet sur App Store et Google Play avec optimisation ASO.',
      items: ['App Store Connect', 'Google Play Console', 'ASO & screenshots', 'Mises à jour OTA']
    },
  ];

  readonly steps = [
    { title: 'Discovery & UX',      text: 'Analyse des besoins, personas utilisateurs et wireframes validés avant de coder.' },
    { title: 'Design & Prototype',  text: 'Maquettes haute fidélité, design system et prototype interactif testable.' },
    { title: 'Développement',       text: 'Sprints agiles, code reviewé, intégrations API et tests continus.' },
    { title: 'Launch & Store',      text: 'Publication sur les stores, monitoring post-launch et support itératif.' },
  ];

  readonly stack = [
    { name: 'React Native', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Flutter',      logo: 'https://cdn.simpleicons.org/flutter/02569B' },
    { name: 'Expo',         logo: 'https://cdn.simpleicons.org/expo/000000' },
    { name: 'Firebase',     logo: 'https://cdn.simpleicons.org/firebase/FFCA28' },
    { name: 'TypeScript',   logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Node.js',      logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'GraphQL',      logo: 'https://cdn.simpleicons.org/graphql/E10098' },
    { name: 'Supabase',     logo: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
    { name: 'App Store',    logo: 'https://cdn.simpleicons.org/appstore/0D96F6' },
    { name: 'Google Play',  logo: 'https://cdn.simpleicons.org/googleplay/414141' },
    { name: 'Figma',        logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Sentry',       logo: 'https://cdn.simpleicons.org/sentry/362D59' },
  ];

  onLogoError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const parent = img.parentElement;
    if (parent) {
      const div = document.createElement('div');
      div.className = 'tool-logo-fallback';
      div.textContent = parent.querySelector('span')?.textContent?.[0] ?? '?';
      parent.insertBefore(div, img);
    }
  }
}