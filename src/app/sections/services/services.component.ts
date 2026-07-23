import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslationService } from '../../core/translation.service';

type ServiceIcon = 'bot' | 'code-2' | 'megaphone' | 'smartphone' | 'workflow' | 'line-chart';

type ServiceItem = {
  icon:  ServiceIcon;
  titleKey: string;   // ← clé i18n
  textKey:  string;   // ← clé i18n
  tags:  string[];
  image: string;
  alt:   string;
  link:  string;
};

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  // ✅ TranslationService injecté
  readonly i18n = inject(TranslationService);

  readonly services: ServiceItem[] = [
    {
      icon:     'bot',
      titleKey: 'services.ia.title',
      textKey:  'services.ia.text',
      tags:     ['OpenAI', 'Automatisation', 'Data'],
      image:    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85',
      alt:      'Interface IA avec analyse de donnees',
      link:     '/expertises/systemes'
    },
    {
      icon:     'megaphone',
      titleKey: 'services.marketing.title',
      textKey:  'services.marketing.text',
      tags:     ['SEO', 'Ads', 'Analytics'],
      image:    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
      alt:      'Dashboard marketing digital et analytics',
      link:     '/expertises/marketing-digital'
    },
    {
      icon:     'code-2',
      titleKey: 'services.web.title',
      textKey:  'services.web.text',
      tags:     ['Angular', 'Next.js', 'WordPress'],
      image:    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=85',
      alt:      'Conception de site web sur ordinateur',
      link:     '/expertises/applications-web'
    },
    {
      icon:     'workflow',
      titleKey: 'services.apps.title',
      textKey:  'services.apps.text',
      tags:     ['Node.js', 'API', 'Dashboards'],
      image:    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85',
      alt:      'Equipe travaillant sur une application web',
      link:     '/expertises/applications-web'
    },
    {
      icon:     'smartphone',
      titleKey: 'services.mobile.title',
      textKey:  'services.mobile.text',
      tags:     ['Flutter', 'React Native', 'Expo'],
      image:    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85',
      alt:      'Application mobile affichee sur smartphone',
      link:     '/expertises/applications-mobiles'
    },
    {
      icon:     'line-chart',
      titleKey: 'services.growth.title',
      textKey:  'services.growth.text',
      tags:     ['CRO', 'Funnels', 'Reporting'],
      image:    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
      alt:      'Analyse de croissance et reporting digital',
      link:     '/expertises/marketing-digital'
    }
  ];
}