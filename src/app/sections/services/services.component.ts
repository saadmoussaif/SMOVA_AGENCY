import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

type ServiceIcon = 'bot' | 'code-2' | 'megaphone' | 'smartphone' | 'workflow' | 'line-chart';
type ServiceItem = {
  icon: ServiceIcon;
  title: string;
  text: string;
  tags: string[];
  image: string;
  alt: string;
};

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly services: ServiceItem[] = [
    {
      icon: 'bot',
      title: 'Consulting digital & IA',
      text: 'Strategies data-driven, agents IA et automatisations pour accelerer les operations.',
      tags: ['OpenAI', 'Automatisation', 'Data'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85',
      alt: 'Interface IA avec analyse de donnees'
    },
    {
      icon: 'megaphone',
      title: 'Marketing digital',
      text: 'Acquisition, SEO, campagnes payantes et tableaux de bord orientes performance.',
      tags: ['SEO', 'Ads', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
      alt: 'Dashboard marketing digital et analytics'
    },
    {
      icon: 'code-2',
      title: 'Sites web premium',
      text: 'Sites vitrines et e-commerce rapides, elegants et penses pour convertir.',
      tags: ['Angular', 'Next.js', 'WordPress'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=85',
      alt: 'Conception de site web sur ordinateur'
    },
    {
      icon: 'workflow',
      title: 'Applications web',
      text: 'Plateformes sur mesure pour digitaliser vos ventes, equipes et processus metier.',
      tags: ['Node.js', 'API', 'Dashboards'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85',
      alt: 'Equipe travaillant sur une application web'
    },
    {
      icon: 'smartphone',
      title: 'Applications mobiles',
      text: 'Apps iOS et Android modernes, de l UX au deploiement stores.',
      tags: ['Flutter', 'React Native', 'Expo'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85',
      alt: 'Application mobile affichee sur smartphone'
    },
    {
      icon: 'line-chart',
      title: 'Growth & optimisation',
      text: 'Experimentation, tracking et amelioration continue pour scaler avec methode.',
      tags: ['CRO', 'Funnels', 'Reporting'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
      alt: 'Analyse de croissance et reporting digital'
    }
  ];
}
