import { Component, input } from '@angular/core';
import { BtnCtaComponent } from '../btn-cta/btn-cta-component';
import { Reveal } from '../../../shared/directives/reveal';

// CTA intermediário reutilizável: oferece o próximo passo comercial no meio da página, sem repetir o encerramento.
@Component({
  selector: 'app-cta-section',
  imports: [Reveal, BtnCtaComponent],
  templateUrl: './cta-section-component.html',
})
export class CtaSectionComponent {
  // Atributos
  readonly headline = input.required<string>();
  readonly text = input.required<string>();
}
