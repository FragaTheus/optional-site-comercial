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
    expect(el.querySelector('#atuacao a[href="/servicos"]')).not.toBeNull();
    expect(el.querySelector('#projetos a[href="/cases"]')).not.toBeNull();
    expect(el.querySelectorAll('app-about-section li').length).toBe(3);
    expect(el.querySelector('app-about-section img')).not.toBeNull();
    expect(el.querySelector('app-objections-section, app-services-section, app-showcase-section')).toBeNull();
    expect(el.querySelector('#evolucao, #faq')).toBeNull();
  });
});
