import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';
import { LucideAngularModule } from 'lucide-angular';
import { ServicesComponent } from '../../sections/services/services.component';

type SectorIcon = 'rocket' | 'heart-pulse' | 'building-2' | 'store';
type ProcessIcon = 'search' | 'palette' | 'code-2' | 'rocket';
type StackIcon =
  | 'brain'
  | 'code-2'
  | 'database'
  | 'globe-2'
  | 'shopping-bag'
  | 'chart-no-axes-column'
  | 'palette'
  | 'video'
  | 'share-2'
  | 'smartphone'
  | 'cloud'
  | 'settings';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ServicesComponent,
    LucideAngularModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('loader') loader?: ElementRef<HTMLElement>;

  readonly clients = Array.from({ length: 40 }, (_, index) => `Client ${String(index + 1).padStart(2, '0')}`);
  readonly partners = Array.from({ length: 24 }, (_, index) => `Partner ${String(index + 1).padStart(2, '0')}`);

  readonly sectors: Array<{ icon: SectorIcon; title: string; text: string }> = [
    { icon: 'rocket', title: 'SaaS & startups', text: 'MVP, scale-up, onboarding et outils internes.' },
    { icon: 'heart-pulse', title: 'Sante & bien-etre', text: 'Experiences digitales fiables pour services sensibles.' },
    { icon: 'building-2', title: 'Immobilier', text: 'Portails, CRM et parcours de reservation.' },
    { icon: 'store', title: 'Retail & e-commerce', text: 'Boutiques, catalogues, paiement et automatisation.' }
  ];

  readonly process: Array<{ number: string; icon: ProcessIcon; title: string; text: string }> = [
    {
      number: '1',
      icon: 'search',
      title: 'Audit & Strategie',
      text: 'Analyse approfondie de vos besoins et objectifs pour etablir une strategie sur mesure.'
    },
    {
      number: '2',
      icon: 'palette',
      title: 'Conception & Design',
      text: 'Creation d une experience utilisateur intuitive et d un design moderne.'
    },
    {
      number: '3',
      icon: 'code-2',
      title: 'Developpement',
      text: 'Developpement agile avec des technologies de pointe pour des solutions performantes.'
    },
    {
      number: '4',
      icon: 'rocket',
      title: 'Lancement & Suivi',
      text: 'Deploiement optimise et accompagnement continu pour votre reussite.'
    }
  ];

  readonly stack: Array<{ icon: StackIcon; title: string; tools: string; detail: string }> = [
    { icon: 'brain', title: 'AI/ML', tools: 'OpenAI - Claude - RAG', detail: 'Assistants IA, workflows intelligents et recherche augmentee.' },
    { icon: 'code-2', title: 'Frontend', tools: 'Angular - React - Next.js', detail: 'Interfaces modernes, rapides et maintenables.' },
    { icon: 'database', title: 'Backend', tools: 'Node.js - Python - APIs', detail: 'APIs robustes, bases de donnees et integrations metier.' },
    { icon: 'globe-2', title: 'CMS', tools: 'WordPress - Strapi', detail: 'Contenus structures, back-office clair et publication fluide.' },
    { icon: 'shopping-bag', title: 'E-commerce', tools: 'Shopify - WooCommerce', detail: 'Parcours d achat, catalogue, paiement et automatisation.' },
    { icon: 'chart-no-axes-column', title: 'Analytics', tools: 'GA4 - Looker Studio - Mixpanel', detail: 'Tracking, dashboards et decisions basees sur les donnees.' },
    { icon: 'palette', title: 'Design & DA', tools: 'Figma - Adobe Creative Suite', detail: 'Direction artistique, design system et prototypes UX.' },
    { icon: 'video', title: 'Video & Motion', tools: 'After Effects - Premiere Pro', detail: 'Motion design, contenus courts et assets de marque.' },
    { icon: 'share-2', title: 'Social Media', tools: 'Community - Ads - Content', detail: 'Presence sociale, campagnes et calendrier editorial.' },
    { icon: 'smartphone', title: 'Mobile', tools: 'React Native - Flutter', detail: 'Applications mobiles performantes et deployables.' },
    { icon: 'cloud', title: 'Cloud', tools: 'AWS - Google Cloud', detail: 'Hebergement scalable, securite et supervision.' },
    { icon: 'settings', title: 'DevOps', tools: 'Docker - CI/CD - Monitoring', detail: 'Pipelines, livraison continue et environnements fiables.' }
  ];

  ngAfterViewInit(): void {
    const loader = this.loader?.nativeElement;
    gsap.from('.hero-title span', {
      y: 38,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.08,
      delay: 0.25
    });
    gsap.from('.reveal-item', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.08,
      delay: 0.55
    });
    if (loader) {
      gsap.to(loader, {
        opacity: 0,
        yPercent: -100,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 1.45,
        onComplete: () => loader.remove()
      });
    }
  }
}
