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
  // `caseSlug` identifica um case publicado; serviços sem case não exibem o link.
  protected readonly services = [
    {
      slug: 'landing-pages',
      caseSlug: 'paulo-carvalho',
      theme: 'Landing pages',
      name: 'Aquisição de clientes',
      value:
        'Apresenta sua oferta, esclarece dúvidas frequentes e facilita o contato com potenciais clientes.',
      text: 'Páginas para campanhas ou serviços específicos, com foco em conversão, performance e mensuração.',
      images: [
        {
          src: '/services-imgs/landing-page-hero-print.png',
          alt: 'Seção principal da landing page do PC Paulo Carvalho',
        },
      ],
      proof: {
        project: 'PC Paulo Carvalho',
        url: 'https://www.pcpaulocarvalho.com.br/',
        solved: 'Landing page desenvolvida para apresentar o serviço e facilitar o contato.',
      },
    },
    {
      slug: 'sites',
      caseSlug: 'caldeiraria-realiza',
      theme: 'Sites comerciais',
      name: 'Experiência do cliente',
      value:
        'Transmite a qualidade da sua empresa e facilita que novos clientes encontrem seus serviços.',
      text: 'Sites institucionais e comerciais com SEO, apresentação de serviços e canais de contato.',
      images: [
        {
          src: '/services-imgs/site-home-page-print.png',
          alt: 'Página inicial do site da Caldeiraria Realiza',
        },
        {
          src: '/services-imgs/site-subpage-print.png',
          alt: 'Página interna de serviço do site da Caldeiraria Realiza',
        },
      ],
      proof: {
        project: 'Caldeiraria Realiza',
        url: 'https://caldeirariarealiza.com.br/',
        solved:
          'Site institucional desenvolvido para apresentar os serviços da empresa e facilitar o contato.',
      },
    },
    {
      slug: 'crm',
      caseSlug: 'simtese',
      theme: 'CRM',
      name: 'Organização comercial',
      value: 'Centraliza informações e facilita o acompanhamento de clientes e oportunidades.',
      text: 'Sistemas personalizados para gerenciar relacionamentos, atendimentos e processos comerciais.',
      images: [
        {
          src: '/services-imgs/crm-home-print.png',
          alt: 'Tela inicial do CRM da Simtese servindo de experiencia para clientes',
        },
        {
          src: '/services-imgs/crm-dash-print.png',
          alt: 'Tela para agendamento publico por empresa para usuarios externos do CRM',
        },
      ],
      proof: {
        project: 'Simtese Medicina do Trabalho',
        url: 'https://www.simtese.com.br/',
        solved:
          'Sistema de gestão de clientes desenvolvido baseado no processo operacional da Simtese com objetivo de disponibilizar o agendamento de exames, controle interno e liberação de resultados pela equipe.',
      },
    },
    {
      slug: 'automacoes',
      caseSlug: null,
      theme: 'Automações e integrações',
      name: 'Produtividade e eficiência',
      value: 'Reduz tarefas manuais, valida informações e evita retrabalho entre ferramentas.',
      text: 'Fluxos automatizados e integrações desenvolvidos para as rotinas da sua operação.',
      images: [],
      proof: null,
    },
    {
      slug: 'erp',
      caseSlug: 'lalouise',
      theme: 'ERP e sistemas de gestão',
      name: 'Controle operacional',
      value: 'Organiza processos e centraliza informações para reduzir erros e melhorar a gestão.',
      text: 'Sistemas de gestão sob medida para controle de operações, registros e rastreabilidade.',
      images: [
        {
          src: '/services-imgs/erp-home-print.png',
          alt: 'Tela inicial do ERP de controle de validade da Lalouise Consultoria',
        },
        {
          src: '/services-imgs/erp-dash-print.png',
          alt: 'Painel de indicadores de validade e qualidade dos alimentos',
        },
        {
          src: '/services-imgs/erp-labels-print.png',
          alt: 'Tela de etiquetas de validade dos alimentos',
        },
      ],
      proof: {
        project: 'Lalouise Consultoria',
        url: 'https://lalouiseconsultoria.com.br/',
        solved:
          'ERP multitenant com módulos sob medida para controle de validade e qualidade de alimentos em restaurantes orientais. A Lalouise oferece o mesmo sistema a vários restaurantes clientes.',
      },
    },
  ];
}
