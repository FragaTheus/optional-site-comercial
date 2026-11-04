import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS, SERVICE_LINKS } from '../../../core/site.config';
import { Reveal } from '../../../shared/directives/reveal';

// Rodapé institucional: assinatura, navegação complementar e direitos.
@Component({
  selector: 'app-footer',
  imports: [RouterLink, Reveal],
  templateUrl: './footer.html',
  host: { class: 'block' },
})
export class Footer {
  // Atributos
  protected readonly links = NAV_LINKS;
  protected readonly services = SERVICE_LINKS;
  protected readonly year = new Date().getFullYear();
}
