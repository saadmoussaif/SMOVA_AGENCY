import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DirectorComponent } from './pages/director/director.component';
import { ServicesComponent } from './sections/services/services.component';
import { MarketingDigitalComponent } from './pages/expertises/marketing-digital/marketing-digital.component';
import { MobileAppsComponent } from './pages/expertises/mobile-apps/mobile-apps.component';
import { SystemsComponent } from './pages/expertises/systems/systems.component';
import { WebAppsComponent } from './pages/expertises/web-apps/web-apps.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';

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
    path: '**',
    redirectTo: ''
  }
];
