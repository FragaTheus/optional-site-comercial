import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Responde às dúvidas específicas do serviço em details/summary nativos (a mesma lista alimenta o JSON-LD FAQPage da página).
@Component({
  selector: 'app-service-faq-section',
  imports: [Reveal],
  templateUrl: './faq-section-component.html',
})
export class FaqSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
}
