import { ServiceSlug } from '../../../core/site.config';

export interface CaseContent {
  slug: string;
  project: string;
  service: ServiceSlug;
  title: string;
  description: string;
  intro: string;
  projectUrl: string;
  projectLinkLabel: string;
  heroImage: string;
  current: string;
  ideal: string;
  bridge: string;
  requirements: { name: string; text: string }[];
  implementation: string;
  images: { src: string; alt: string }[];
}

// Conteúdo editorial dos cases. Requisitos são objetivos do projeto, não resultados medidos.
export const CASES: CaseContent[] = [
  {
    slug: 'paulo-carvalho',
    project: 'Paulo Carvalho',
    service: 'sites',
    title: 'Paulo Carvalho: presença digital profissional | Optional',
    description:
      'Conheça o projeto de presença digital de Paulo Carvalho e os requisitos de conteúdo, busca e experiência que orientaram a solução.',
    intro:
      'Uma presença digital para apresentar a atuação do perito técnico e conectar seus serviços a quem precisa deles.',
    projectUrl: 'https://www.pcpaulocarvalho.com.br/',
    projectLinkLabel: 'Ver projeto',
    heroImage: '/services-imgs/landing-page-hero-print.png',
    current:
      'O profissional já atuava nas redes sociais, mas não tinha presença no Google. Nas redes, era encontrado pela área de atuação, não necessariamente pelos serviços procurados.',
    ideal:
      'Ser encontrado por advogados e equipes de RH que buscam perícia técnica em documentos, serviços e respostas a dúvidas sobre a área de atuação na região de São Paulo.',
    bridge:
      'Uma presença digital própria, estruturada para apresentar o profissional, seus serviços e sua experiência aos públicos que ele atende.',
    requirements: [
      {
        name: 'Serviços e intenção de busca',
        text: 'Apresentar o profissional e estruturar páginas de serviços considerando pesquisas por região e área de atuação.',
      },
      {
        name: 'Comunicação técnica e humana',
        text: 'Falar com advogados e equipes de RH de forma direta, explicar a atuação e apresentar a experiência profissional.',
      },
      {
        name: 'Identidade visual',
        text: 'Transmitir organização, cordialidade, formalidade e autoridade por meio do design.',
      },
      {
        name: 'Desempenho',
        text: 'Buscar pelo menos 90 pontos em cada critério do PageSpeed Insights, como meta de projeto a verificar nas medições.',
      },
      {
        name: 'Conteúdo para busca',
        text: 'Combinar linguagem acessível com conteúdo voltado a serviços e dúvidas frequentes, sem prometer posições em buscadores.',
      },
    ],
    implementation:
      'O projeto reúne apresentação profissional, conteúdo sobre a atuação e caminhos de contato em uma presença digital própria. A estrutura foi pensada para aproximar os serviços das necessidades do público.',
    images: [
      {
        src: '/services-imgs/landing-page-hero-print.png',
        alt: 'Página inicial do site profissional de Paulo Carvalho',
      },
    ],
  },
  {
    slug: 'caldeiraria-realiza',
    project: 'Caldeiraria Realiza',
    service: 'sites',
    title: 'Caldeiraria Realiza: site comercial | Optional',
    description:
      'Conheça o site comercial da Caldeiraria Realiza e a proposta de apresentar seus serviços em uma presença digital própria.',
    intro:
      'Implementamos um site comercial para que a Realiza pudesse ser encontrada pelo nicho, serviços oferecidos e região de atuação, além de melhorar a experiência e qualificar potenciais clientes.',
    projectUrl: 'https://caldeirariarealiza.com.br/',
    projectLinkLabel: 'Ver projeto',
    heroImage: '/services-imgs/site-home-page-print.png',
    current:
      'O projeto parte da necessidade de apresentar a empresa e sua atuação em um espaço digital próprio.',
    ideal:
      'Oferecer aos visitantes um caminho claro para conhecer os serviços e entrar em contato.',
    bridge: 'Um site comercial que organiza a apresentação da empresa e dos serviços.',
    requirements: [
      {
        name: 'Apresentação da empresa',
        text: 'Reunir informações sobre a atuação da Caldeiraria Realiza.',
      },
      { name: 'Serviços', text: 'Apresentar os serviços em páginas que facilitem a consulta.' },
      { name: 'Contato', text: 'Deixar acessível o caminho para falar com a empresa.' },
    ],
    implementation:
      'A solução organiza a apresentação institucional e os serviços em um site comercial, com canais de contato para os visitantes.',
    images: [
      {
        src: '/services-imgs/site-home-page-print.png',
        alt: 'Página inicial do site da Caldeiraria Realiza',
      },
      {
        src: '/services-imgs/site-subpage-print.png',
        alt: 'Página de serviço do site da Caldeiraria Realiza',
      },
    ],
  },
  {
    slug: 'simtese',
    project: 'Símtese',
    service: 'crm',
    title: 'Símtese: CRM e agendamentos | Optional',
    description:
      'Conheça a solução de CRM e gestão de agendamentos desenvolvida para a operação da Símtese.',
    intro:
      'Substituímos o pré-cadastro por e-mail por um sistema com validação de dados e padronização de exames, antecipando inconsistências, reduzindo retrabalho e aumentando a eficiência no atendimento.',
    projectUrl: 'https://www.simtese.com.br/',
    projectLinkLabel: 'Visitar site do cliente',
    heroImage: '/services-imgs/crm-home-print.png',
    current:
      'A operação precisava de uma forma de acompanhar clientes e agendamentos de acordo com seu processo de trabalho.',
    ideal:
      'Organizar o acompanhamento dos agendamentos e resultados em uma solução adequada à rotina da equipe.',
    bridge: 'Um CRM desenvolvido para apoiar a gestão de clientes e agendamentos.',
    requirements: [
      { name: 'Clientes', text: 'Apoiar o acompanhamento de informações dos clientes.' },
      { name: 'Agendamentos', text: 'Organizar o acompanhamento dos agendamentos.' },
      { name: 'Resultados', text: 'Apoiar o acompanhamento dos resultados pela equipe.' },
    ],
    implementation:
      'A solução foi desenvolvida para a gestão de clientes, com foco nos agendamentos e no acompanhamento de resultados.',
    images: [
      {
        src: '/services-imgs/crm-dash-print.png',
        alt: 'Formulário de agendamento do site da Símtese',
      },
    ],
  },
  {
    slug: 'lalouise',
    project: 'LaLouise',
    service: 'erp',
    title: 'LaLouise: sistema de gestão | Optional',
    description:
      'Conheça o sistema de gestão para controle operacional e rastreabilidade desenvolvido para a LaLouise.',
    intro:
      'Substituímos a etiquetagem manual por um sistema de validade automática, reduzindo tarefas repetitivas e facilitando a rastreabilidade dos alimentos.',
    projectUrl: 'https://lalouiseconsultoria.com.br/',
    projectLinkLabel: 'Visitar site do cliente',
    heroImage: '/services-imgs/erp-home-print.png',
    current:
      'O projeto parte da necessidade de acompanhar rotinas de controle operacional e rastreabilidade.',
    ideal: 'Organizar essas rotinas em um sistema alinhado à operação da LaLouise.',
    bridge: 'Um sistema de gestão que reúne os controles necessários para apoiar a operação.',
    requirements: [
      {
        name: 'Controle operacional',
        text: 'Apoiar o registro e o acompanhamento das rotinas da operação.',
      },
      {
        name: 'Rastreabilidade',
        text: 'Organizar informações relevantes para acompanhar os controles.',
      },
      { name: 'Consulta', text: 'Apresentar informações em telas acessíveis à equipe.' },
    ],
    implementation:
      'O sistema reúne recursos de controle operacional e rastreabilidade em uma solução de gestão desenvolvida para a LaLouise.',
    images: [],
  },
];
