import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CaseContent } from '../../case-content';

// Explica os requisitos e a implementação, com espaço para imagens do projeto.
@Component({
  selector: 'app-case-solution-section',
  imports: [Reveal, RouterLink],
  templateUrl: './solution-section-component.html',
})
export class SolutionSectionComponent {
  readonly caseStudy = input.required<CaseContent>();
}
