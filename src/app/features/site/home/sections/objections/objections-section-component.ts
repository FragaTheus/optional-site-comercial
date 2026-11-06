import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { BtnCtaComponent } from '../../../../../shared/components/btn-cta/btn-cta-component';

interface IItem {
  headline: string;
  text: string;
  body: string;
}

// Segunda dobra da homepage: três situações em que a empresa funciona, mas não está resolvida (presença digital, processos e sistemas), para o visitante se reconhecer antes de ver os serviços.
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
}
