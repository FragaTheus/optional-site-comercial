import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Explica o serviço e o contrapõe à alternativa mais buscada (solução pronta, site ou landing page), para responder à intenção de busca informacional/comercial.
@Component({
  selector: 'app-service-about-section',
  imports: [Reveal],
  templateUrl: './about-section-component.html',
})
export class AboutSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
}
