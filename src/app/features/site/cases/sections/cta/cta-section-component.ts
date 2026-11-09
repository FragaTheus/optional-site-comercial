import { Component, input } from '@angular/core';
import { BtnCtaComponent } from '../../../../../shared/components/btn-cta/btn-cta-component';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CaseContent } from '../../case-content';

// Encerra o case com o mesmo fluxo de contato das páginas de serviços.
@Component({
  selector: 'app-case-cta-section',
  imports: [Reveal, BtnCtaComponent],
  templateUrl: './cta-section-component.html',
})
export class CtaSectionComponent {
  readonly caseStudy = input.required<CaseContent>();
}
