import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';
import { LucideAngularModule } from 'lucide-angular';
import { ServicesComponent } from '../../sections/services/services.component';

type SectorIcon =
  | 'rocket'
  | 'heart-pulse'
  | 'building-2'
  | 'store'
  | 'graduation-cap'
  | 'landmark'
  | 'plane'
  | 'factory';
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
  selectedSectorIndex = 0;
  expandedSectorIndex: number | null = null;

  readonly clients = Array.from({ length: 40 }, (_, index) => `Client ${String(index + 1).padStart(2, '0')}`);
  readonly partners = Array.from({ length: 24 }, (_, index) => `Partner ${String(index + 1).padStart(2, '0')}`);

  readonly sectors: Array<{ icon: SectorIcon; title: string; text: string; detail: string; image: string; alt: string }> = [
    {
      icon: 'rocket',
      title: 'SaaS & startups',
      text: 'MVP, scale-up, onboarding et outils internes pour equipes ambitieuses.',
      detail: 'Nous concevons des produits SaaS avec parcours d inscription, dashboard, roles utilisateurs, paiement, analytics et architecture prete a evoluer.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
      alt: 'Equipe startup travaillant sur un produit digital'
    },
    {
      icon: 'heart-pulse',
      title: 'Sante & bien-etre',
      text: 'Experiences digitales fiables pour services sensibles, patients et praticiens.',
      detail: 'Nous construisons des interfaces claires pour rendez-vous, dossiers, suivi patient, contenu medical et operations internes avec une attention forte a la confiance.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
      alt: 'Professionnel de sante utilisant une interface digitale'
    },
    {
      icon: 'building-2',
      title: 'Immobilier & PropTech',
      text: 'Portails, CRM, parcours de reservation et outils pour agents immobiliers.',
      detail: 'Nous aidons les agences et promoteurs avec portails annonces, estimation, espace client, visite virtuelle, CRM et workflows de qualification.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
      alt: 'Maison moderne representant le secteur immobilier'
    },
    {
      icon: 'store',
      title: 'Retail & e-commerce',
      text: 'Boutiques, catalogues, paiement, logistique et automatisation commerciale.',
      detail: 'Nous optimisons le tunnel d achat, les fiches produits, la gestion catalogue, les campagnes, le tracking et les automatisations apres-vente.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
      alt: 'Experience e-commerce et paiement en ligne'
    },
    {
      icon: 'graduation-cap',
      title: 'Education & EdTech',
      text: 'Plateformes e-learning, espaces etudiants et outils de gestion pedagogique.',
      detail: 'Nous creons des LMS, portails d inscription, espaces formateurs, contenus interactifs, tableaux de bord et automatisations pour ecoles, centres et organismes de formation.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
      alt: 'Etudiants travaillant ensemble avec des ordinateurs'
    },
    {
      icon: 'landmark',
      title: 'Finance & FinTech',
      text: 'Interfaces securisees pour services financiers, paiement et reporting.',
      detail: 'Nous accompagnons les acteurs finance avec dashboards, onboarding client, parcours de paiement, reporting, automatisation documentaire et experiences digitales rassurantes.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
      alt: 'Analyse financiere et documents de gestion'
    },
    {
      icon: 'plane',
      title: 'Tourisme & Hotellerie',
      text: 'Reservation, experience client, sites multilingues et acquisition directe.',
      detail: 'Nous construisons des sites de reservation, moteurs de demande, parcours multilingues, contenus destination, CRM client et campagnes pour hotels, riads et agences de voyage.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      alt: 'Lieu touristique avec piscine et architecture de voyage'
    },
    {
      icon: 'factory',
      title: 'Industrie & Services',
      text: 'Digitalisation des operations, outils internes et suivi de performance.',
      detail: 'Nous developpons des extranets, outils de suivi, formulaires terrain, dashboards de production, automatisations administratives et integrations avec vos systemes existants.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
      alt: 'Equipe industrielle travaillant avec des technologies'
    }
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

  toggleSectorDescription(index: number): void {
    this.selectedSectorIndex = index;
    this.expandedSectorIndex = this.expandedSectorIndex === index ? null : index;
  }

  previousSector(): void {
    this.selectedSectorIndex =
      this.selectedSectorIndex === 0 ? this.sectors.length - 1 : this.selectedSectorIndex - 1;
    this.expandedSectorIndex = null;
  }

  nextSector(): void {
    this.selectedSectorIndex =
      this.selectedSectorIndex === this.sectors.length - 1 ? 0 : this.selectedSectorIndex + 1;
    this.expandedSectorIndex = null;
  }
}
