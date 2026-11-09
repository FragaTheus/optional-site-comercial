import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { BtnCtaComponent, ICta } from '../../../../../shared/components/btn-cta/btn-cta-component';

interface IStat {
  label: string;
  data: string;
}

// Abertura da homepage: apresenta a Optional e leva o visitante à seção seguinte.
@Component({
  selector: 'app-hero-section',
  imports: [Reveal, BtnCtaComponent],
  templateUrl: './hero-section-component.html',
})
export class HeroSectionComponent {
  // Atributos
  protected readonly ctaBtn: ICta = {
    label: 'Fale conosco',
    wppMessage: 'Olá, gostaria de marcar uma reunião para falar sobre a minha empresa',
  };
  protected readonly stats: IStat[] = [
    { label: '1.280h', data: 'Economizadas/ano' },
    { label: 'R$ 38 mil', data: 'Economizados/ano' },
  ];
}
