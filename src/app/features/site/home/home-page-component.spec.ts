import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePageComponent } from './home-page-component';
import { CASES } from '../cases/case-content';

describe('HomePageComponent', () => {
  it('renders the editorial narrative with real internal links', async () => {
    await TestBed.configureTestingModule({ imports: [HomePageComponent], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(HomePageComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Infraestrutura');
    expect(el.querySelector('#atuacao a[href="#sobre"]')).not.toBeNull();
    expect(el.querySelector('#projetos a[href="#atuacao"]')).not.toBeNull();
    expect(el.querySelectorAll('app-hero-section li')).toHaveLength(3);
    expect(el.querySelector('app-hero-section a[href="#objecoes"]')).not.toBeNull();
    const order = [...el.children].map((c) => c.tagName.toLowerCase());
    expect(order.slice(0, 5)).toEqual(['app-hero-section', 'app-objections-section', 'app-cases-intro-section', 'app-solutions-intro-section', 'app-about-section']);
    const solutions = [...el.querySelectorAll('#atuacao li > a.group')];
    expect(solutions).toHaveLength(5);
    expect(el.querySelectorAll('#projetos details')).toHaveLength(CASES.length);
    for (const item of CASES) {
      expect(el.querySelector(`#projetos a[href="/cases/${item.slug}"]`)).not.toBeNull();
    }
    expect(el.querySelectorAll('app-about-section li').length).toBe(3);
    expect(el.querySelector('app-about-section img')).not.toBeNull();
    expect(el.querySelectorAll('app-objections-section li')).toHaveLength(3);
    expect(el.querySelector('app-services-section, app-showcase-section')).toBeNull();
    expect(el.querySelector('#evolucao, #faq')).toBeNull();
  });
});
