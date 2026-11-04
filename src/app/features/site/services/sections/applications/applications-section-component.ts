import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Lista as situações e aplicações em que o serviço faz sentido, para o visitante identificar o seu caso.
@Component({
  selector: 'app-service-applications-section',
  imports: [Reveal],
  templateUrl: './applications-section-component.html',
})
export class ApplicationsSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
}
