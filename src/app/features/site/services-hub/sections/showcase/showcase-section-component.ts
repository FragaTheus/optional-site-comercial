import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';

// Abordagem da Optional em quatro cards (organização, personalização, engenharia, integração); as imagens abstratas existentes são o fundo dos cards e o texto carrega o argumento.
@Component({
  selector: 'app-showcase-section',
  imports: [Reveal],
  templateUrl: './showcase-section-component.html',
})
export class ShowcaseSectionComponent {
  // Atributos
  protected readonly cards = [
    { src: '/home-img/optional_abstrato_01_camadas.png', layout: 'lg:col-span-7 md:mt-gutter', label: 'Organização', title: 'Dados e processos em camadas', text: 'Informação organizada por nível, para que cada área acesse o que precisa e nada dependa da memória de alguém.' },
    { src: '/home-img/optional_abstrato_02_arco.png', layout: 'lg:col-span-5', label: 'Personalização', title: 'Um desenho para o seu fluxo', text: 'O sistema acompanha o caminho que o seu trabalho já percorre, e não o contrário.' },
    { src: '/home-img/optional_abstrato_03_planos.png', layout: 'lg:col-span-5', label: 'Engenharia', title: 'Módulos que se encaixam', text: 'Cada parte é construída como módulo: novas funcionalidades entram sem refazer o que já funciona.' },
    { src: '/home-img/optional_abstrato_04_diagonais.png', layout: 'lg:col-span-7', label: 'Integração', title: 'Ferramentas que conversam', text: 'Os sistemas que a empresa já usa passam a trocar dados entre si, sem cópia manual no meio.' },
  ];
}
