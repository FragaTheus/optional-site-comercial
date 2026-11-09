import { ServiceSlug } from '../../../core/site.config';

export interface CaseContent {
  slug: string;
  project: string;
  /** Frente comercial principal e competências secundárias (vínculo estrutural; não altera a narrativa BAB). */
  service: ServiceSlug;
  secondary: ServiceSlug[];
  title: string;
  description: string;
  intro: string;
  projectUrl?: string;
  projectLinkLabel?: string;
  heroImage: string;
  before: { scenario: string; problem: string; consequences: string[] };
  after: { summary: string; benefits: { title: string; text: string }[] };
  bridge: { text: string; image: { src: string; alt: string } };
  cta: { lead: string; key: string; text: string; message: string };
}

// Conteúdo editorial dos cases em Before → After → Bridge. Só descreve o que a solução entrega, sem métricas não verificadas.
export const CASES: CaseContent[] = [
  {
    slug: 'paulo-carvalho',
    project: 'Paulo Carvalho',
    service: 'sites',
    secondary: [],
    title: 'Paulo Carvalho: presença digital profissional | Optional',
    description:
      'Como a Optional criou a presença digital de Paulo Carvalho, perito técnico, para apresentar seus serviços a advogados e equipes de RH.',
    intro:
      'Um site próprio para apresentar a atuação do perito técnico e conectar seus serviços a quem precisa deles.',
    projectUrl: 'https://www.pcpaulocarvalho.com.br/',
    projectLinkLabel: 'Ver projeto',
    heroImage: '/services-imgs/landing-page-hero-print.png',
    before: {
      scenario:
        'O profissional já atuava nas redes sociais, mas não tinha presença no Google. Era encontrado pela área de atuação, não pelos serviços que as pessoas procuravam.',
      problem:
        'Advogados e equipes de RH que buscam perícia técnica em documentos na região de São Paulo não tinham um endereço próprio onde conhecer os serviços.',
      consequences: [
        'Serviços pouco visíveis para quem pesquisava por eles.',
        'Apresentação profissional dependente de perfis em redes sociais.',
      ],
    },
    after: {
      summary: 'Os serviços e a experiência do perito passaram a ter um endereço próprio, pensado para quem busca perícia técnica.',
      benefits: [
        { title: 'Serviços em páginas próprias', text: 'Cada serviço é apresentado considerando como o público pesquisa por região e área de atuação.' },
        { title: 'Dúvidas respondidas', text: 'Conteúdo em linguagem acessível responde às perguntas frequentes de quem contrata uma perícia.' },
        { title: 'Identidade profissional', text: 'O visual transmite organização, cordialidade e formalidade, condizentes com a atuação.' },
      ],
    },
    bridge: {
      text: 'Desenvolvemos um site que reúne a apresentação do profissional, páginas de serviços estruturadas para a busca e caminhos de contato. O conteúdo fala diretamente com advogados e equipes de RH, e o design foi construído para transmitir autoridade sem perder a proximidade.',
      image: { src: '/services-imgs/landing-page-hero-print.png', alt: 'Página inicial do site profissional de Paulo Carvalho' },
    },
    cta: {
      lead: 'Precisa apresentar seus serviços',
      key: 'online?',
      text: 'Conte o que você faz e para quem. Vamos desenhar uma presença digital que apresente sua atuação com clareza.',
      message: 'Olá! Vim pelo case Paulo Carvalho e gostaria de conversar sobre um site para a minha atuação.',
    },
  },
  {
    slug: 'caldeiraria-realiza',
    project: 'Caldeiraria Realiza',
    service: 'sites',
    secondary: [],
    title: 'Caldeiraria Realiza: site comercial | Optional',
    description:
      'Como a Optional desenvolveu o site comercial da Caldeiraria Realiza para apresentar serviços e facilitar a descoberta em buscas específicas.',
    intro:
      'Um site comercial para a Realiza ser encontrada pelo nicho, pelos serviços oferecidos e pela região de atuação.',
    projectUrl: 'https://caldeirariarealiza.com.br/',
    projectLinkLabel: 'Ver projeto',
    heroImage: '/services-imgs/site-home-page-print.png',
    before: {
      scenario:
        'A empresa dependia de canais como redes sociais para se apresentar e receber contatos.',
      problem:
        'Sem um site comercial, era difícil aparecer em buscas por serviços específicos e explicar com clareza o que a caldeiraria executa.',
      consequences: [
        'Serviços apresentados de forma dispersa.',
        'Contatos chegavam com pouco contexto sobre o que o cliente precisava.',
      ],
    },
    after: {
      summary: 'A empresa passou a apresentar seus serviços em um site próprio, preparado para ser encontrado por termos relevantes.',
      benefits: [
        { title: 'Serviços organizados', text: 'Cada serviço tem uma página própria, mais fácil de consultar e de compartilhar.' },
        { title: 'Descoberta por busca', text: 'O conteúdo e a estrutura do site foram preparados para que a empresa seja encontrada por termos ligados aos seus serviços.' },
        { title: 'Contatos mais contextualizados', text: 'O visitante conhece o serviço antes de falar com a empresa, o que qualifica o primeiro contato.' },
      ],
    },
    bridge: {
      text: 'Desenvolvemos um site comercial que organiza a apresentação da empresa e de seus serviços, com conteúdo direcionado a cada atividade e recursos de SEO. Os canais de contato ficam acessíveis em todas as páginas.',
      image: { src: '/services-imgs/site-subpage-print.png', alt: 'Página de serviço do site da Caldeiraria Realiza' },
    },
    cta: {
      lead: 'Sua empresa precisa ser',
      key: 'encontrada?',
      text: 'Conte quais serviços você oferece e onde atua. Vamos estruturar um site comercial que apresente sua empresa com clareza.',
      message: 'Olá! Vim pelo case Caldeiraria Realiza e gostaria de conversar sobre um site comercial para a minha empresa.',
    },
  },
  {
    slug: 'simtese',
    project: 'Símtese',
    service: 'sistemas',
    secondary: ['automacoes'],
    title: 'Símtese: pré-cadastro e atendimento | Optional',
    description:
      'Como a Optional substituiu o pré-cadastro por e-mail da Símtese por um sistema com validação de dados e padronização de exames.',
    intro:
      'Substituímos o pré-cadastro por e-mail por um sistema com validação de dados e padronização de exames, antecipando inconsistências e reduzindo retrabalho no atendimento.',
    projectUrl: 'https://www.simtese.com.br/',
    projectLinkLabel: 'Visitar site do cliente',
    heroImage: '/services-imgs/simtese-home-print.png',
    before: {
      scenario:
        'O pré-cadastro dos atendimentos de medicina do trabalho era feito por formulários enviados por e-mail.',
      problem:
        'A equipe conferia as informações manualmente, e erros ou dados faltantes só apareciam depois que o formulário já tinha sido recebido.',
      consequences: [
        'Inconsistências identificadas tardiamente.',
        'Retrabalho para corrigir e confirmar informações.',
      ],
    },
    after: {
      summary: 'O pré-cadastro passou a acontecer em um fluxo organizado, com dados conferidos antes de chegarem à equipe.',
      benefits: [
        { title: 'Dados validados antecipadamente', text: 'Inconsistências são identificadas durante o preenchimento, e não na conferência posterior.' },
        { title: 'Exames padronizados', text: 'Os exames seguem uma lista única, evitando variações de nome e descrição entre solicitações.' },
        { title: 'Processo mais organizado', text: 'As informações chegam em um único fluxo, substituindo a troca de formulários por e-mail.' },
      ],
    },
    bridge: {
      text: 'Desenvolvemos um sistema com formulário de pré-cadastro em etapas (funcionário, empresa e agendamento), validação dos dados informados e padronização dos exames. A equipe recebe as informações já organizadas, com menos conferência manual.',
      image: { src: '/services-imgs/simtese-form-print.png', alt: 'Formulário de pré-cadastro em etapas do sistema da Símtese' },
    },
    cta: {
      lead: 'Seu atendimento ainda depende de',
      key: 'formulários e e-mails?',
      text: 'Conte como o processo funciona hoje. Vamos entender onde um sistema sob medida pode organizar a rotina da sua equipe.',
      message: 'Olá! Vim pelo case Símtese e gostaria de conversar sobre um sistema para organizar o atendimento da minha empresa.',
    },
  },
  {
    slug: 'lalouise',
    project: 'LaLouise',
    service: 'sistemas',
    secondary: ['automacoes'],
    title: 'LaLouise: validades e rastreabilidade | Optional',
    description:
      'Como a Optional desenvolveu para a LaLouise um sistema de validade automática e etiquetas para rastrear alimentos.',
    intro:
      'Substituímos a etiquetagem manual por um sistema de validade automática, reduzindo tarefas repetitivas e facilitando a rastreabilidade dos alimentos.',
    projectUrl: 'https://lalouiseconsultoria.com.br/',
    projectLinkLabel: 'Visitar site do cliente',
    heroImage: '/services-imgs/lalouise-home-print.png',
    before: {
      scenario:
        'O controle de validade dos alimentos dependia de etiquetas preenchidas manualmente.',
      problem:
        'A equipe repetia, a cada produto, o cálculo da validade e o preenchimento da etiqueta, sem um registro centralizado dos lotes.',
      consequences: [
        'Tempo gasto em tarefas repetitivas.',
        'Dificuldade para saber quais alimentos estavam próximos do vencimento.',
      ],
    },
    after: {
      summary: 'Parte do controle de validades passou a ser automática, com registros padronizados dos alimentos.',
      benefits: [
        { title: 'Menos atividades manuais', text: 'A validade é calculada pelo sistema, e a equipe deixa de refazer o cálculo a cada etiqueta.' },
        { title: 'Etiquetas padronizadas', text: 'Todos os alimentos são identificados com o mesmo formato de informação.' },
        { title: 'Rastreabilidade dos lotes', text: 'Produto, lote, validade e status ficam consultáveis em uma lista única.' },
      ],
    },
    bridge: {
      text: 'Desenvolvemos um sistema que calcula a validade de cada produto, emite as etiquetas e mantém a lista de lotes com produto, validade e status (ativo ou vencido). A equipe consulta o que está dentro do prazo sem depender de anotações.',
      image: { src: '/services-imgs/lalouise-labels-print.png', alt: 'Lista de lotes do sistema da LaLouise com produto, validade e status' },
    },
    cta: {
      lead: 'Sua operação ainda depende de',
      key: 'controles manuais?',
      text: 'Conte qual rotina consome mais tempo da equipe. Vamos avaliar como um sistema de gestão sob medida pode organizá-la.',
      message: 'Olá! Vim pelo case LaLouise e gostaria de conversar sobre um sistema de gestão para a minha operação.',
    },
  },
  {
    slug: 'automacao-ecommerce',
    project: 'Automação de e-commerce',
    service: 'automacoes',
    secondary: ['integracoes'],
    title: 'Automação de e-commerce: cadastro de produtos | Optional',
    description:
      'Como a Optional automatizou o cadastro e o tratamento de informações de produtos de um e-commerce, conectando as ferramentas utilizadas na operação.',
    intro:
      'Automatizamos tarefas de cadastro e tratamento das informações de produtos, conectando as ferramentas da operação para reduzir o trabalho manual.',
    heroImage: '/solutions/automation.png',
    before: {
      scenario:
        'O cadastro e o tratamento das informações dos produtos dependiam de tarefas manuais repetidas em diferentes ferramentas.',
      problem:
        'A equipe precisava copiar e ajustar dados de produtos de uma ferramenta para outra, o que tomava tempo e abria espaço para erros.',
      consequences: [
        'Tempo da equipe dedicado a tarefas repetitivas.',
        'Informações de produtos digitadas mais de uma vez.',
      ],
    },
    after: {
      summary: 'Etapas do cadastro e do tratamento dos produtos passaram a ser executadas automaticamente, com as ferramentas compartilhando as informações.',
      benefits: [
        { title: 'Menos tarefas repetitivas', text: 'Etapas que antes eram feitas à mão passam a ser executadas automaticamente.' },
        { title: 'Menos cadastros duplicados', text: 'As ferramentas compartilham as informações dos produtos, sem a necessidade de digitá-las de novo.' },
        { title: 'Padronização das informações', text: 'Os dados dos produtos seguem as mesmas regras de tratamento a cada cadastro.' },
      ],
    },
    bridge: {
      text: 'Desenvolvemos automações que executam as tarefas de cadastro e tratamento das informações de produtos, apoiadas por integrações entre as ferramentas usadas na operação. A automação executa as etapas; a integração permite que as informações circulem entre os sistemas.',
      image: { src: '/solutions/automation.png', alt: 'Ilustração de fluxo automatizado entre ferramentas' },
    },
    cta: {
      lead: 'Sua equipe repete as mesmas',
      key: 'tarefas de cadastro?',
      text: 'Conte quais ferramentas você usa e o que a equipe refaz com frequência. Vamos avaliar o que pode ser automatizado e conectado.',
      message: 'Olá! Vim pelo case de automação de e-commerce e gostaria de conversar sobre automatizar tarefas da minha operação.',
    },
  },
];
