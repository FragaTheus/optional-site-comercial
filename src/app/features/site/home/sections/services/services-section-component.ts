import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';

// Hub de serviços: cada serviço é uma subseção posicionada em uma região diferente do grid, para a seção não virar uma lista repetida.
@Component({
  selector: 'app-services-section',
  imports: [Reveal],
  templateUrl: './services-section-component.html',
})
export class ServicesSectionComponent {
  // Atributos
  // `title` e `body` definem a região de cada serviço no grid de 12 colunas.
  protected readonly services = [
    {
      name: 'CRM',
      lead: 'Clientes, histórico e relacionamento em um só lugar.',
      text: 'Quando contatos vivem em planilhas, e-mails e na memória da equipe, o processo comercial depende de quem está atendendo. Um CRM sob medida organiza a base de clientes, registra cada interação e reflete as etapas que a sua equipe realmente segue.',
      points: ['Base de clientes e histórico centralizados', 'Processo comercial desenhado a partir do seu', 'Acompanhamento de agendamentos e resultados'],
      title: 'md:col-span-5',
      body: 'md:col-span-6 md:col-start-7',
    },
    {
      name: 'ERP e gestão',
      lead: 'Controle operacional com rastreabilidade.',
      text: 'Sistemas de gestão genéricos exigem que a operação se encaixe neles. Aqui o caminho é inverso: o sistema nasce das rotinas, dos registros e dos controles que a empresa precisa ter, com histórico do que aconteceu, quando e com quem.',
      points: ['Controle operacional do dia a dia', 'Rastreabilidade de processos e registros', 'Organização empresarial em um único sistema'],
      title: 'md:order-2 md:col-span-5 md:col-start-8',
      body: 'md:order-1 md:col-span-6',
    },
    {
      name: 'Automações e integrações',
      lead: 'Menos trabalho manual entre uma ferramenta e outra.',
      text: 'Copiar dados de um sistema para outro, conferir planilhas, repetir o mesmo lançamento. Automações e integrações conectam as ferramentas que a empresa já usa e tiram essas tarefas do caminho da equipe.',
      points: ['Integração entre sistemas existentes', 'Redução de tarefas repetitivas', 'Mais produtividade operacional'],
      title: 'md:col-span-8 md:col-start-3 md:text-center',
      body: 'md:col-span-8 md:col-start-3 md:text-center',
    },
    {
      name: 'Landing pages',
      lead: 'Infraestrutura de campanhas, não só uma página bonita.',
      text: 'Uma landing page precisa converter e dizer o que está funcionando. Desenvolvemos a página com foco na experiência de conversão e com mensuração e rastreamento configurados desde o início.',
      points: ['Experiência pensada para conversão', 'Mensuração e rastreamento', 'Base para evoluir para integrações e CRM'],
      title: 'md:col-span-7',
      body: 'md:col-span-4 md:col-start-9',
    },
    {
      name: 'Sites comerciais',
      lead: 'Presença digital à altura do trabalho que a empresa entrega.',
      text: 'O site é, muitas vezes, o primeiro contato com a empresa. Construímos sites institucionais e comerciais com apresentação cuidadosa, estrutura pensada para SEO e conteúdo que sustenta a autoridade do negócio.',
      points: ['Autoridade e presença digital', 'Estrutura otimizada para buscadores', 'Apresentação com qualidade profissional'],
      title: 'md:order-1 md:col-span-6 md:col-start-7',
      body: 'md:order-2 md:col-span-6 md:col-start-7',
    },
  ];
}
