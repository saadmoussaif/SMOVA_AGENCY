import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

type ServiceIcon = 'bot' | 'code-2' | 'megaphone' | 'smartphone' | 'workflow' | 'line-chart';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly services: Array<{ icon: ServiceIcon; title: string; text: string; tags: string[] }> = [
    {
      icon: 'bot',
      title: 'Consulting digital & IA',
      text: 'Strategies data-driven, agents IA et automatisations pour accelerer les operations.',
      tags: ['OpenAI', 'Automatisation', 'Data']
    },
    {
      icon: 'megaphone',
      title: 'Marketing digital',
      text: 'Acquisition, SEO, campagnes payantes et tableaux de bord orientes performance.',
      tags: ['SEO', 'Ads', 'Analytics']
    },
    {
      icon: 'code-2',
      title: 'Sites web premium',
      text: 'Sites vitrines et e-commerce rapides, elegants et penses pour convertir.',
      tags: ['Angular', 'Next.js', 'WordPress']
    },
    {
      icon: 'workflow',
      title: 'Applications web',
      text: 'Plateformes sur mesure pour digitaliser vos ventes, equipes et processus metier.',
      tags: ['Node.js', 'API', 'Dashboards']
    },
    {
      icon: 'smartphone',
      title: 'Applications mobiles',
      text: 'Apps iOS et Android modernes, de l UX au deploiement stores.',
      tags: ['Flutter', 'React Native', 'Expo']
    },
    {
      icon: 'line-chart',
      title: 'Growth & optimisation',
      text: 'Experimentation, tracking et amelioration continue pour scaler avec methode.',
      tags: ['CRO', 'Funnels', 'Reporting']
    }
  ];
}
