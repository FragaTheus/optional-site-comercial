import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';

// Mostra como um projeto pode evoluir de landing page a ERP, em etapas, para reduzir a barreira de entrada.
@Component({
  selector: 'app-evolution-section',
  imports: [Reveal],
  templateUrl: './evolution-section-component.html',
})
export class EvolutionSectionComponent {
  // Atributos
  // `offset` cria o efeito de degraus; `card` define a variante visual (a última etapa é o destino).
  protected readonly stages = [
    { name: 'Landing page', text: 'Uma página para captar contatos e medir o que gera resultado.', card: 'card-primary', offset: 'lg:mt-0' },
    { name: 'Integrações', text: 'Os contatos passam a fluir para as ferramentas da equipe, sem cópia manual.', card: 'card-primary', offset: 'ml-6 lg:ml-0 lg:mt-10' },
    { name: 'CRM', text: 'Cada contato ganha histórico, e o processo comercial passa a ser acompanhado.', card: 'card-primary', offset: 'ml-12 lg:ml-0 lg:mt-20' },
    { name: 'ERP', text: 'A operação inteira, dos pedidos ao controle interno, no mesmo sistema.', card: 'card-secondary', offset: 'ml-18 lg:ml-0 lg:mt-30' },
  ];
}
