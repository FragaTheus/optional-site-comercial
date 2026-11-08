import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CasesIntroSectionComponent } from './cases-intro-section-component';

describe('CasesIntroSectionComponent', () => {
  it('renders the case details without scroll or animation side effects', async () => {
    await TestBed.configureTestingModule({
      imports: [CasesIntroSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(CasesIntroSectionComponent);
    await fixture.whenStable();

    const items = (fixture.nativeElement as HTMLElement).querySelectorAll('details');
    expect(items.length).toBeGreaterThan(0);
    items.forEach((item) => expect(item.querySelector('[data-case-content]')).not.toBeNull());
  });
});
