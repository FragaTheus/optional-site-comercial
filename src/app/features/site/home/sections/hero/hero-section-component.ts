import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';

interface IStat {
  label: string;
  data: string;
}

// Abertura da homepage: apresenta a Optional e leva o visitante à seção seguinte.
@Component({
  selector: 'app-hero-section',
  imports: [Reveal],
  templateUrl: './hero-section-component.html',
})
export class HeroSectionComponent {
  // Atributos
  protected readonly stats: IStat[] = [
    { label: '−66%', data: 'Retrabalho/ano' },
    { label: '1.280h', data: 'Economizadas/ano' },
    { label: 'R$ 38 mil', data: 'Economizados/ano' },
  ];
}
