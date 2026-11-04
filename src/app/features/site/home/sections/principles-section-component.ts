import { Component } from '@angular/core';
import { Reveal } from '../../../../shared/directives/reveal';

// Resume os princípios de trabalho da Optional em uma faixa clara de retorno à esquerda.
@Component({
  selector: 'app-principles-section',
  imports: [Reveal],
  templateUrl: './principles-section-component.html',
})
export class PrinciplesSectionComponent {
  // Atributos
  protected readonly principles = [
    { title: 'Sob medida', text: 'A solução nasce do seu processo, não de um pacote adaptado.' },
    { title: 'Integrado', text: 'Conversa com as ferramentas e os dados que você já tem.' },
    { title: 'Evolutivo', text: 'Estruturado para crescer junto com a operação.' },
  ];
}
