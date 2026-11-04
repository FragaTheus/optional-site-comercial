import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';

// Serviços da homepage: continua o argumento das objeções com as cinco soluções, cada uma com tema, proposta e link para sua página satélite. Os serviços são independentes e podem ser contratados isoladamente.
@Component({
  selector: 'app-services-section',
  imports: [Reveal, RouterLink],
  templateUrl: './services-section-component.html',
})
export class ServicesSectionComponent {
  // Atributos
  // `title` e `body` definem a região de cada serviço no grid de 12 colunas; `slug` aponta para /servicos/:slug.
  protected readonly services = [
    {
      slug: 'sites', theme: 'Presença digital', name: 'Sites comerciais', anchor: 'Ver desenvolvimento de sites comerciais',
      value: 'Um site à altura do trabalho que a empresa entrega.',
      text: 'Sites institucionais e comerciais com apresentação cuidadosa, estrutura preparada para buscadores e caminhos claros para o contato.',
      title: 'md:col-span-5 md:col-start-3', body: 'md:col-span-4 md:col-start-9',
    },
    {
      slug: 'landing-pages', theme: 'Aquisição', name: 'Landing pages', anchor: 'Ver desenvolvimento de landing pages',
      value: 'Páginas feitas para a oferta de cada campanha.',
      text: 'Experiência pensada para conversão, desempenho em qualquer tela e mensuração configurada desde o início.',
      title: 'md:col-span-5 md:col-start-5', body: 'md:col-span-4 md:col-start-9',
    },
    {
      slug: 'crm', theme: 'Relacionamento', name: 'CRM', anchor: 'Ver desenvolvimento de CRM personalizado',
      value: 'Clientes, histórico e oportunidades em um só lugar.',
      text: 'Um CRM que reflete as etapas que a sua equipe realmente segue, em vez de um processo imposto por uma ferramenta genérica.',
      title: 'md:col-span-5 md:col-start-3', body: 'md:col-span-4 md:col-start-8',
    },
    {
      slug: 'automacoes', theme: 'Produtividade', name: 'Automações e integrações', anchor: 'Ver automações e integrações de sistemas',
      value: 'Menos trabalho manual entre uma ferramenta e outra.',
      text: 'Conectamos os sistemas que a empresa já usa e assumimos as tarefas repetitivas que hoje dependem de cópia e conferência.',
      title: 'md:col-span-5 md:col-start-5', body: 'md:col-span-4 md:col-start-9',
    },
    {
      slug: 'erp', theme: 'Gestão', name: 'ERP e sistemas de gestão', anchor: 'Ver desenvolvimento de ERP e sistemas de gestão',
      value: 'Controle operacional com rastreabilidade.',
      text: 'Um sistema que nasce das rotinas, dos registros e dos controles da operação, com histórico do que aconteceu, quando e com quem.',
      title: 'md:col-span-5 md:col-start-3', body: 'md:col-span-4 md:col-start-8',
    },
  ];
}
