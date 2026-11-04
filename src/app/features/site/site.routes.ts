import { Routes } from '@angular/router';

export const SITE_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
];
