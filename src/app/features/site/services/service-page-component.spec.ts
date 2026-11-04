import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { SERVICE_LINKS } from '../../../core/site.config';
import { ServicePageComponent } from './service-page-component';
import { SERVICES } from './service-content';

describe('ServicePageComponent', () => {
  it('has content for every service link', () => {
    expect(SERVICES.map(s => s.slug).sort()).toEqual(SERVICE_LINKS.map(s => s.slug).sort());
    expect(new Set(SERVICES.map(s => s.title)).size).toBe(SERVICES.length);
    expect(new Set(SERVICES.map(s => s.description)).size).toBe(SERVICES.length);
  });

  it.each(SERVICES.map(s => s.slug))('renders /servicos/%s with a single h1 and internal links', async slug => {
    await TestBed.configureTestingModule({
      imports: [ServicePageComponent],
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: { snapshot: { data: { slug } } } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(ServicePageComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('h1').length).toBe(1);
    expect(el.querySelectorAll('h2').length).toBeGreaterThanOrEqual(6);
    expect(el.querySelector('#contato')).not.toBeNull();
    const hrefs = Array.from(el.querySelectorAll('a[href^="/servicos/"]')).map(a => a.getAttribute('href')!.replace('/servicos/', ''));
    expect(hrefs.length).toBeGreaterThan(0);
    hrefs.forEach(h => expect(SERVICE_LINKS.map(s => s.slug)).toContain(h));
  });
});
