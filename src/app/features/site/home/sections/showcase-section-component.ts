import { Component } from '@angular/core';
import { Reveal } from '../../../../shared/directives/reveal';

// Mostra o tipo de interface que a Optional constrói, em quatro fragmentos ilustrativos (sem dados reais de clientes) que dividem o conteúdo da página.
@Component({
  selector: 'app-showcase-section',
  imports: [Reveal],
  templateUrl: './showcase-section-component.html',
})
export class ShowcaseSectionComponent {
  // Atributos
  protected readonly pipeline = [
    { stage: 'Novos contatos', items: ['Indústria de embalagens', 'Clínica odontológica'] },
    { stage: 'Em conversa', items: ['Distribuidora de peças', 'Escritório contábil'] },
    { stage: 'Proposta enviada', items: ['Rede de academias'] },
  ];
  protected readonly records = [
    { name: 'Pedido de compra', step: 'Conferência', status: 'Em andamento' },
    { name: 'Lote de produção', step: 'Expedição', status: 'Concluído' },
    { name: 'Ordem de serviço', step: 'Aprovação', status: 'Pendente' },
  ];
  protected readonly flow = ['Formulário do site recebido', 'Contato criado no CRM', 'Equipe avisada no canal interno'];
}
