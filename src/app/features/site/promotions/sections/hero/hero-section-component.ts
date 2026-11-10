import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { BtnCtaComponent } from '../../../../../shared/components/btn-cta/btn-cta-component';
import { PromotionContent } from '../../promotion-content';

// Abre a promoção só com tipografia: problema, preço de entrada e o próximo passo (conceito sem compromisso).
@Component({
  selector: 'app-promotion-hero-section',
  imports: [Reveal, BtnCtaComponent],
  templateUrl: './hero-section-component.html',
})
export class PromotionHeroSectionComponent {
  // Atributos
  readonly promotion = input.required<PromotionContent>();
  readonly expired = input(false);
}
