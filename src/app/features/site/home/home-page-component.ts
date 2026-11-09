import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { Gsap } from '../../../core/gsap';
import { Seo } from '../../../core/seo';
import { SITE_URL } from '../../../core/site.config';
import { ClosingSectionComponent } from './sections/closing/closing-section-component';
import { HeroSectionComponent } from './sections/hero/hero-section-component';
import { SolutionsIntroSectionComponent } from './sections/solutions-intro/solutions-intro-section-component';
import { CasesIntroSectionComponent } from './sections/cases-intro/cases-intro-section-component';
import { ObjectionsSectionComponent } from './sections/objections/objections-section-component';
import { AboutSectionComponent } from './sections/about/about-section-component';

// Página inicial: só compõe as seções, define o SEO e aciona as animações em sequência (`data-stagger`) das seções.
@Component({
  selector: 'app-home-page',
  imports: [
    HeroSectionComponent,
    ObjectionsSectionComponent,
    CasesIntroSectionComponent,
    SolutionsIntroSectionComponent,
    AboutSectionComponent,
    ClosingSectionComponent,
  ],
  templateUrl: './home-page-component.html',
})
export class HomePageComponent {
  // Construtores
  constructor() {
    inject(Seo).set(
      'Optional — Software e infraestrutura digital sob medida para empresas',
      'A Optional desenvolve sites e landing pages, automações de processos, integrações entre sistemas e sistemas personalizados sob medida para a realidade de cada empresa.',
      '/',
      [
        {
          '@type': 'Organization',
          name: 'Optional',
          description: 'Software e infraestrutura digital sob medida para empresas.',
          ...(SITE_URL && { url: SITE_URL }),
        },
      ],
    );
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const gsap = inject(Gsap);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() =>
      destroyRef.onDestroy(
        gsap.run(host, () =>
          host
            .querySelectorAll('[data-stagger]')
            .forEach((el) => gsap.stagger(el, el.getAttribute('data-stagger')!)),
        ),
      ),
    );
  }
}
