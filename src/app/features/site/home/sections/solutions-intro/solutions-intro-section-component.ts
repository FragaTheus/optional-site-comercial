import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICE_LINKS, ServiceSlug } from '../../../../../core/site.config';
import { Reveal } from '../../../../../shared/directives/reveal';
import { BtnCtaComponent, ICta } from '../../../../../shared/components/btn-cta/btn-cta-component';

const SOLUTION_CONTENT = {
  sites: {
    text: 'Criamos sites e landing pages que apresentam seus serviços com clareza, melhoram a experiência dos visitantes e ajudam a qualificar potenciais clientes.',
    image: 'site-abstract.png',
  },
  automacoes: {
    text: 'Conectamos suas ferramentas e automatizamos tarefas para reduzir o trabalho manual, evitar retrabalho e melhorar a produtividade da equipe.',
    image: 'automation.png',
  },
  sistemas: {
    text: 'Desenvolvemos sistemas sob medida para organizar informações e controlar processos que as soluções disponíveis não atendem adequadamente.',
    image: 'systems.png',
  },
  'terceirizacao-de-fluxos': {
    text: 'Assumimos a execução de processos operacionais definidos e entregamos os resultados acordados, sem que sua equipe precise administrar cada etapa.',
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
  imports: [Reveal, RouterLink, BtnCtaComponent],
  templateUrl: './solutions-intro-section-component.html',
})
export class SolutionsIntroSectionComponent {
  protected readonly solutions = SOLUTIONS;
  protected readonly cta: ICta = {
    label: 'Preciso de uma solução',
    wppMessage: 'Olá, vi as soluções da Optional e gostaria de saber mais.',
  };

  protected readonly selected = signal<SolutionSlug>(SOLUTIONS[0].slug);

  protected readonly selectedIndex = computed(() =>
    this.solutions.findIndex((solution) => solution.slug === this.selected()),
  );

  protected select(slug: SolutionSlug): void {
    this.selected.set(slug);
  }
}
