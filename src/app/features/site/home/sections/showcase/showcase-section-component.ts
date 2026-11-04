import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';

// Mostra como a Optional estrutura sistemas, em quatro imagens abstratas que dividem o conteúdo da página.
@Component({
  selector: 'app-showcase-section',
  imports: [Reveal],
  templateUrl: './showcase-section-component.html',
})
export class ShowcaseSectionComponent {
  // Atributos
  protected readonly images = [
    { src: 'home-img/optional_abstrato_01_camadas.png', layout: 'md:col-span-7 md:mt-section-s', caption: 'Camadas: dados e processos organizados em níveis.' },
    { src: 'home-img/optional_abstrato_02_arco.png', layout: 'md:col-span-5', caption: 'Arco: do primeiro contato ao sistema completo.' },
    { src: 'home-img/optional_abstrato_03_planos.png', layout: 'md:col-span-5', caption: 'Planos: módulos que se encaixam e crescem com o negócio.' },
    { src: 'home-img/optional_abstrato_04_diagonais.png', layout: 'md:col-span-7', caption: 'Diagonais: integrações que conectam as ferramentas da operação.' },
  ];
}
