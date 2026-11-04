import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  it('renders the h1 and every service', async () => {
    await TestBed.configureTestingModule({ imports: [Home], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Software sob medida');
    expect(el.querySelectorAll('#servicos li').length).toBe(5);
  });
});
