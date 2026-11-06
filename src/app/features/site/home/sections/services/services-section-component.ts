import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LazyVideo } from '../../../../../shared/directives/lazy-video';
import { Reveal } from '../../../../../shared/directives/reveal';

// Serviços da homepage: continua o argumento das objeções com as cinco soluções, cada uma com tema, proposta e link para sua página satélite. Os serviços são independentes e podem ser contratados isoladamente.
@Component({
  selector: 'app-services-section',
  imports: [LazyVideo, Reveal, RouterLink],
  templateUrl: './services-section-component.html',
})
export class ServicesSectionComponent {
  // Atributos
  // `slug` aponta para /servicos/:slug; `media` (lista de imagens ou vídeos com kind, src, poster, label; com mais de um item o layout vira conteúdo acima e mídias abaixo, 4 colunas cada) e `proof` (projeto entregue) alimentam a imagem e o aside de prova social. Dados de `proof` , vídeos e posters são provisórios.
  protected readonly services = [
    {
      slug: 'landing-pages',
      theme: 'Landing pages',
      name: 'Aquisição de clientes',
      value:
        'Apresenta sua oferta, esclarece dúvidas frequentes e facilita o contato com potenciais clientes.',
      text: 'Páginas para campanhas ou serviços específicos, com foco em conversão, performance e mensuração.',
      media: [
        {
          kind: 'video' as const,
          src: '/services-video/%SLUG%.mp4',
          poster: '/home-img/optional_abstrato_01_camadas.png',
          label: '',
        },
      ],
      proof: {
        project: 'Projeto em definição',
        url: 'https://optional.com.br',
        solved: 'Descreva aqui o problema resolvido pelo projeto entregue.',
      },
    },
    {
      slug: 'sites',
      theme: 'Sites comerciais',
      name: 'Experiência do cliente',
      value:
        'Transmite a qualidade da sua empresa e facilita que novos clientes encontrem seus serviços.',
      text: 'Sites institucionais e comerciais com SEO, apresentação de serviços e canais de contato.',
      media: [
        {
          kind: 'video' as const,
          src: '/services-video/%SLUG%.mp4',
          poster: '/home-img/optional_abstrato_02_arco.png',
          label: '',
        },
      ],
      proof: {
        project: 'Projeto em definição',
        url: 'https://optional.com.br',
        solved: 'Descreva aqui o problema resolvido pelo projeto entregue.',
      },
    },
    {
      slug: 'crm',
      theme: 'CRM',
      name: 'Organização comercial',
      value: 'Centraliza informações e facilita o acompanhamento de clientes e oportunidades.',
      text: 'Sistemas personalizados para gerenciar relacionamentos, atendimentos e processos comerciais.',
      media: [
        {
          kind: 'image' as const,
          src: '/services-imgs/crm-home-print.png',
          poster: '',
          label: 'Tela inicial do CRM da Simtese servindo de experiencia para clientes',
        },
        {
          kind: 'image' as const,
          src: '/services-imgs/crm-dash-print.png',
          poster: '',
          label: 'Tela para agendamento publico por empresa para usuarios externos do CRM',
        },
        {
          kind: 'image' as const,
          src: '/services-imgs/crm-appointments-print.png',
          poster: '',
          label: 'Tela de controle de agendamentos para usuarios internos do CRM',
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
      theme: 'Automações e integrações',
      name: 'Produtividade e eficiência',
      value: 'Reduz tarefas manuais, valida informações e evita retrabalho entre ferramentas.',
      text: 'Fluxos automatizados e integrações desenvolvidos para as rotinas da sua operação.',
      media: [
        {
          kind: 'video' as const,
          src: '/services-video/%SLUG%.mp4',
          poster: '/home-img/optional_abstrato_04_diagonais.png',
          label: '',
        },
      ],
      proof: {
        project: 'Projeto em definição',
        url: 'https://optional.com.br',
        solved: 'Descreva aqui o problema resolvido pelo projeto entregue.',
      },
    },
    {
      slug: 'erp',
      theme: 'ERP e sistemas de gestão',
      name: 'Controle operacional',
      value: 'Organiza processos e centraliza informações para reduzir erros e melhorar a gestão.',
      text: 'Sistemas de gestão sob medida para controle de operações, registros e rastreabilidade.',
      media: [
        {
          kind: 'video' as const,
          src: '/services-video/%SLUG%.mp4',
          poster: '/home-img/optional_abstrato_01_camadas.png',
          label: '',
        },
      ],
      proof: {
        project: 'Projeto em definição',
        url: 'https://optional.com.br',
        solved: 'Descreva aqui o problema resolvido pelo projeto entregue.',
      },
    },
  ];
}
