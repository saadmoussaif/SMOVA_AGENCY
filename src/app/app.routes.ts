import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DirectorComponent } from './pages/director/director.component';
import { ServicesComponent } from './sections/services/services.component';
import { MarketingDigitalComponent } from './pages/expertises/marketing-digital/marketing-digital.component';
import { MobileAppsComponent } from './pages/expertises/mobile-apps/mobile-apps.component';
import { SystemsComponent } from './pages/expertises/systems/systems.component';
import { WebAppsComponent } from './pages/expertises/web-apps/web-apps.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { StaticInfoComponent } from './pages/static-info/static-info.component';
import { CarrieresComponent } from './pages/carrieres/carrieres.component';
import { OffresEmploiComponent } from './pages/carrieres/offres-emploi/offres-emploi.component';
import { StagesComponent } from './pages/carrieres/stages/stages.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'SMOVAGENCY - Accueil'
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'SMOVAGENCY - Expertises'
  },
  {
    path: 'expertises/applications-mobiles',
    component: MobileAppsComponent,
    title: 'SMOVAGENCY - Applications mobiles'
  },
  {
    path: 'expertises/applications-web',
    component: WebAppsComponent,
    title: 'SMOVAGENCY - Applications web'
  },
  {
    path: 'expertises/marketing-digital',
    component: MarketingDigitalComponent,
    title: 'SMOVAGENCY - Marketing digital'
  },
  {
    path: 'expertises/systemes',
    component: SystemsComponent,
    title: 'SMOVAGENCY - Systemes digitaux'
  },
  {
    path: 'mot-du-directeur',
    component: DirectorComponent,
    title: 'SMOVAGENCY - Mot du Directeur'
  },
  {
    path: 'mentions-legales',
    component: LegalNoticeComponent,
    title: 'SMOVAGENCY - Mentions legales'
  },
  {
    path: 'politique-confidentialite',
    component: StaticInfoComponent,
    title: 'SMOVAGENCY - Politique de confidentialite',
    data: {
      kicker: 'Confidentialite',
      title: 'Politique de confidentialite',
      description: 'Cette page explique comment SMOVAGENCY traite les informations transmises via le site et les formulaires de contact.',
      items: [
        'Les donnees envoyees via le formulaire sont utilisees uniquement pour repondre a votre demande ou preparer un echange projet.',
        'SMOVAGENCY ne revend pas vos informations personnelles a des tiers.',
        'Vous pouvez demander la modification ou la suppression de vos donnees en contactant contact@smagency.ma.'
      ]
    }
  },
  {
    path: 'actualites',
    component: StaticInfoComponent,
    title: 'SMOVAGENCY - Actualites',
    data: {
      kicker: 'Actualites',
      title: 'Actualites SMOVAGENCY',
      description: 'Nos contenus, annonces et retours d experience seront publies ici prochainement.',
      items: [
        'Cette rubrique est en preparation.',
        'Nous y partagerons des actualites sur le digital, l IA, les applications web et la croissance des startups.',
        'Pour une demande presse ou collaboration, contactez notre equipe.'
      ]
    }
  },

  {
    path: 'carrieres',
    component: CarrieresComponent,
    title: 'SMOVAGENCY - Carrieres'
  },
  {
    path: 'carrieres/offres-emploi',
    component: OffresEmploiComponent,
    title: 'SMOVAGENCY - Offres d emploi'
  },
  {
    path: 'carrieres/stages',
    component: StagesComponent,
    title: 'SMOVAGENCY - Stages'
  },

  // ✅ Redirection ancienne route /stages vers /carrieres/stages
  {
    path: 'stages',
    redirectTo: 'carrieres/stages',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: ''
  }
];
