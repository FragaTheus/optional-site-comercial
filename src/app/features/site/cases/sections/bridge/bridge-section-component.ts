import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CaseContent } from '../../case-content';

// Explica a solução entregue sobre uma imagem do projeto escurecida por gradientes carbon.
@Component({
  selector: 'app-case-bridge-section',
  imports: [Reveal, RouterLink],
  templateUrl: './bridge-section-component.html',
})
export class BridgeSectionComponent {
  readonly caseStudy = input.required<CaseContent>();
}
