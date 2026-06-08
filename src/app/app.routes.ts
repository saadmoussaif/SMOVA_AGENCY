import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DirectorComponent } from './pages/director/director.component';
import { ServicesComponent } from './sections/services/services.component';

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
    path: 'mot-du-directeur',
    component: DirectorComponent,
    title: 'SMAgency - Mot du Directeur'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
