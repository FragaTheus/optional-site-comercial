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
    expect(el.querySelector('#atuacao a[href="/servicos"]')).not.toBeNull();
    expect(el.querySelector('#projetos a[href="/cases"]')).not.toBeNull();
    const solutions = [...el.querySelectorAll('#atuacao article')];
    expect(solutions).toHaveLength(2);
    expect(el.querySelector('#atuacao header')?.classList.contains('lg:row-span-2')).toBe(true);
    expect(el.querySelector('#atuacao footer')?.classList.contains('lg:col-span-full')).toBe(true);
    for (const [index, slug] of ['sites', 'automacoes'].entries()) {
      expect(solutions[index].querySelector(`a[href="/servicos/${slug}"]`)).not.toBeNull();
      expect(solutions[index].classList.contains('media-card')).toBe(true);
      expect(solutions[index].querySelector('img')?.getAttribute('alt')).toBe('');
      expect(solutions[index].querySelector('img')?.getAttribute('src')).toMatch(/^\/home-img\//);
      expect(solutions[index].querySelector('.media-card-fade')).not.toBeNull();
      expect(solutions[index].querySelector('.media-card-scrim')).not.toBeNull();
    }
    const cases = [...el.querySelectorAll('#projetos article')];
    expect(cases).toHaveLength(2);
    for (const [index, slug] of ['lalouise', 'simtese'].entries()) {
      expect(cases[index].querySelector(`a[href="/cases/${slug}"]`)).not.toBeNull();
      expect(cases[index].querySelector('img')?.getAttribute('src')).toBe(CASES.find(item => item.slug === slug)?.heroImage);
    }
    expect(el.querySelectorAll('app-about-section li').length).toBe(3);
    expect(el.querySelector('app-about-section img')).not.toBeNull();
    expect(el.querySelector('app-objections-section, app-services-section, app-showcase-section')).toBeNull();
    expect(el.querySelector('#evolucao, #faq')).toBeNull();
  });
});
