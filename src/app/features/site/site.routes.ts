import { Routes } from '@angular/router';
import { SERVICE_LINKS } from '../../core/site.config';

export const SITE_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./home/home-page-component').then(m => m.HomePageComponent) },
  ...SERVICE_LINKS.map(({ slug }) => ({
    path: `servicos/${slug}`,
    data: { slug },
    loadComponent: () => import('./services/service-page-component').then(m => m.ServicePageComponent),
  })),
];
