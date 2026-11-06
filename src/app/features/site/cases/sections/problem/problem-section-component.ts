import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CaseContent } from '../../case-content';

// Contrasta o contexto inicial com o objetivo e apresenta a solução como ponte.
@Component({
  selector: 'app-case-problem-section',
  imports: [Reveal],
  templateUrl: './problem-section-component.html',
})
export class ProblemSectionComponent {
  readonly caseStudy = input.required<CaseContent>();
}
