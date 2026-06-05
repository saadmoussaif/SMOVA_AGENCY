import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';
import { LucideAngularModule } from 'lucide-angular';
import { ServicesComponent } from '../../sections/services/services.component';

type SectorIcon = 'rocket' | 'heart-pulse' | 'building-2' | 'store';

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

  readonly process = [
    ['01', 'Audit & strategie', 'Comprendre vos objectifs, vos clients et vos contraintes business.'],
    ['02', 'UX & direction creative', 'Designer une experience claire, belle et orientee conversion.'],
    ['03', 'Developpement agile', 'Construire vite, tester souvent et garder une qualite technique solide.'],
    ['04', 'Lancement & suivi', 'Deployer, mesurer, optimiser et accompagner la croissance.']
  ];

  readonly stack = [
    ['AI/ML', 'OpenAI - Claude - RAG'],
    ['Frontend', 'Angular - React - Next.js'],
    ['Backend', 'Node.js - Python - APIs'],
    ['CMS', 'WordPress - Strapi'],
    ['E-commerce', 'Shopify - WooCommerce'],
    ['Cloud', 'AWS - Google Cloud'],
    ['Design', 'Figma - Adobe Suite'],
    ['DevOps', 'Docker - CI/CD']
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
