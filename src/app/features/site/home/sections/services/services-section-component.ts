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
  // `slug` aponta para /servicos/:slug; `video` (src, poster, label) e `proof` (projeto entregue) alimentam a imagem e o aside de prova social. Dados de `proof` , vídeos e posters são provisórios.
  protected readonly services = [
    {
      slug: 'landing-pages',
      theme: 'Landing pages',
      name: 'Aquisição de clientes',
      anchor: 'Ver desenvolvimento de landing pages',
      value:
        'Apresenta sua oferta, esclarece dúvidas frequentes e facilita o contato com potenciais clientes.',
      text: 'Páginas para campanhas ou serviços específicos, com foco em conversão, performance e mensuração.',
      video: {
        src: '/services-video/%SLUG%.mp4',
        poster: '/home-img/optional_abstrato_01_camadas.png',
        label: '',
      },
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
      anchor: 'Ver desenvolvimento de sites comerciais',
      value:
        'Transmite a qualidade da sua empresa e facilita que novos clientes encontrem seus serviços.',
      text: 'Sites institucionais e comerciais com SEO, apresentação de serviços e canais de contato.',
      video: {
        src: '/services-video/%SLUG%.mp4',
        poster: '/home-img/optional_abstrato_02_arco.png',
        label: '',
      },
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
      anchor: 'Ver desenvolvimento de CRM personalizado',
      value: 'Centraliza informações e facilita o acompanhamento de clientes e oportunidades.',
      text: 'Sistemas personalizados para gerenciar relacionamentos, atendimentos e processos comerciais.',
      video: {
        src: '/services-video/%SLUG%.mp4',
        poster: '/home-img/optional_abstrato_03_planos.png',
        label: '',
      },
      proof: {
        project: 'Projeto em definição',
        url: 'https://optional.com.br',
        solved: 'Descreva aqui o problema resolvido pelo projeto entregue.',
      },
    },
    {
      slug: 'automacoes',
      theme: 'Automações e integrações',
      name: 'Produtividade e eficiência',
      anchor: 'Ver automações e integrações de sistemas',
      value: 'Reduz tarefas manuais, valida informações e evita retrabalho entre ferramentas.',
      text: 'Fluxos automatizados e integrações desenvolvidos para as rotinas da sua operação.',
      video: {
        src: '/services-video/%SLUG%.mp4',
        poster: '/home-img/optional_abstrato_04_diagonais.png',
        label: '',
      },
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
      anchor: 'Ver desenvolvimento de ERP e sistemas de gestão',
      value: 'Organiza processos e centraliza informações para reduzir erros e melhorar a gestão.',
      text: 'Sistemas de gestão sob medida para controle de operações, registros e rastreabilidade.',
      video: {
        src: '/services-video/%SLUG%.mp4',
        poster: '/home-img/optional_abstrato_01_camadas.png',
        label: '',
      },
      proof: {
        project: 'Projeto em definição',
        url: 'https://optional.com.br',
        solved: 'Descreva aqui o problema resolvido pelo projeto entregue.',
      },
    },
  ];
}
