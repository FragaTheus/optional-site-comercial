import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/components/logo/logo-component';
import { SiteNavigationComponent } from '../../../shared/components/site-navigation/site-navigation-component';

// Rodapé institucional: assinatura, navegação e direitos.
@Component({
  selector: 'app-footer',
  imports: [LogoComponent, SiteNavigationComponent],
  templateUrl: './footer.html',
  host: { class: 'block' },
})
export class Footer {
  // Atributos
  protected readonly year = new Date().getFullYear();
}
