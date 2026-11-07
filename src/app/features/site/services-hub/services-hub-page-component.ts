import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { Gsap } from '../../../core/gsap';
import { Seo } from '../../../core/seo';
import { CtaSectionComponent } from './sections/cta/cta-section-component';
import { HeroSectionComponent } from './sections/hero/hero-section-component';
import { ServicesSectionComponent } from './sections/services/services-section-component';
import { ShowcaseSectionComponent } from './sections/showcase/showcase-section-component';

// Compõe o hub de serviços e inicializa SEO e animações das seções.
@Component({
  selector: 'app-services-hub-page',
  imports: [HeroSectionComponent, ServicesSectionComponent, ShowcaseSectionComponent, CtaSectionComponent],
  templateUrl: './services-hub-page-component.html',
})
export class ServicesHubPageComponent {
  constructor() {
    inject(Seo).set('Serviços de software sob medida | Optional', 'Conheça as soluções da Optional: CRM, ERP, automações, landing pages e sites comerciais desenvolvidos para sua operação.', '/servicos');
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const gsap = inject(Gsap);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => destroyRef.onDestroy(gsap.run(host, () => host.querySelectorAll('[data-stagger]').forEach(el => gsap.stagger(el, el.getAttribute('data-stagger')!)))));
  }
}
