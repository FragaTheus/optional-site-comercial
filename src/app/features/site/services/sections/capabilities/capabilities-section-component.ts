import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Apresenta as funcionalidades e capacidades do serviço em uma seção escura, com âncora usada pelo CTA do hero.
@Component({
  selector: 'app-service-capabilities-section',
  imports: [Reveal],
  templateUrl: './capabilities-section-component.html',
})
export class CapabilitiesSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
}
