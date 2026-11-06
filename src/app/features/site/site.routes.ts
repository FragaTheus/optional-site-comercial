import { Routes } from '@angular/router';
import { SERVICE_LINKS } from '../../core/site.config';
import { CASES } from './cases/case-content';

export const SITE_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./home/home-page-component').then(m => m.HomePageComponent) },
  { path: 'servicos', loadComponent: () => import('./services-hub/services-hub-page-component').then(m => m.ServicesHubPageComponent) },
  { path: 'cases', loadComponent: () => import('./cases-hub/cases-hub-page-component').then(m => m.CasesHubPageComponent) },
  ...SERVICE_LINKS.map(({ slug }) => ({
    path: `servicos/${slug}`,
    data: { slug },
    loadComponent: () => import('./services/service-page-component').then(m => m.ServicePageComponent),
  })),
  ...CASES.map(({ slug }) => ({
    path: `cases/${slug}`,
    data: { slug },
    loadComponent: () => import('./cases/case-page-component').then(m => m.CasePageComponent),
  })),
];
