import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';

// Segunda dobra da homepage: três situações em que a empresa funciona, mas não está resolvida (presença digital, processos e sistemas), para o visitante se reconhecer antes de ver os serviços.
@Component({
  selector: 'app-objections-section',
  imports: [Reveal],
  templateUrl: './objections-section-component.html',
})
export class ObjectionsSectionComponent {
  // Atributos
  // `body` define a região de cada situação no grid de 12 colunas; `headline` é conteúdo próprio com <strong> nas palavras-chave.
  protected readonly items = [
    { label: '01 — Presença digital', headline: 'Um <strong>site</strong> que existe. Mas <strong>não representa.</strong>', text: 'Estar online é diferente de apresentar o seu trabalho com a qualidade que ele merece.', body: 'md:col-span-6 md:col-start-3' },
    { label: '02 — Processos', headline: 'Uma <strong>operação</strong> que roda. Mas <strong>depende de improviso.</strong>', text: 'Planilhas, tarefas repetidas e informações dispersas podem manter tudo funcionando. Nem sempre da melhor maneira.', body: 'md:col-span-6 md:col-start-5' },
    { label: '03 — Sistemas', headline: 'Um <strong>sistema</strong> que funciona. Mas <strong>dita as regras.</strong>', text: 'Quando a ferramenta exige que o negócio se adapte constantemente a ela, vale questionar se a solução ainda faz sentido.', body: 'md:col-span-6 md:col-start-7' },
  ];
}
