import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SITE_ROUTES } from '../site.routes';
import { CASES } from './case-content';
import { CasePageComponent } from './case-page-component';

describe('CasePageComponent', () => {
  it('creates one static route for every case', () => {
    expect(new Set(CASES.map(item => item.slug)).size).toBe(CASES.length);
    for (const item of CASES) {
      expect(SITE_ROUTES.some(route => route.path === `cases/${item.slug}` && route.data?.['slug'] === item.slug)).toBe(true);
    }
  });

  it.each(CASES)('renders the case $slug with its links and content', async item => {
    await TestBed.configureTestingModule({
      imports: [CasePageComponent],
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: { snapshot: { data: { slug: item.slug } } } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(CasePageComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('h1')).toHaveLength(1);
    expect(el.querySelector('h1')?.textContent).toContain(item.project);
    expect(el.querySelector('app-breadcrumb')?.textContent).toContain('Início');
    expect(el.querySelector('app-breadcrumb')?.textContent).toContain('Cases');
    expect(el.querySelector('app-breadcrumb [aria-current="page"]')?.textContent).toContain(item.project);
    expect(el.querySelector('#problema')?.textContent).toContain(item.current);
    expect(el.querySelector('#problema')?.textContent).toContain(item.ideal);
    expect(el.querySelectorAll('app-case-solution-section li')).toHaveLength(item.requirements.length);
    expect(el.querySelectorAll('app-case-solution-section img')).toHaveLength(item.images.length);
    expect(el.querySelector('app-case-hero-section a[target="_blank"]')?.getAttribute('href')).toBe(item.projectUrl);
    expect(el.querySelector(`a[href="/servicos/${item.service}"]`)).not.toBeNull();
    expect(el.querySelector('#contato a')?.getAttribute('href')).toContain('wa.me/');
    expect(TestBed.inject(Title).getTitle()).toBe(item.title);
  });
});
