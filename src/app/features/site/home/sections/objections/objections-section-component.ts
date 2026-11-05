import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';
import { BtnCtaComponent } from '../../../../../shared/components/btn-cta/btn-cta-component';

interface IItem {
  label: string;
  headline: string;
  text: string;
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
  protected readonly items: IItem[] = [
    {
      label: '01',
      headline: 'Custos',
      text: 'Erros e retrabalho aumentam os custos da operação e comprometem sua margem de lucro.',
    },
    {
      label: '02',
      headline: 'Produtividade',
      text: 'Tarefas manuais e repetitivas consomem tempo e limitam a capacidade da sua equipe.',
    },
    {
      label: '03',
      headline: 'Experiência',
      text: 'Seu site não acompanha a evolução da empresa nem transmite a qualidade dos serviços.',
    },
  ];
}
