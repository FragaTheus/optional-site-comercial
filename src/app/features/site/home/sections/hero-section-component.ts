import { Component } from '@angular/core';
import { CONTACT_URL } from '../../../../core/site.config';
import { Reveal } from '../../../../shared/directives/reveal';

// Abertura da homepage: apresenta a Optional e leva o visitante ao contato ou aos serviços.
@Component({
  selector: 'app-hero-section',
  imports: [Reveal],
  templateUrl: './hero-section-component.html',
})
export class HeroSectionComponent {
  // Atributos
  protected readonly contactUrl = CONTACT_URL;
}
