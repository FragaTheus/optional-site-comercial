import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';

// Destaca soluções e conduz às páginas de serviço e ao hub.
@Component({
  selector: 'app-solutions-intro-section',
  imports: [Reveal, RouterLink],
  templateUrl: './solutions-intro-section-component.html',
})
export class SolutionsIntroSectionComponent {
  protected readonly solutions = [
    {
      slug: 'sites',
      title: 'Sites\n comerciais',
      linkLabel: 'Conhecer sites comerciais',
      intro:
        'Uma presença digital própria para apresentar sua empresa, seus serviços e seus canais de contato.',
      image: '/home-img/optional_abstrato_03_planos.png',
    },
    {
      slug: 'automacoes',
      title: 'Automações e integrações',
      linkLabel: 'Conhecer automações e integrações',
      intro:
        'Fluxos e integrações para conectar ferramentas e reduzir tarefas manuais na operação.',
      image: '/home-img/optional_abstrato_04_diagonais.png',
    },
  ];
}
