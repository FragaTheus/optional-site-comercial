import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICE_LINKS, ServiceSlug } from '../../../../../core/site.config';
import { Reveal } from '../../../../../shared/directives/reveal';

const SOLUTION_CONTENT = {
  sites: {
    text: 'Dúvidas recorrentes e contatos sem aderência consomem tempo. Uma apresentação clara ajuda a qualificar oportunidades. Desenvolvemos sites e landing pages que apresentam sua oferta e facilitam o contato.',
    image: 'site-abstract.png',
  },
  automacoes: {
    text: 'Tarefas repetitivas e ferramentas desconectadas consomem tempo e geram retrabalho. Desenvolvemos automações que executam tarefas e conectam os sistemas que a empresa já usa, para a equipe se dedicar ao que exige sua participação.',
    image: 'automation.png',
  },
  sistemas: {
    text: 'Processos específicos raramente cabem em sistemas prontos. Desenvolvemos softwares próprios para organizar, controlar e acompanhar as atividades da sua operação.',
    image: 'systems.png',
  },
  'terceirizacao-de-fluxos': {
    text: 'Manter processos internamente ocupa pessoas e estrutura. Avaliamos processos operacionais definidos e assumimos a execução das etapas acordadas, para você receber o trabalho concluído.',
    image: 'integration.png',
  },
} as const;

const SOLUTIONS = SERVICE_LINKS.map(({ slug, front }) => ({
  slug,
  label: front,
  text: SOLUTION_CONTENT[slug].text,
  image: `/solutions/${SOLUTION_CONTENT[slug].image}`,
}));

type SolutionSlug = ServiceSlug;

// Apresenta quatro frentes comerciais em um accordion de seleção única.
@Component({
  selector: 'app-solutions-intro-section',
  imports: [Reveal, RouterLink],
  templateUrl: './solutions-intro-section-component.html',
})
export class SolutionsIntroSectionComponent {
  protected readonly solutions = SOLUTIONS;

  protected readonly selected = signal<SolutionSlug>(SOLUTIONS[0].slug);

  protected readonly selectedIndex = computed(() =>
    this.solutions.findIndex((solution) => solution.slug === this.selected()),
  );

  protected select(slug: SolutionSlug): void {
    this.selected.set(slug);
  }
}
