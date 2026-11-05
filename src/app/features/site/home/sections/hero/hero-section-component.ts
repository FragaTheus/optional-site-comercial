import { Component } from '@angular/core';
import { CONTACT_URL } from '../../../../../core/site.config';
import { Reveal } from '../../../../../shared/directives/reveal';

interface IAside {
  label: string;
  data: string;
}

// Abertura da homepage: apresenta a Optional e leva o visitante ao contato ou aos serviços.
@Component({
  selector: 'app-hero-section',
  imports: [Reveal],
  templateUrl: './hero-section-component.html',
})
export class HeroSectionComponent {
  // Atributos
  protected readonly contactUrl = CONTACT_URL;
  protected readonly asides: IAside[] = [
    { label: '12+', data: 'Operações' },
    { label: '367h', data: '/mes' },
    { label: '4.400h', data: 'Economizadas/ano' },
  ];
}
