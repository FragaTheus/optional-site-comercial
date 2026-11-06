import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CASES } from '../../../cases/case-content';

// Lista os cases publicados em sequência editorial, com imagens provisórias.
@Component({
  selector: 'app-cases-hub-projects-section',
  imports: [Reveal, RouterLink],
  templateUrl: './projects-section-component.html',
})
export class ProjectsSectionComponent {
  protected readonly cases = [...CASES].sort((a, b) => {
    const priority = (slug: string) => slug === 'paulo-carvalho' ? 0 : slug === 'simtese' ? 1 : 2;
    return priority(a.slug) - priority(b.slug);
  });
  protected readonly images = [
    '/home-img/optional_abstrato_01_camadas.png',
    '/home-img/optional_abstrato_02_arco.png',
    '/home-img/optional_abstrato_03_planos.png',
    '/home-img/optional_abstrato_04_diagonais.png',
  ];
}
