import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page-component';

describe('NotFoundPageComponent', () => {
  it('shows a not-found message and a route back to the homepage', async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(NotFoundPageComponent);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('h1')?.textContent).toContain('não encontrada');
    expect(root.querySelector('a')?.getAttribute('href')).toBe('/');
  });
});
