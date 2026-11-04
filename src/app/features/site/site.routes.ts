import { Routes } from '@angular/router';

export const SITE_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./home/home-page-component').then(m => m.HomePageComponent) },
];
