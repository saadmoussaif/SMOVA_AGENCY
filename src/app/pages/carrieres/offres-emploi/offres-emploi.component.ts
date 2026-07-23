import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslationService } from '../../../core/translation.service';

export type ContractType = 'all' | 'cdi' | 'cdd' | 'freelance' | 'stage';
export type Department   = 'all' | 'tech' | 'marketing' | 'design' | 'growth';

export interface JobOffer {
  id:         string;
  title:      string;
  department: Exclude<Department, 'all'>;
  contract:   Exclude<ContractType, 'all'>;
  location:   string;
  remote:     'full' | 'hybrid' | 'on-site';
  posted:     string;   // ISO date
  featured:   boolean;
  tags:       string[];
  description: string;
}

@Component({
  selector: 'app-offres-emploi',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './offres-emploi.component.html',
  styleUrl: './offres-emploi.component.scss'
})
export class OffresEmploiComponent {

  readonly i18n = inject(TranslationService);

  // ── Filtres actifs ───────────────────────────────────
  activeContract  = signal<ContractType>('all');
  activeDept      = signal<Department>('all');
  searchQuery     = signal('');

  // ── Données ──────────────────────────────────────────
  readonly contracts: { key: ContractType; label: string }[] = [
    { key: 'all',       label: 'Tous' },
    { key: 'cdi',       label: 'CDI' },
    { key: 'cdd',       label: 'CDD' },
    { key: 'freelance', label: 'Freelance' },
  ];

  readonly departments: { key: Department; label: string; icon: string }[] = [
    { key: 'all',       label: 'Tous les départements', icon: 'layout-grid' },
    { key: 'tech',      label: 'Tech & Dev',             icon: 'code-2'      },
    { key: 'marketing', label: 'Marketing & Growth',      icon: 'megaphone'   },
    { key: 'design',    label: 'Design & UX',             icon: 'palette'     },
    { key: 'growth',    label: 'Business Dev',            icon: 'trending-up' },
  ];

  readonly allJobs: JobOffer[] = [
    {
      id:         'lead-dev-fullstack',
      title:      'Lead Developer Fullstack',
      department: 'tech',
      contract:   'cdi',
      location:   'Rabat, Maroc',
      remote:     'hybrid',
      posted:     '2026-07-10',
      featured:   true,
      tags:       ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
      description: 'Piloter l\'architecture technique de nos produits SaaS et encadrer une équipe de 4 développeurs.'
    },
    {
      id:         'dev-mobile-react-native',
      title:      'Développeur Mobile React Native',
      department: 'tech',
      contract:   'cdi',
      location:   'Casablanca, Maroc',
      remote:     'hybrid',
      posted:     '2026-07-12',
      featured:   false,
      tags:       ['React Native', 'TypeScript', 'Expo', 'Firebase'],
      description: 'Concevoir et livrer des applications mobiles iOS/Android performantes pour nos clients startups et PME.'
    },
    {
      id:         'growth-hacker',
      title:      'Growth Hacker / Traffic Manager',
      department: 'marketing',
      contract:   'cdi',
      location:   'Rabat, Maroc',
      remote:     'hybrid',
      posted:     '2026-07-08',
      featured:   true,
      tags:       ['Google Ads', 'Meta Ads', 'SEO', 'Analytics'],
      description: 'Concevoir et piloter les stratégies d\'acquisition digitale de nos clients avec un focus ROI.'
    },
    {
      id:         'ux-ui-designer',
      title:      'UX/UI Designer Senior',
      department: 'design',
      contract:   'cdi',
      location:   'Rabat, Maroc',
      remote:     'full',
      posted:     '2026-07-14',
      featured:   false,
      tags:       ['Figma', 'Design System', 'Prototypage', 'User Research'],
      description: 'Créer des interfaces intuitives et mémorables pour nos produits digitaux en collaboration étroite avec les devs.'
    },
    {
      id:         'dev-ia-python',
      title:      'Développeur IA / Python',
      department: 'tech',
      contract:   'freelance',
      location:   'Remote',
      remote:     'full',
      posted:     '2026-07-15',
      featured:   true,
      tags:       ['Python', 'OpenAI', 'LangChain', 'FastAPI'],
      description: 'Développer des agents IA, pipelines RAG et intégrations LLM pour des projets clients innovants.'
    },
    {
      id:         'business-dev',
      title:      'Business Developer B2B',
      department: 'growth',
      contract:   'cdi',
      location:   'Casablanca, Maroc',
      remote:     'on-site',
      posted:     '2026-07-05',
      featured:   false,
      tags:       ['Prospection', 'CRM', 'Négociation', 'SaaS'],
      description: 'Développer le portefeuille clients de l\'agence sur le marché marocain et francophone.'
    },
  ];

  // ── Filtrage calculé ─────────────────────────────────
  readonly filteredJobs = computed(() => {
    const contract = this.activeContract();
    const dept     = this.activeDept();
    const query    = this.searchQuery().toLowerCase().trim();

    return this.allJobs.filter(job => {
      const matchContract = contract === 'all' || job.contract === contract;
      const matchDept     = dept     === 'all' || job.department === dept;
      const matchSearch   = !query
        || job.title.toLowerCase().includes(query)
        || job.tags.some(t => t.toLowerCase().includes(query));
      return matchContract && matchDept && matchSearch;
    });
  });

  readonly featuredJobs = computed(() => this.allJobs.filter(j => j.featured));

  // ── Helpers ──────────────────────────────────────────
  setContract(c: ContractType) { this.activeContract.set(c); }
  setDept(d: Department)       { this.activeDept.set(d); }
  onSearch(e: Event)           { this.searchQuery.set((e.target as HTMLInputElement).value); }

  remoteLabel(r: JobOffer['remote']): string {
    return { 'full': '100% Remote', 'hybrid': 'Hybride', 'on-site': 'Présentiel' }[r];
  }

  remoteClass(r: JobOffer['remote']): string {
    return { 'full': 'remote-full', 'hybrid': 'remote-hybrid', 'on-site': 'remote-onsite' }[r];
  }

  contractLabel(c: JobOffer['contract']): string {
    return { cdi: 'CDI', cdd: 'CDD', freelance: 'Freelance', stage: 'Stage' }[c];
  }

  daysAgo(iso: string): string {
    const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
    if (days === 0) return 'Aujourd\'hui';
    if (days === 1) return 'Hier';
    return `Il y a ${days} jours`;
  }

  trackById(_: number, job: JobOffer) { return job.id; }
  getJobCountByDepartment(deptKey: Department): number {
  if (deptKey === 'all') return this.allJobs.length;
  return this.allJobs.filter(job => job.department === deptKey).length;
}

// Pour obtenir le label d'un département
getDepartmentLabel(deptKey: string): string {
  const found = this.departments.find(d => d.key === deptKey);
  return found ? found.label : deptKey;
}

// Pour réinitialiser tous les filtres
resetFilters() {
  this.activeContract.set('all');
  this.activeDept.set('all');
  this.searchQuery.set('');
}
}