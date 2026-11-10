import { TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { CONTACT_URL, PROMOTION_LINK } from '../../../core/site.config';
import { SITE_ROUTES } from '../site.routes';
import { PROMOTIONS } from './promotion-content';
import { PromotionPageComponent } from './promotion-page-component';

describe('PromotionPageComponent', () => {
  it('links the navigation to a registered promotion route', () => {
    expect(SITE_ROUTES.some(route => `/${route.path}` === PROMOTION_LINK.path)).toBe(true);
  });

  it.each(PROMOTIONS)('renders $slug with plans, FAQ and one conversion flow', async item => {
    await TestBed.configureTestingModule({
      imports: [PromotionPageComponent],
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: { snapshot: { data: { slug: item.slug } } } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(PromotionPageComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('h1')).toHaveLength(1);
    expect(el.querySelector('h1')?.textContent).toContain(item.hero.heading.key);
    expect(el.querySelector('h1 + p')?.textContent).toContain('R$ 280');
    expect(el.querySelectorAll('#promocao-oferta > div > ul:first-of-type > li')).toHaveLength(item.offer.plans.length);
    expect(el.querySelectorAll('#promocao-faq details')).toHaveLength(item.faq.items.length);
    const ctas = Array.from(el.querySelectorAll<HTMLAnchorElement>('a[href^="https://wa.me"]'));
    expect(ctas).toHaveLength(3);
    for (const cta of ctas) expect(cta.href).toBe(`${CONTACT_URL}?text=${encodeURIComponent(item.cta.message)}`);
    const secondary = el.querySelector<HTMLAnchorElement>('a[target="_blank"][rel="noopener noreferrer"]')!;
    expect(secondary.textContent).toContain(item.transformation.secondary.label);
  });

  it('marks an expired campaign as noindex with a notice', async () => {
    const item = { ...PROMOTIONS[0], expiresAt: '2000-01-01T00:00:00Z' };
    PROMOTIONS.splice(0, 1, item);
    await TestBed.configureTestingModule({
      imports: [PromotionPageComponent],
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: { snapshot: { data: { slug: item.slug } } } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(PromotionPageComponent);
    await fixture.whenStable();
    expect(TestBed.inject(Meta).getTag('name="robots"')?.content).toBe('noindex,follow');
    expect((fixture.nativeElement as HTMLElement).querySelector('[role="status"]')?.textContent).toContain('encerrada');
  });
});
