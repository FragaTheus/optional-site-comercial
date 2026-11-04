import { Component, input } from '@angular/core';
import { CONTACT_URL } from '../../../core/site.config';
import { Reveal } from '../../../shared/directives/reveal';

// CTA intermediário reutilizável: oferece o próximo passo comercial no meio da página, sem repetir o encerramento.
@Component({
  selector: 'app-cta-band',
  imports: [Reveal],
  templateUrl: './cta-band-component.html',
})
export class CtaBandComponent {
  // Atributos
  readonly headline = input.required<string>();
  readonly text = input.required<string>();
  protected readonly contactUrl = CONTACT_URL;
}
