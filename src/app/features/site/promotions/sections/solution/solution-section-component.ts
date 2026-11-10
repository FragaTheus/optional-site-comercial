import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { PromotionContent } from '../../promotion-content';

// Apresenta a solução em grid 6/6: vídeo da campanha e os benefícios de um site que explica os serviços.
@Component({
  selector: 'app-promotion-solution-section',
  imports: [Reveal],
  templateUrl: './solution-section-component.html',
})
export class PromotionSolutionSectionComponent {
  // Atributos
  readonly promotion = input.required<PromotionContent>();
}
