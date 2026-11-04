import { Component, output } from '@angular/core';
import { LogoComponent } from '../../../shared/components/logo/logo-component';
import { CONTACT_URL } from '../../../core/site.config';

// Header estático (rola com a página): logo, CTA comercial e botão do drawer no mobile.
@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.html',
  host: { class: 'block px-gutter' },
})
export class Header {
  // Atributos
  readonly menuOpen = output<void>();
  protected readonly contactUrl = CONTACT_URL;
}
