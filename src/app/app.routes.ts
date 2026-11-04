import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  { path: '', component: MainLayout, loadChildren: () => import('./features/site/site.routes').then(m => m.SITE_ROUTES) },
  { path: '**', redirectTo: '' },
];
