import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { Gsap } from '../../../../../core/gsap';
import { CasesIntroSectionComponent } from './cases-intro-section-component';

describe('CasesIntroSectionComponent', () => {
  it('animates and centers opened details, including when motion is reduced', async () => {
    await TestBed.configureTestingModule({
      imports: [CasesIntroSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(CasesIntroSectionComponent);
    await fixture.whenStable();

    const gsap = TestBed.inject(Gsap);
    const detailsAnimation = vi
      .spyOn(gsap, 'details')
      .mockImplementation((_content, onComplete) => {
        onComplete();
      });
    const runAnimation = vi.spyOn(gsap, 'run').mockImplementation((_scope, animate) => {
      animate();
      return vi.fn();
    });
    const items = [
      ...(fixture.nativeElement as HTMLElement).querySelectorAll<HTMLDetailsElement>('details'),
    ];
    const last = items.at(-1)!;
    const scrollIntoView = vi.fn();
    Object.defineProperty(last, 'scrollIntoView', { configurable: true, value: scrollIntoView });

    last.open = true;
    last.dispatchEvent(new Event('toggle'));

    expect(runAnimation).toHaveBeenCalledWith(last, expect.any(Function));
    expect(detailsAnimation).toHaveBeenCalledWith(
      last.querySelector('[data-case-content]'),
      expect.any(Function),
    );
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto', block: 'center' });

    runAnimation.mockImplementation(() => vi.fn());
    const first = items[0];
    const reducedMotionScroll = vi.fn();
    Object.defineProperty(first, 'scrollIntoView', {
      configurable: true,
      value: reducedMotionScroll,
    });
    first.open = true;
    first.dispatchEvent(new Event('toggle'));

    expect(detailsAnimation).toHaveBeenCalledTimes(1);
    expect(reducedMotionScroll).toHaveBeenCalledWith({ behavior: 'auto', block: 'center' });
  });
});
