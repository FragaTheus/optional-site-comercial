import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { Gsap } from '../../../core/gsap';
import { Seo } from '../../../core/seo';
import { ClosingSectionComponent } from './sections/closing-section-component';
import { EvolutionSectionComponent } from './sections/evolution-section-component';
import { FaqSectionComponent } from './sections/faq-section-component';
import { HeroSectionComponent } from './sections/hero-section-component';
import { PrinciplesSectionComponent } from './sections/principles-section-component';
import { ProblemSectionComponent } from './sections/problem-section-component';
import { ServicesSectionComponent } from './sections/services-section-component';

// Página inicial: só compõe as seções, define o SEO e aciona as animações em sequência (`data-stagger`) das seções.
@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, ProblemSectionComponent, ServicesSectionComponent, EvolutionSectionComponent, PrinciplesSectionComponent, FaqSectionComponent, ClosingSectionComponent],
  templateUrl: './home-page-component.html',
})
export class HomePageComponent {
  // Construtores
  constructor() {
    inject(Seo).set(
      'Optional — Software e infraestrutura digital sob medida para empresas',
      'A Optional desenvolve CRM, ERP e sistemas de gestão, automações, landing pages e sites comerciais sob medida para a realidade de cada empresa.',
    );
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const gsap = inject(Gsap);
    afterNextRender(() =>
      inject(DestroyRef).onDestroy(gsap.run(host, () => host.querySelectorAll('[data-stagger]').forEach(el => gsap.stagger(el, el.getAttribute('data-stagger')!)))),
    );
  }
}
