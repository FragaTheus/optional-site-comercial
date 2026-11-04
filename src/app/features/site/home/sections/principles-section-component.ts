import { Component } from '@angular/core';
import { Reveal } from '../../../../shared/directives/reveal';

// Resume os princípios de trabalho da Optional em um bento de blocos desiguais.
@Component({
  selector: 'app-principles-section',
  imports: [Reveal],
  templateUrl: './principles-section-component.html',
})
export class PrinciplesSectionComponent {
  // Atributos
  // `tile` define superfície e tamanho de cada bloco no grid de 12 colunas.
  protected readonly principles = [
    { title: 'Sob medida', text: 'A solução nasce do seu processo, não de um pacote adaptado.', tile: 'surface-dark md:col-span-7 md:row-span-2' },
    { title: 'Integrado', text: 'Conversa com as ferramentas e os dados que você já tem.', tile: 'bg-paper md:col-span-5' },
    { title: 'Evolutivo', text: 'Estruturado para crescer junto com a operação.', tile: 'bg-carbon/5 md:col-span-5' },
  ];
}
