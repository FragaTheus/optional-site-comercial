import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { SERVICE_LINKS } from '../../../core/site.config';
import { ServicePageComponent } from './service-page-component';
import { SERVICES } from './service-content';

describe('ServicePageComponent', () => {
  it('uses four routes and includes campaign landing pages in the sites page', () => {
    const sites = SERVICES.find(service => service.slug === 'sites')!;

    expect(SERVICE_LINKS).toHaveLength(4);
    expect(SERVICE_LINKS.map(service => service.slug)).not.toContain('landing-pages');
    expect(sites.title).toContain('sites e landing pages');
    expect(sites.description).toContain('landing pages');
    expect(sites.faq.some(item => item.q.includes('landing pages'))).toBe(true);
  });

  it('has content for every service link', () => {
    expect(SERVICES.map(s => s.slug).sort()).toEqual(SERVICE_LINKS.map(s => s.slug).sort());
    expect(new Set(SERVICES.map(s => s.title)).size).toBe(SERVICES.length);
    expect(new Set(SERVICES.map(s => s.description)).size).toBe(SERVICES.length);
  });

  it.each(SERVICES)('renders /servicos/$slug with a single h1 and internal links', async service => {
    await TestBed.configureTestingModule({
      imports: [ServicePageComponent],
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: { snapshot: { data: { slug: service.slug } } } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(ServicePageComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('h1').length).toBe(1);
    expect(el.querySelector('app-breadcrumb [aria-current="page"]')?.textContent).toContain(service.label);
    expect(el.querySelectorAll('h2').length).toBeGreaterThanOrEqual(6);
    expect(el.querySelector('#contato')).not.toBeNull();
    const hrefs = Array.from(el.querySelectorAll('a[href^="/servicos/"]')).map(a => a.getAttribute('href')!.replace('/servicos/', ''));
    expect(hrefs.length).toBeGreaterThan(0);
    hrefs.forEach(h => expect(SERVICE_LINKS.map(s => s.slug)).toContain(h));
  });
});
