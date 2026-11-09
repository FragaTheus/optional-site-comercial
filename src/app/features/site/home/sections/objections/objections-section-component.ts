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
  imports: [Reveal],
  templateUrl: './objections-section-component.html',
})
export class ObjectionsSectionComponent {
  // Atributos
  // `body` define a região de cada situação no grid de 12 colunas; `headline` é conteúdo próprio com <strong> nas palavras-chave.

  private readonly defaultClass = 'card min-w-3xs lg:w-full flex flex-col gap-gutter';

  protected readonly items: IItem[] = [
    {
      headline: 'Operação',
      text: 'Processos manuais e tarefas repetitivas limitam a capacidade de operação.',
      body: `${this.defaultClass} card-primary`,
    },
    {
      headline: 'Lucro',
      text: 'Retrabalho consomem recursos e comprometem a margem de lucro.',
      body: `${this.defaultClass} card-tertiary`,
    },
    {
      headline: 'Clientes',
      text: 'Demora na entrega impactam na experiência e dificultam a fidelização.',
      body: `${this.defaultClass} card-primary`,
    },
  ];
}
