import { Routes } from '@angular/router';
import { SERVICE_LINKS } from '../../core/site.config';
import { CASES } from './cases/case-content';
import { PROMOTIONS } from './promotions/promotion-content';

export const SITE_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./home/home-page-component').then(m => m.HomePageComponent) },
  ...SERVICE_LINKS.map(({ slug }) => ({
    path: `servicos/${slug}`,
    data: { slug },
    loadComponent: () => import('./services/service-page-component').then(m => m.ServicePageComponent),
  })),
  { path: 'servicos/integracoes', redirectTo: 'servicos/automacoes', pathMatch: 'full' },
  ...CASES.map(({ slug }) => ({
    path: `cases/${slug}`,
    data: { slug },
    loadComponent: () => import('./cases/case-page-component').then(m => m.CasePageComponent),
  })),
  ...PROMOTIONS.map(({ slug }) => ({
    path: `promocoes/${slug}`,
    data: { slug },
    loadComponent: () => import('./promotions/promotion-page-component').then(m => m.PromotionPageComponent),
  })),
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found-page-component').then(m => m.NotFoundPageComponent),
  },
];
