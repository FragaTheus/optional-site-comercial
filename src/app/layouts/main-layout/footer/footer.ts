import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICE_LINKS } from '../../../core/site.config';
import { LogoComponent } from '../../../shared/components/logo/logo-component';
import { Reveal } from '../../../shared/directives/reveal';

// Rodapé institucional: assinatura, links dos serviços e direitos.
@Component({
  selector: 'app-footer',
  imports: [LogoComponent, RouterLink, Reveal],
  templateUrl: './footer.html',
  host: { class: 'block' },
})
export class Footer {
  // Atributos
  protected readonly services = SERVICE_LINKS;
  protected readonly year = new Date().getFullYear();
}
