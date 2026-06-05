import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './sections/services/services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Atlas Nova Digital - Accueil'
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Atlas Nova Digital - Expertises'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
