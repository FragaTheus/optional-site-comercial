import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Cria links internos contextuais para serviços complementares e projetos relacionados, com textos âncora descritivos.
@Component({
  selector: 'app-service-related-section',
  imports: [Reveal, RouterLink],
  templateUrl: './related-section-component.html',
})
export class RelatedSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
}
