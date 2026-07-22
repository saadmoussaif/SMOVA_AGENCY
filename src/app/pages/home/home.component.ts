import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';
import { LucideAngularModule } from 'lucide-angular';
import { ServicesComponent } from '../../sections/services/services.component';
import { TranslationService } from '../../core/translation.service';

type SectorIcon =
  | 'rocket' | 'heart-pulse' | 'building-2' | 'store'
  | 'graduation-cap' | 'landmark' | 'plane' | 'factory';

type SectorItem = {
  icon: SectorIcon;
  titleKey: string;
  textKey: string;
  detailKey: string;
  image: string;
  alt: string;
};

type StackIcon =
  | 'brain' | 'code-2' | 'database' | 'globe-2' | 'shopping-bag'
  | 'chart-no-axes-column' | 'palette' | 'video' | 'share-2'
  | 'smartphone' | 'cloud' | 'settings';

type StackItem = {
  icon: StackIcon;
  title: string;
  tools: string;
  detail: string;
};

type ContactForm = {
  prenom: string;
  email: string;
  societe: string;
  countryIso: string;
  countryCode: string;
  tel: string;
  sujet: string;
  message: string;
};

type ContactCountry = {
  iso: string;
  code: string;
  name: string;
  flagUrl: string;
};

type ClientLogo = {
  name: string;
  type: 'image' | 'text';
  logoUrl?: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ServicesComponent, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home-contact.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  // ✅ Service de traduction
  protected readonly i18n = inject(TranslationService);

  @ViewChild('loader') loader?: ElementRef<HTMLElement>;
  selectedSectorIndex = 0;
  expandedSectorIndex: number | null = null;
  displayedHeroText = '';
  private heroPhraseIndex = 0;
  private heroLetterIndex = 0;
  private isDeletingHeroText = false;
  private typingTimer?: ReturnType<typeof setTimeout>;

  // ✅ Phrases dynamiques via i18n — recalculées à chaque cycle
  get heroPhrases(): string[] {
    return [
      this.i18n.t('hero.phrase1'),
      this.i18n.t('hero.phrase2'),
      this.i18n.t('hero.phrase3'),
    ];
  }

  readonly countries: ContactCountry[] = [
    { iso: 'MA', code: '+212', name: 'Maroc', flagUrl: 'https://flagcdn.com/w40/ma.png' },
    { iso: 'FR', code: '+33', name: 'France', flagUrl: 'https://flagcdn.com/w40/fr.png' },
    { iso: 'DZ', code: '+213', name: 'Algerie', flagUrl: 'https://flagcdn.com/w40/dz.png' },
    { iso: 'TN', code: '+216', name: 'Tunisie', flagUrl: 'https://flagcdn.com/w40/tn.png' },
    { iso: 'SN', code: '+221', name: 'Senegal', flagUrl: 'https://flagcdn.com/w40/sn.png' },
    { iso: 'US', code: '+1', name: 'Etats-Unis', flagUrl: 'https://flagcdn.com/w40/us.png' },
    { iso: 'CA', code: '+1', name: 'Canada', flagUrl: 'https://flagcdn.com/w40/ca.png' },
    { iso: 'GB', code: '+44', name: 'Royaume-Uni', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { iso: 'DE', code: '+49', name: 'Allemagne', flagUrl: 'https://flagcdn.com/w40/de.png' },
    { iso: 'ES', code: '+34', name: 'Espagne', flagUrl: 'https://flagcdn.com/w40/es.png' },
    { iso: 'IT', code: '+39', name: 'Italie', flagUrl: 'https://flagcdn.com/w40/it.png' },
    { iso: 'NL', code: '+31', name: 'Pays-Bas', flagUrl: 'https://flagcdn.com/w40/nl.png' },
    { iso: 'BE', code: '+32', name: 'Belgique', flagUrl: 'https://flagcdn.com/w40/be.png' },
    { iso: 'CH', code: '+41', name: 'Suisse', flagUrl: 'https://flagcdn.com/w40/ch.png' },
    { iso: 'TR', code: '+90', name: 'Turquie', flagUrl: 'https://flagcdn.com/w40/tr.png' },
    { iso: 'EG', code: '+20', name: 'Egypte', flagUrl: 'https://flagcdn.com/w40/eg.png' },
    { iso: 'NG', code: '+234', name: 'Nigeria', flagUrl: 'https://flagcdn.com/w40/ng.png' }
  ];

  focused: Record<string, boolean> = {};

  form: ContactForm = {
    prenom: '', email: '', societe: '',
    countryIso: 'MA', countryCode: '+212',
    tel: '', sujet: '', message: ''
  };

  submitting = false;
  submitted = false;

  // ✅ Logos clients
  readonly clients: ClientLogo[] = [
    { name: 'TurnKey', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Ticka', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Meducate', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Nutrilair', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'AUTO24', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'CMTR', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Yassir', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Inwi', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'CIH Bank', type: 'image', logoUrl: '/assets/images/cih.jpg' },
    { name: 'JumiaFOOD', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Cuisinéco', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'MamaBox', type: 'image', logoUrl: '/assets/images/glovo.png' },
  ];

  readonly partners: ClientLogo[] = [
    { name: 'Revolut', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Doctolib', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'BlaBlaCar', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Vinted', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Klarna', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'N26', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Glovo', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Algolia', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Dataiku', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Payfit', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Alan', type: 'image', logoUrl: '/assets/images/glovo.png' },
    { name: 'Pennylane', type: 'image', logoUrl: '/assets/images/glovo.png' },
  ];

  // ✅ Secteurs avec clés i18n
  readonly sectors: SectorItem[] = [
    {
      icon: 'rocket', titleKey: 'sector.saas.title',
      textKey: 'sector.saas.text', detailKey: 'sector.saas.detail',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
      alt: 'Equipe startup travaillant sur un produit digital'
    },
    {
      icon: 'heart-pulse', titleKey: 'sector.health.title',
      textKey: 'sector.health.text', detailKey: 'sector.health.detail',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
      alt: 'Professionnel de sante utilisant une interface digitale'
    },
    {
      icon: 'building-2', titleKey: 'sector.immo.title',
      textKey: 'sector.immo.text', detailKey: 'sector.immo.detail',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
      alt: 'Maison moderne representant le secteur immobilier'
    },
    {
      icon: 'store', titleKey: 'sector.retail.title',
      textKey: 'sector.retail.text', detailKey: 'sector.retail.detail',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
      alt: 'Experience e-commerce et paiement en ligne'
    },
    {
      icon: 'graduation-cap', titleKey: 'sector.edu.title',
      textKey: 'sector.edu.text', detailKey: 'sector.edu.detail',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
      alt: 'Etudiants travaillant ensemble avec des ordinateurs'
    },
    {
      icon: 'landmark', titleKey: 'sector.finance.title',
      textKey: 'sector.finance.text', detailKey: 'sector.finance.detail',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
      alt: 'Analyse financiere et documents de gestion'
    },
    {
      icon: 'plane', titleKey: 'sector.tourism.title',
      textKey: 'sector.tourism.text', detailKey: 'sector.tourism.detail',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      alt: 'Lieu touristique avec piscine et architecture de voyage'
    },
    {
      icon: 'factory', titleKey: 'sector.industry.title',
      textKey: 'sector.industry.text', detailKey: 'sector.industry.detail',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
      alt: 'Equipe industrielle travaillant avec des technologies'
    }
  ];

  readonly techStack: StackItem[] = [
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

  get selectedContactCountry(): ContactCountry {
    return this.countries.find((c) => c.iso === this.form.countryIso) ?? this.countries[0];
  }

  selectContactCountry(countryIso: string): void {
    const country = this.countries.find((c) => c.iso === countryIso);
    if (!country) return;
    this.form.countryIso = country.iso;
    this.form.countryCode = country.code;
  }

  numbersOnly(event: Event): void {
    const input = event.target as HTMLInputElement;
    const sanitizedValue = input.value.replace(/\D/g, '');
    input.value = sanitizedValue;
    this.form.tel = sanitizedValue;
  }

  setFocus(field: string, value: boolean): void {
    this.focused = { ...this.focused, [field]: value };
  }

  onLogoError(event: Event, name: string): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const span = document.createElement('span');
    span.className = 'pill-text';
    span.textContent = name;
    img.parentElement?.appendChild(span);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.form.prenom || !this.form.email || !this.form.sujet || !this.form.message) return;

    this.submitting = true;
    this.submitted = false;

    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
        this.form = {
          prenom: '', email: '', societe: '',
          countryIso: 'MA', countryCode: '+212',
          tel: '', sujet: '', message: ''
        };
      }, 4000);
    }, 1800);
  }

  ngAfterViewInit(): void {
    const loader = this.loader?.nativeElement;
    this.typingTimer = setTimeout(() => this.runHeroTyping(), 180);

    gsap.from('.hero-typing-panel > *', {
      y: 38, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, delay: 0.25
    });
    gsap.from('.reveal-item', {
      y: 24, opacity: 0, duration: 0.7, ease: 'power2.out', stagger: 0.08, delay: 0.55
    });

    if (loader) {
      gsap.to(loader, {
        opacity: 0, yPercent: -100, duration: 0.8,
        ease: 'power2.inOut', delay: 1.45,
        onComplete: () => loader.remove()
      });
    }
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
  }

  private runHeroTyping(): void {
    const phrases = this.heroPhrases;
    const currentPhrase = phrases[this.heroPhraseIndex % phrases.length];

    if (this.isDeletingHeroText) {
      this.heroLetterIndex -= 1;
    } else {
      this.heroLetterIndex += 1;
    }

    this.displayedHeroText = currentPhrase.slice(0, this.heroLetterIndex);
    let delay = this.isDeletingHeroText ? 34 : 58;

    if (!this.isDeletingHeroText && this.heroLetterIndex === currentPhrase.length) {
      delay = 1450;
      this.isDeletingHeroText = true;
    }

    if (this.isDeletingHeroText && this.heroLetterIndex === 0) {
      this.isDeletingHeroText = false;
      this.heroPhraseIndex = (this.heroPhraseIndex + 1) % phrases.length;
      delay = 360;
    }

    this.typingTimer = setTimeout(() => this.runHeroTyping(), delay);
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

  sectorBackground(sector: SectorItem): string {
    return `url(${sector.image})`;
  }
}