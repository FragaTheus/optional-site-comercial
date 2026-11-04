import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

// Logotipo da marca com link para a home; único ponto de definição, usado no header e no footer.
@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `<a routerLink="/" class="font-display font-extrabold tracking-tight text-white" [class]="size()" aria-label="Optional, página inicial">Optional<span class="text-signal" aria-hidden="true">&lt;&gt;</span></a>`,
  host: { class: 'inline-block' },
})
export class LogoComponent {
  // Atributos
  readonly size = input('text-2xl');
}
