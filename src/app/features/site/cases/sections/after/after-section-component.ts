import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CaseContent } from '../../case-content';

// Mostra as mudanças observáveis em cards cuja quantidade vem dos dados do case.
@Component({
  selector: 'app-case-after-section',
  imports: [Reveal],
  templateUrl: './after-section-component.html',
})
export class AfterSectionComponent {
  readonly caseStudy = input.required<CaseContent>();
  protected readonly variants = ['card-secondary', 'card-primary', 'card-tertiary'];
}
