import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/components/logo/logo-component';
import { MenuDrawerComponent } from '../../../shared/components/menu-drawer/menu-drawer-component';
import { CONTACT_URL } from '../../../core/site.config';

// Header estático com identidade e CTA comercial; o menu gerencia seu próprio diálogo e acionador.
@Component({
  selector: 'app-header',
  imports: [LogoComponent, MenuDrawerComponent],
  templateUrl: './header.html',
  host: { class: 'block px-gutter' },
})
export class Header {
  protected readonly contactUrl = CONTACT_URL;
}
