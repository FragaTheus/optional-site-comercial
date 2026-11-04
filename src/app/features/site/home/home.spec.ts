import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  it('renders services, evolution cards and faq', async () => {
    await TestBed.configureTestingModule({ imports: [Home], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Software sob medida');
    expect(el.querySelectorAll('#servicos article h3').length).toBe(5);
    expect(el.querySelectorAll('#evolucao li').length).toBe(4);
    expect(el.querySelectorAll('#faq details').length).toBe(6);
  });
});
