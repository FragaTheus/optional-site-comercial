import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomePageComponent } from './home-page-component';

describe('HomePageComponent', () => {
  it('renders the editorial narrative with real internal links', async () => {
    await TestBed.configureTestingModule({ imports: [HomePageComponent], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(HomePageComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Infraestrutura');
    expect(el.querySelectorAll('article h3').length).toBeGreaterThanOrEqual(8);
    expect(el.querySelectorAll('#servicos article h3').length).toBe(5);
    expect(Array.from(el.querySelectorAll('#servicos a[href^="/servicos/"]')).map(a => a.getAttribute('href'))).toEqual(['/servicos/landing-pages', '/servicos/sites', '/servicos/crm', '/servicos/automacoes', '/servicos/erp']);
    expect(el.querySelectorAll('#servicos a[href^="/cases/"]').length).toBe(4);
    expect(el.querySelectorAll('#projetos li').length).toBe(5);
    expect(el.querySelectorAll('.media-card').length).toBe(4);
    expect(el.querySelector('#evolucao, #faq')).toBeNull();
  });
});
