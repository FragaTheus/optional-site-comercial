import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_URL } from '../../../core/site.config';

// Header estático (rola com a página): logo, CTA comercial e botão do drawer no mobile.
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  host: { class: 'block px-gutter' },
})
export class Header {
  // Atributos
  readonly menuOpen = output<void>();
  protected readonly contactUrl = CONTACT_URL;
}
