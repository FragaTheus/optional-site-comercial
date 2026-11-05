import { Component, computed, input } from '@angular/core';
import { CONTACT_URL } from '../../../core/site.config';

export interface ICta {
  label: string;
  wppMessage: string;
}

// Botão de contato único do site: abre o WhatsApp da Optional com uma mensagem que identifica de qual ponto da página o clique veio.
@Component({
  selector: 'app-btn-cta',
  template: `<a
    [href]="href()"
    target="_blank"
    rel="noopener"
    class="btn btn-primary border-signal"
    >{{ cta().label }}</a
  >`,
})
export class BtnCtaComponent {
  // Atributos
  readonly cta = input.required<ICta>();
  protected readonly href = computed(
    () => `${CONTACT_URL}?text=${encodeURIComponent(this.cta().wppMessage)}`,
  );
}
