import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Esclarece como a Optional trabalha neste serviço, em quatro pontos específicos do serviço.
@Component({
  selector: 'app-service-differentials-section',
  imports: [Reveal],
  templateUrl: './differentials-section-component.html',
})
export class DifferentialsSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
}
