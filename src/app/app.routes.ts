import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './sections/services/services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'mekAGency - Accueil'
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'mekAGency - Expertises'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
