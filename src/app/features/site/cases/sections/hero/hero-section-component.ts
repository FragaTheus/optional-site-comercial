import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CaseContent } from '../../case-content';

// Apresenta o projeto e oferece acesso ao site e ao contexto do case.
@Component({
  selector: 'app-case-hero-section',
  imports: [Reveal, RouterLink],
  templateUrl: './hero-section-component.html',
})
export class HeroSectionComponent {
  readonly caseStudy = input.required<CaseContent>();
}
