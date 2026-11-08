import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';

const SOLUTIONS = [
  {
    slug: 'qualificacao',
    label: 'Qualificação comercial',
    serviceSlug: 'sites',
    text: 'Dúvidas recorrentes e contatos sem aderência consomem tempo. Uma apresentação clara ajuda a qualificar oportunidades. Desenvolvemos sites e landing pages que apresentam sua oferta e facilitam o contato.',
    image: 'site-abstract.png',
  },
  {
    slug: 'relacionamento',
    label: 'Gestão de relacionamento',
    serviceSlug: 'crm',
    text: 'Informações dispersas dificultam o acompanhamento dos clientes. Com tudo centralizado, a equipe ganha agilidade. Desenvolvemos CRMs sob medida para organizar históricos, contatos e oportunidades.',
    image: 'crm.png',
  },
  {
    slug: 'processos',
    label: 'Automações de processos',
    serviceSlug: 'automacoes',
    text: 'Tarefas manuais e repetitivas consomem tempo e geram retrabalho. Processos automatizados liberam capacidade operacional. Integramos sistemas e automatizamos fluxos conforme as necessidades da empresa.',
    image: 'automation.png',
  },
  {
    slug: 'operacao',
    label: 'Organização operacional',
    serviceSlug: 'erp',
    text: 'Controles dispersos dificultam a gestão e geram retrabalho. Informações centralizadas facilitam o acompanhamento da operação. Desenvolvemos sistemas de gestão com processos, registros e rastreabilidade.',
    image: 'erp.png',
  },
] as const;

type SolutionSlug = (typeof SOLUTIONS)[number]['slug'];

// Apresenta quatro frentes comerciais em um accordion de seleção única.
@Component({
  selector: 'app-solutions-intro-section',
  imports: [Reveal, RouterLink],
  templateUrl: './solutions-intro-section-component.html',
})
export class SolutionsIntroSectionComponent {
  protected readonly solutions = SOLUTIONS.map((solution) => ({
    ...solution,
    image: `/solutions/${solution.image}`,
  }));

  protected readonly selected = signal<SolutionSlug>(SOLUTIONS[0].slug);

  protected readonly selectedIndex = computed(() =>
    this.solutions.findIndex((solution) => solution.slug === this.selected()),
  );

  protected select(slug: SolutionSlug): void {
    this.selected.set(slug);
  }
}
