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
    expect(sites.title).toContain('landing pages');
    expect(sites.description).toContain('landing pages');
  });

  it('has content for every service link', () => {
    expect(SERVICES.map(s => s.slug).sort()).toEqual(SERVICE_LINKS.map(s => s.slug).sort());
    expect(new Set(SERVICES.map(s => s.title)).size).toBe(SERVICES.length);
    expect(new Set(SERVICES.map(s => s.description)).size).toBe(SERVICES.length);
  });

  it.each(SERVICES)('renders /servicos/$slug with a single h1 and the five StoryBrand sections', async service => {
    await TestBed.configureTestingModule({
      imports: [ServicePageComponent],
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: { snapshot: { data: { slug: service.slug } } } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(ServicePageComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('h1').length).toBe(1);
    expect(el.querySelector('app-breadcrumb [aria-current="page"]')?.textContent).toContain(service.label);
    expect(el.querySelectorAll('h2').length).toBe(4);
    expect(el.querySelector('#contato')).not.toBeNull();
    expect(el.querySelectorAll('section').length).toBe(5);
    const caseHref = el.querySelector('a[href^="/cases/"]')?.getAttribute('href');
    expect(caseHref).toBe(service.solution.caseSlug ? `/cases/${service.solution.caseSlug}` : undefined);
  });

  it('describes four distinct fronts without an independent integrations page', () => {
    const slugs = SERVICE_LINKS.map(s => s.slug);
    expect(new Set(slugs).size).toBe(4);
    expect(slugs).not.toContain('integracoes' as never);
    expect(SERVICES.find(s => s.slug === 'automacoes')!.description).toContain('conecte');
    expect(SERVICES.filter(s => s.simulator).map(s => s.slug)).toEqual(['automacoes']);
  });

  it('renders the outsourcing page with external evidence, five steps and a link to Automações', async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePageComponent],
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: { snapshot: { data: { slug: 'terceirizacao-de-fluxos' } } } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(ServicePageComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Você contrata o resultado. A execução fica com a gente.');
    expect(el.querySelectorAll('[aria-labelledby="service-challenges-title"] ul > li').length).toBe(4);
    const external = [...el.querySelectorAll<HTMLAnchorElement>('aside a')];
    expect(external).toHaveLength(3);
    external.forEach(a => {
      expect(a.target).toBe('_blank');
      expect(a.rel).toBe('noopener noreferrer');
    });
    expect(el.querySelectorAll('[aria-labelledby="service-process-title"] ol > li').length).toBe(5);
    expect(el.querySelector('[aria-labelledby="service-process-title"] ol a')?.getAttribute('href')).toBe('/servicos/automacoes');
    expect(el.querySelector('app-hours-simulator')).toBeNull();
    expect(el.textContent).toContain('Vamos conversar');
  });
});
