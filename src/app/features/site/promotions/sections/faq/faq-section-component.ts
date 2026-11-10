import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { BtnCtaComponent } from '../../../../../shared/components/btn-cta/btn-cta-component';
import { PromotionContent } from '../../promotion-content';

// Perguntas frequentes em accordion nativo e chamada final centralizada com CTA único.
@Component({
  selector: 'app-promotion-faq-section',
  imports: [Reveal, BtnCtaComponent],
  templateUrl: './faq-section-component.html',
})
export class PromotionFaqSectionComponent {
  // Atributos
  readonly promotion = input.required<PromotionContent>();
}
