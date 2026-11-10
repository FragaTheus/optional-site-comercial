import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { PromotionContent } from '../../promotion-content';

// Oferta: três pacotes (um em destaque), itens inclusos em cada card, dialog de prazos e condições e jornada.
@Component({
  selector: 'app-promotion-offer-section',
  imports: [Reveal],
  templateUrl: './offer-section-component.html',
})
export class PromotionOfferSectionComponent {
  // Atributos
  readonly promotion = input.required<PromotionContent>();
}
