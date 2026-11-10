import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { PromotionContent } from '../../promotion-content';

// Amplifica o problema: header fixo com o impacto operacional e três consequências em bento grid, uma por variante de card.
@Component({
  selector: 'app-promotion-consequences-section',
  imports: [Reveal],
  templateUrl: './consequences-section-component.html',
})
export class PromotionConsequencesSectionComponent {
  // Atributos
  readonly promotion = input.required<PromotionContent>();
}
