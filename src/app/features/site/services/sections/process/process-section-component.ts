import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Como trabalhamos: etapas da contratação à entrega, com título fixo ao lado dos cards a partir de lg.
@Component({
  selector: 'app-service-process-section',
  imports: [Reveal, RouterLink],
  templateUrl: './process-section-component.html',
})
export class ProcessSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
}
