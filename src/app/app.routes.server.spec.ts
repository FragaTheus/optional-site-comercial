import { RenderMode } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';
import { SITE_ROUTES } from './features/site/site.routes';

describe('serverRoutes', () => {
  it('uses the not-found page for unknown client routes without restoring the retired slug', () => {
    const paths = SITE_ROUTES.map((route) => route.path);

    expect(paths.at(-1)).toBe('**');
    expect(paths).not.toContain('servicos/landing-pages');
  });

  it('prerenders the registered pages and returns a real 404 for unknown paths', () => {
    const prerendered = serverRoutes.filter((route) => route.renderMode === RenderMode.Prerender);

    expect(prerendered).toHaveLength(9);
    expect(prerendered.map((route) => route.path)).not.toContain('servicos/landing-pages');
    expect(serverRoutes.find((route) => route.path === '**')).toEqual({
      path: '**',
      renderMode: RenderMode.Server,
      status: 404,
    });
  });
});
