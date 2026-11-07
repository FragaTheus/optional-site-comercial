import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  Injector,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gsap } from '../../../../../core/gsap';
import { SERVICE_LINKS } from '../../../../../core/site.config';
import { Reveal } from '../../../../../shared/directives/reveal';

const TEXTS: Record<(typeof SERVICE_LINKS)[number]['slug'], string> = {
  sites: 'Presença digital própria para apresentar a empresa, os serviços e os canais de contato.',
  'landing-pages': 'Páginas focadas em uma oferta, desenhadas para converter visitas em contatos.',
  crm: 'Clientes, histórico e acompanhamento comercial organizados do jeito que sua equipe trabalha.',
  automacoes: 'Fluxos e integrações que conectam ferramentas e reduzem tarefas manuais.',
  erp: 'Sistemas de gestão que centralizam processos, controles e informações da operação.',
};

// Imagens abstratas provisórias, a serem substituídas.
const IMAGES = [
  'site-abstract.png',
  'landing-page-abstract.png',
  'crm.png',
  'automation.png',
  'erp.png',
];

// Apresenta os serviços em um accordion de seleção única, anima as trocas e conduz à seção seguinte.
@Component({
  selector: 'app-solutions-intro-section',
  imports: [Reveal, RouterLink],
  templateUrl: './solutions-intro-section-component.html',
})
export class SolutionsIntroSectionComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly injector = inject(Injector);
  private readonly destroyRef = inject(DestroyRef);
  private readonly gsap = inject(Gsap);
  private animationCleanup?: () => void;
  protected readonly solutions = SERVICE_LINKS.map((s, i) => ({
    ...s,
    text: TEXTS[s.slug],
    image: `/solutions/${IMAGES[i % IMAGES.length]}`,
  }));
  protected readonly selected = signal<(typeof SERVICE_LINKS)[number]['slug']>(
    SERVICE_LINKS[0].slug,
  );
  protected readonly selectedIndex = computed(() =>
    this.solutions.findIndex((solution) => solution.slug === this.selected()),
  );

  constructor() {
    this.destroyRef.onDestroy(() => this.animationCleanup?.());
  }

  protected select(slug: (typeof SERVICE_LINKS)[number]['slug']): void {
    if (this.selected() === slug) return;
    const cards = [...this.host.querySelectorAll<HTMLElement>('[data-solution-card]')];
    const previous = cards.map((card) => Number(getComputedStyle(card).flexGrow));
    const widths = cards.map((card) => card.getBoundingClientRect().width);
    this.selected.set(slug);
    afterNextRender(
      () => {
        if (this.selected() !== slug) return;
        const content = this.host.querySelector<HTMLElement>(`#solution-panel-${slug}`);
        if (!content) return;
        this.animationCleanup?.();
        this.animationCleanup = this.gsap.run(this.host, () =>
          this.gsap.accordion(cards, previous, widths, content),
        );
      },
      { injector: this.injector },
    );
  }
}
