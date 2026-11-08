import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';

const SOLUTIONS = [
  {
    slug: 'qualificacao',
    label: 'Qualificação comercial',
    serviceSlug: 'sites',
    text: 'Contatos sem aderência e dúvidas recorrentes ocupam o time quando o site não deixa claros o serviço, o nicho e a região. Uma presença digital que responde às dúvidas e apresenta a oferta com precisão ajuda a qualificar a procura; estruturamos essa comunicação em sites comerciais e landing pages alinhados à oferta e ao público.',
    image: 'site-abstract.png',
  },
  {
    slug: 'relacionamento',
    label: 'Gestão de relacionamento',
    serviceSlug: 'crm',
    text: 'Quando o histórico e os próximos passos ficam espalhados entre mensagens, planilhas e pessoas, o relacionamento depende da memória da equipe. Um processo visível ajuda a dar continuidade a cada contato; desenhamos um CRM sob medida para registrar interações, responsabilidades e etapas do atendimento.',
    image: 'crm.png',
  },
  {
    slug: 'processos',
    label: 'Automações de processo',
    serviceSlug: 'automacoes',
    text: 'Tarefas repetitivas e a transferência manual de dados entre sistemas consomem tempo e abrem espaço para inconsistências. Com integrações e fluxos definidos, a equipe pode acompanhar as etapas sem refazer o mesmo trabalho; mapeamos o processo e automatizamos regras, exceções e sinalização de falhas.',
    image: 'automation.png',
  },
  {
    slug: 'operacao',
    label: 'Organização operacional',
    serviceSlug: 'erp',
    text: 'Quando controles, registros e rotinas ficam em ferramentas separadas, é difícil saber o que aconteceu e qual é o próximo passo. Organizar informações e rastreabilidade ajuda a acompanhar a operação com mais clareza; desenvolvemos sistemas de gestão a partir das rotinas, dos registros e dos controles que o negócio precisa.',
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
