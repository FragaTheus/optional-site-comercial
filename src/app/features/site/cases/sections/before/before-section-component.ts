import { Component, input } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CaseContent } from '../../case-content';

// Apresenta como o cliente operava antes da solução e quais dificuldades isso gerava.
@Component({
  selector: 'app-case-before-section',
  imports: [Reveal],
  templateUrl: './before-section-component.html',
})
export class BeforeSectionComponent {
  readonly caseStudy = input.required<CaseContent>();
}
