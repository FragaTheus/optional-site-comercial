import { Component, inject } from '@angular/core';
import { Seo } from '../../../core/seo';
import { CONTACT_URL } from '../../../core/site.config';

// Homepage: apresenta a Option e funciona como hub que direciona para cada serviço.
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {
  // Atributos
  protected readonly contactUrl = CONTACT_URL;
  // `title` e `body` posicionam cada serviço em uma região diferente do grid, para a seção não virar uma lista repetida.
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
  protected readonly stages = [
    { name: 'Landing page', text: 'Uma página para captar contatos e medir o que gera resultado.', card: 'card-primary', offset: '' },
    { name: 'Integrações', text: 'Os contatos passam a fluir para as ferramentas da equipe, sem cópia manual.', card: 'card-primary', offset: 'md:mt-10' },
    { name: 'CRM', text: 'Cada contato ganha histórico, e o processo comercial passa a ser acompanhado.', card: 'card-primary', offset: 'md:mt-20' },
    { name: 'ERP', text: 'A operação inteira, dos pedidos ao controle interno, no mesmo sistema.', card: 'card-secondary', offset: 'md:mt-30' },
  ];
  protected readonly principles = [
    { title: 'Sob medida', text: 'A solução nasce do seu processo, não de um pacote adaptado.' },
    { title: 'Integrado', text: 'Conversa com as ferramentas e os dados que você já tem.' },
    { title: 'Evolutivo', text: 'Estruturado para crescer junto com a operação.' },
  ];
  protected readonly faqs = [
    { q: 'Como começa um projeto?', a: 'Por uma conversa sobre como a sua operação funciona hoje: processos, ferramentas, gargalos e objetivos. Com esse cenário, indicamos o que faz sentido construir e por onde começar.' },
    { q: 'Preciso trocar as ferramentas que já uso?', a: 'Não necessariamente. Sempre que possível, o novo sistema se integra ao que a empresa já utiliza. A troca só é recomendada quando a ferramenta atual é, de fato, o problema.' },
    { q: 'Quanto custa e quanto tempo leva?', a: 'Depende do escopo, e por isso não trabalhamos com valores de tabela. Prazo e investimento são apresentados depois de entendermos a operação e antes de qualquer desenvolvimento começar.' },
    { q: 'Preciso de um ERP completo desde o início?', a: 'Não. Muitos projetos começam por uma landing page, uma automação ou um CRM e evoluem em etapas. Cada etapa só entra quando faz sentido para o negócio.' },
    { q: 'Como funciona a entrega?', a: 'O trabalho é dividido em etapas, com validações ao longo do caminho, para que a solução seja ajustada ao uso real antes de chegar ao final.' },
    { q: 'O que acontece depois que o sistema entra no ar?', a: 'A solução continua evoluindo conforme o negócio muda. Condições de suporte e manutenção são combinadas por escrito antes do início do projeto.' },
  ];

  // Construtores
  constructor() {
    inject(Seo).set(
      'Option — Software e infraestrutura digital sob medida para empresas',
      'A Option desenvolve CRM, ERP e sistemas de gestão, automações, landing pages e sites comerciais sob medida para a realidade de cada empresa.',
    );
  }
}
