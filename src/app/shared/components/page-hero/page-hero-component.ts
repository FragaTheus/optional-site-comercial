import { Component, input } from '@angular/core';

// Abertura 6/6 compartilhada por serviços e cases: texto projetado à esquerda e imagem da página à direita.
@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero-component.html',
})
export class PageHeroComponent {
  readonly titleId = input.required<string>();
  readonly image = input.required<string>();
  readonly imageAlt = input('');
  readonly landscape = input(false);
}
