import { RenderMode, ServerRoute } from '@angular/ssr';
import { SERVICE_LINKS } from './core/site.config';
import { CASES } from './features/site/cases/case-content';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  ...SERVICE_LINKS.map(({ slug }) => ({
    path: `servicos/${slug}`,
    renderMode: RenderMode.Prerender as const,
  })),
  ...CASES.map(({ slug }) => ({
    path: `cases/${slug}`,
    renderMode: RenderMode.Prerender as const,
  })),
  { path: '**', renderMode: RenderMode.Server, status: 404 },
];
