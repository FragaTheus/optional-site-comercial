import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { BtnCtaComponent } from '../../../../../shared/components/btn-cta/btn-cta-component';

interface IItem {
  headline: string;
  text: string;
  body: string;
}

// Situações que ajudam o visitante a reconhecer desafios antes de conhecer os serviços.
@Component({
  selector: 'app-objections-section',
  imports: [Reveal, BtnCtaComponent],
  templateUrl: './objections-section-component.html',
})
export class ObjectionsSectionComponent {
  // Atributos
  // `body` define a região de cada situação no grid de 12 colunas; `headline` é conteúdo próprio com <strong> nas palavras-chave.

  private readonly defaultClass = 'card min-w-3xs lg:w-full flex flex-col gap-gutter';

  protected readonly items: IItem[] = [
    {
      headline: 'Faturamento\n e Lucro',
      text: 'Retrabalhos aumentam os custos e comprometem sua margem de lucro.',
      body: `${this.defaultClass} card-primary`,
    },
    {
      headline: 'Produtividade\n operacional',
      text: 'Tarefas manuais consomem tempo e impactam na capacidade da sua equipe.',
      body: `${this.defaultClass} card-tertiary`,
    },
    {
      headline: 'Experiência\n do clientes',
      text: 'Sua empresa passa uma experiência online inferior à qualidade dos serviços.',
      body: `${this.defaultClass} card-primary`,
    },
  ];

  private startX = 0;
  private startIndex = 0;

  // Métodos
  // O snap CSS alinha os cards; o gesto limita o avanço a um card por deslize (só no mobile, onde a lista rola na horizontal).
  protected onTouchStart(e: TouchEvent): void {
    const list = e.currentTarget as HTMLElement;
    this.startX = e.changedTouches[0].clientX;
    this.startIndex = this.nearestIndex(list);
  }

  protected onTouchEnd(e: TouchEvent): void {
    const list = e.currentTarget as HTMLElement;
    const dx = e.changedTouches[0].clientX - this.startX;
    const cards = Array.from(list.children) as HTMLElement[];
    const step = Math.abs(dx) > 30 ? (dx < 0 ? 1 : -1) : 0;
    const target = Math.min(Math.max(this.startIndex + step, 0), cards.length - 1);
    list.scrollTo({ left: cards[target].offsetLeft - cards[0].offsetLeft, behavior: 'smooth' });
  }

  private nearestIndex(list: HTMLElement): number {
    const cards = Array.from(list.children) as HTMLElement[];
    const base = cards[0].offsetLeft;
    return cards.reduce(
      (best, c, i) =>
        Math.abs(c.offsetLeft - base - list.scrollLeft) <
        Math.abs(cards[best].offsetLeft - base - list.scrollLeft)
          ? i
          : best,
      0,
    );
  }
}
