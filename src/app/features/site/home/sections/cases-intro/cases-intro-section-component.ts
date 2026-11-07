import { DestroyRef, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gsap } from '../../../../../core/gsap';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CASES } from '../../../cases/case-content';

// Destaca cases publicados, anima a abertura dos detalhes e direciona à seleção completa.
@Component({
  selector: 'app-cases-intro-section',
  imports: [Reveal, RouterLink],
  templateUrl: './cases-intro-section-component.html',
})
export class CasesIntroSectionComponent {
  private readonly gsap = inject(Gsap);
  private readonly destroyRef = inject(DestroyRef);
  private readonly animationCleanups = new Map<HTMLDetailsElement, () => void>();
  protected readonly cases = CASES.filter(({ slug }) =>
    ['caldeiraria-realiza', 'simtese', 'lalouise'].includes(slug),
  );

  constructor() {
    this.destroyRef.onDestroy(() => this.animationCleanups.forEach((cleanup) => cleanup()));
  }

  protected onDetailsToggle(event: Event): void {
    const details = event.currentTarget as HTMLDetailsElement;
    if (!details.open) {
      this.animationCleanups.get(details)?.();
      this.animationCleanups.delete(details);
      return;
    }

    const content = details.querySelector<HTMLElement>('[data-case-content]');
    if (!content) return;

    this.animationCleanups.get(details)?.();
    let animated = false;
    this.animationCleanups.set(
      details,
      this.gsap.run(details, () => {
        animated = true;
        this.gsap.details(content, () =>
          details.scrollIntoView({ behavior: 'auto', block: 'center' }),
        );
      }),
    );
    if (!animated) details.scrollIntoView({ behavior: 'auto', block: 'center' });
  }
}
