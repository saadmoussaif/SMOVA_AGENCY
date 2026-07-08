import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
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

type SectorItem = {
  icon: SectorIcon;
  title: string;
  text: string;
  detail: string;
  image: string;
  alt: string;
};

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

type StackItem = {
  icon: StackIcon;
  title: string;
  tools: string;
  detail: string;
};

type CountryCode = {
  iso: string;
  code: string;
  label: string;
  flagClass: string;
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
  imports: [
    CommonModule,
    FormsModule,
    ServicesComponent,
    LucideAngularModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home-contact.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('loader') loader?: ElementRef<HTMLElement>;
  selectedSectorIndex = 0;
  expandedSectorIndex: number | null = null;
  displayedHeroText = '';
  private heroPhraseIndex = 0;
  private heroLetterIndex = 0;
  private isDeletingHeroText = false;
  private typingTimer?: ReturnType<typeof setTimeout>;

  readonly heroPhrases = [
    'Nous creons des solutions digitales qui font la difference.',
    'Sites web, apps, IA et marketing pour startups ambitieuses.',
    'Des produits rapides, clairs et prets a scaler.'
  ];

  readonly countryCodes: CountryCode[] = [
    { iso: 'MA', code: '+212', label: 'Maroc', flagClass: 'flag-ma' },
    { iso: 'FR', code: '+33', label: 'France', flagClass: 'flag-fr' },
    { iso: 'BE', code: '+32', label: 'Belgique', flagClass: 'flag-be' },
    { iso: 'CA', code: '+1', label: 'Canada', flagClass: 'flag-ca' },
    { iso: 'US', code: '+1', label: 'Etats-Unis', flagClass: 'flag-us' },
    { iso: 'ES', code: '+34', label: 'Espagne', flagClass: 'flag-es' }
  ];

  selectedCountryIso = 'MA';
  countryMenuOpen = false;

  readonly projectSubjects = [
    'Application web',
    'Application mobile',
    'Marketing digital',
    'Systemes digitaux & automatisation',
    'Site web / e-commerce',
    'Consulting digital & IA',
    'Autre besoin'
  ];

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
    prenom: '',
    email: '',
    societe: '',
    countryIso: 'MA',
    countryCode: '+212',
    tel: '',
    sujet: '',
    message: ''
  };

  submitting = false;
  submitted = false;

  // ✅ Ligne 1 — Startups Maroc
  readonly clients: ClientLogo[] = [
    { name: 'TurnKey Immobilier', type: 'text' },
    { name: 'Ticka', type: 'text' },
    { name: 'Meducate', type: 'text' },
    { name: 'Nutrilair', type: 'text' },
    { name: 'AUTO24', type: 'text' },
    { name: 'CMTR', type: 'text' },
    { name: 'Titanium', type: 'text' },
    { name: 'Cuisinéco', type: 'text' },
    { name: 'Mama Box', type: 'text' },
    { name: 'Yassir', type: 'text' },
    { name: 'Inwi', type: 'text' },
    { name: 'CIH Bank', type: 'text' },
  ];

  // ✅ Ligne 2 — Startups Europe
  readonly partners: ClientLogo[] = [
    { name: 'Revolut', type: 'text' },
    { name: 'Doctolib', type: 'text' },
    { name: 'BlaBlaCar', type: 'text' },
    { name: 'Vinted', type: 'text' },
    { name: 'Klarna', type: 'text' },
    { name: 'N26', type: 'text' },
    { name: 'Glovo', type: 'text' },
    { name: 'Algolia', type: 'text' },
    { name: 'Dataiku', type: 'text' },
    { name: 'Payfit', type: 'text' },
    { name: 'Alan', type: 'text' },
    { name: 'Pennylane', type: 'text' },
  ];

  readonly sectors: SectorItem[] = [
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
    { number: '1', icon: 'search', title: 'Audit & Strategie', text: 'Analyse approfondie de vos besoins et objectifs pour etablir une strategie sur mesure.' },
    { number: '2', icon: 'palette', title: 'Conception & Design', text: 'Creation d une experience utilisateur intuitive et d un design moderne.' },
    { number: '3', icon: 'code-2', title: 'Developpement', text: 'Developpement agile avec des technologies de pointe pour des solutions performantes.' },
    { number: '4', icon: 'rocket', title: 'Lancement & Suivi', text: 'Deploiement optimise et accompagnement continu pour votre reussite.' }
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

  get selectedCountry(): CountryCode {
    return this.countryCodes.find((c) => c.iso === this.selectedCountryIso) ?? this.countryCodes[0];
  }

  get selectedContactCountry(): ContactCountry {
    return this.countries.find((c) => c.iso === this.form.countryIso) ?? this.countries[0];
  }

  toggleCountryMenu(): void {
    this.countryMenuOpen = !this.countryMenuOpen;
  }

  selectCountry(countryIso: string): void {
    this.selectedCountryIso = countryIso;
    this.countryMenuOpen = false;
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
          prenom: '',
          email: '',
          societe: '',
          countryIso: 'MA',
          countryCode: '+212',
          tel: '',
          sujet: '',
          message: ''
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
        opacity: 0,
        yPercent: -100,
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 1.45,
        onComplete: () => loader.remove()
      });
    }
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
  }

  private runHeroTyping(): void {
    const currentPhrase = this.heroPhrases[this.heroPhraseIndex];

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
      this.heroPhraseIndex = (this.heroPhraseIndex + 1) % this.heroPhrases.length;
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