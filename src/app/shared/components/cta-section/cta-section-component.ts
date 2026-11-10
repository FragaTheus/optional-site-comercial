import { Component, input } from '@angular/core';
import { BtnCtaComponent, ICta } from '../btn-cta/btn-cta-component';
import { Reveal } from '../../directives/reveal';

// Encerra as páginas comerciais com conteúdo próprio e um único fluxo de contato.
@Component({
  selector: 'app-cta-section',
  imports: [Reveal, BtnCtaComponent],
  templateUrl: './cta-section-component.html',
})
export class CtaSectionComponent {
  readonly heading = input.required<{ lead: string; key: string }>();
  readonly text = input<string>();
  readonly cta = input.required<ICta>();
  /** Opcionais: nota sob o botão principal e segundo link (abre em nova aba). */
  readonly small = input<string>();
  readonly secondary = input<{ label: string; href: string }>();
}
