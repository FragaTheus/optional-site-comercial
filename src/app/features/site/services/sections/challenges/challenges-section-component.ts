import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Desafios do serviço: apresenta os obstáculos que o público reconhece, em lista vertical no desktop e em faixa horizontal no mobile.
@Component({
  selector: 'app-service-challenges-section',
  imports: [Reveal],
  templateUrl: './challenges-section-component.html',
})
export class ChallengesSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
}
