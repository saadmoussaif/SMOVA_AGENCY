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

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'SMAgency - Accueil'
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'SMAgency - Expertises'
  },
  {
    path: 'expertises/applications-mobiles',
    component: MobileAppsComponent,
    title: 'SMAgency - Applications mobiles'
  },
  {
    path: 'expertises/applications-web',
    component: WebAppsComponent,
    title: 'SMAgency - Applications web'
  },
  {
    path: 'expertises/marketing-digital',
    component: MarketingDigitalComponent,
    title: 'SMAgency - Marketing digital'
  },
  {
    path: 'expertises/systemes',
    component: SystemsComponent,
    title: 'SMAgency - Systemes digitaux'
  },
  {
    path: 'mot-du-directeur',
    component: DirectorComponent,
    title: 'SMAgency - Mot du Directeur'
  },
  {
    path: 'mentions-legales',
    component: LegalNoticeComponent,
    title: 'SMAgency - Mentions legales'
  },
  {
    path: 'politique-confidentialite',
    component: StaticInfoComponent,
    title: 'SMAgency - Politique de confidentialite',
    data: {
      kicker: 'Confidentialite',
      title: 'Politique de confidentialite',
      description: 'Cette page explique comment SMAgency traite les informations transmises via le site et les formulaires de contact.',
      items: [
        'Les donnees envoyees via le formulaire sont utilisees uniquement pour repondre a votre demande ou preparer un echange projet.',
        'SMAgency ne revend pas vos informations personnelles a des tiers.',
        'Vous pouvez demander la modification ou la suppression de vos donnees en contactant contact@smagency.ma.'
      ]
    }
  },
  {
    path: 'actualites',
    component: StaticInfoComponent,
    title: 'SMAgency - Actualites',
    data: {
      kicker: 'Actualites',
      title: 'Actualites SMAgency',
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
    component: StaticInfoComponent,
    title: 'SMAgency - Carrieres',
    data: {
      kicker: 'Carrieres',
      title: 'Rejoindre SMAgency',
      description: 'Nous construisons une equipe technique et creative pour accompagner des projets digitaux ambitieux.',
      items: [
        'Les opportunites seront publiees ici selon les besoins de l agence.',
        'Profils recherches: developpement web, mobile, design, marketing digital et gestion de projet.',
        'Vous pouvez envoyer une candidature spontanee via le formulaire de contact.'
      ]
    }
  },
  {
    path: 'stages',
    component: StaticInfoComponent,
    title: 'SMAgency - Stages',
    data: {
      kicker: 'Stages',
      title: 'Stages chez SMAgency',
      description: 'Nous accueillons des profils motives souhaitant progresser sur des projets digitaux concrets.',
      items: [
        'Les offres de stage seront ajoutees ici prochainement.',
        'Domaines possibles: Angular, design UI, applications mobiles, marketing digital et automatisation.',
        'Pour proposer votre candidature, utilisez le formulaire de contact avec le sujet Stage.'
      ]
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
