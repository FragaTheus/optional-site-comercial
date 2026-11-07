import { Component, computed, input } from '@angular/core';
import { CONTACT_URL } from '../../../core/site.config';

export interface ICta {
  label: string;
  wppMessage: string;
}

// Botão de contato único do site: abre o WhatsApp da Optional com uma mensagem que identifica de qual ponto da página o clique veio.
@Component({
  selector: 'app-btn-cta',
  host: { class: 'block w-full max-w-sm' },
  template: `<a
    [href]="href()"
    target="_blank"
    rel="noopener"
    class="btn btn-primary w-full border-signal border"
    >{{ cta().label }}<i class="pi pi-arrow-up-right" aria-hidden="true"></i></a
  >`,
})
export class BtnCtaComponent {
  // Atributos
  readonly cta = input.required<ICta>();
  protected readonly href = computed(
    () => `${CONTACT_URL}?text=${encodeURIComponent(this.cta().wppMessage)}`,
  );
}
