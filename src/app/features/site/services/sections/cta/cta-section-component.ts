import { Component, input } from '@angular/core';
import { CONTACT_URL } from '../../../../../core/site.config';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Encerramento da página de serviço: CTA comercial no fluxo de contato existente; expõe #contato para os botões do header e do hero.
@Component({
  selector: 'app-service-cta-section',
  imports: [Reveal],
  templateUrl: './cta-section-component.html',
})
export class CtaSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
  protected readonly contactUrl = CONTACT_URL;
}
