import { ServiceSlug } from '../../../core/site.config';

export interface Heading { lead: string; key: string }
export interface Item { name: string; text: string }

// Conteúdo de uma página de serviço, organizado em StoryBrand: hero (personagem + sucesso), desafios (problema + fracasso a evitar), solução (guia + sucesso), plano e chamada para ação. A estrutura é a mesma; o texto é de cada frente.
export interface ServiceContent {
  slug: ServiceSlug;
  label: string;
  /** Hipótese de palavra-chave principal (a validar em ferramenta de pesquisa; ver docs/copyright.md). */
  keyword: string;
  title: string;
  description: string;
  h1: Heading;
  intro: string;
  /** Imagem do hero e da solução quando não há case com imagem própria. */
  image: string;
  challenges: { title: Heading; intro: string; items: Item[] };
  solution: { title: Heading; text: string; caseSlug?: string };
  process: { text: string; steps: Item[] };
  cta: { headline: Heading; text: string; label: string; message: string };
}

export const SERVICES: ServiceContent[] = [
  {
    slug: 'sites',
    label: 'Sites comerciais',
    keyword: 'desenvolvimento de sites e landing pages',
    title: 'Sites e landing pages sob medida | Optional',
    description: 'Sites comerciais e landing pages sob medida: conteúdo claro, SEO técnico e contato facilitado para apresentar seus serviços e receber contatos mais qualificados.',
    h1: { lead: 'Sites e landing pages que', key: 'explicam o seu serviço' },
    intro: 'Apresente o que a empresa faz, esclareça as dúvidas de quem pesquisa e facilite o contato de quem realmente precisa do seu serviço. Desenvolvemos sites comerciais e páginas de campanha sob medida.',
    image: '/solutions/site-abstract.png',
    challenges: {
      title: { lead: 'Quando o site', key: 'não qualifica o contato' },
      intro: 'Sinais de que a presença digital ainda não esclarece o que a empresa oferece.',
      items: [
        { name: 'Dúvidas que se repetem', text: 'Perguntas básicas sobre serviços e região chegam por mensagem porque o site não as responde, e a equipe perde tempo com elas.' },
        { name: 'Contatos sem aderência', text: 'Sem uma apresentação clara do que a empresa faz, chegam pedidos que não fazem parte da oferta.' },
        { name: 'Serviços difíceis de encontrar', text: 'Sem páginas organizadas por serviço e região, quem pesquisa não encontra a empresa pelo que ela oferece.' },
        { name: 'Campanhas sem página própria', text: 'Uma oferta específica apontada para a página inicial dispersa o visitante e dificulta saber o que funcionou.' },
      ],
    },
    solution: {
      title: { lead: 'Uma presença digital que', key: 'apresenta e qualifica' },
      text: 'Estruturamos o conteúdo pelas dúvidas e buscas do seu público, com SEO técnico, boa leitura em qualquer tela e caminhos claros de contato, incluindo páginas de campanha quando necessário. Para a Caldeiraria Realiza, implementamos um site comercial para que a empresa fosse encontrada pelo nicho, pelos serviços e pela região de atuação.',
      caseSlug: 'caldeiraria-realiza',
    },
    process: {
      text: 'Do primeiro contato à publicação, você acompanha as decisões sobre conteúdo, estrutura e contato.',
      steps: [
        { name: 'Diagnóstico', text: 'Entendemos a empresa, o público, as buscas relevantes e o que o visitante precisa saber antes de entrar em contato.' },
        { name: 'Escopo e proposta', text: 'Definimos páginas, conteúdo, mensuração, prazo e investimento, tudo combinado por escrito antes de o desenvolvimento começar.' },
        { name: 'Desenvolvimento e entrega', text: 'Desenvolvemos, revisamos com você antes de publicar e acertamos suporte e evolução conforme o combinado.' },
      ],
    },
    cta: {
      headline: { lead: 'Vamos estruturar a sua', key: 'presença digital?' },
      text: 'Conte como os clientes chegam até a empresa e o que precisam encontrar. Indicamos a estrutura mais adequada e apresentamos uma proposta.',
      label: 'Solicitar proposta',
      message: 'Olá! Vim pela página de sites e landing pages e gostaria de solicitar uma proposta.',
    },
  },
  {
    slug: 'crm',
    label: 'CRM personalizado',
    keyword: 'desenvolvimento de CRM personalizado',
    title: 'CRM personalizado para a sua empresa | Optional',
    description: 'Desenvolvimento de CRM personalizado: contatos, históricos e acompanhamentos organizados conforme o processo da sua empresa. Apresente a sua necessidade.',
    h1: { lead: 'CRM personalizado para', key: 'organizar clientes e atendimentos' },
    intro: 'Contatos, históricos e acompanhamentos reunidos em um só sistema, desenhado conforme o processo da sua empresa. A equipe encontra o que precisa sem depender de planilhas ou da memória de quem atendeu.',
    image: '/solutions/crm.png',
    challenges: {
      title: { lead: 'Quando o relacionamento com clientes', key: 'perde o fio' },
      intro: 'Problemas comuns de quem acompanha clientes sem um sistema próprio.',
      items: [
        { name: 'Histórico em vários lugares', text: 'Conversas, planilhas e e-mails guardam partes diferentes da história, e o cliente repete tudo quando outra pessoa assume o atendimento.' },
        { name: 'Etapas que ninguém registra', text: 'Sem etapas e responsáveis definidos, fica difícil saber quem deve o próximo contato, e oportunidades ficam paradas.' },
        { name: 'Sistema pronto que não se encaixa', text: 'Quando a ferramenta não segue o processo da empresa, a equipe passa a trabalhar por fora dela.' },
        { name: 'Dados digitados duas vezes', text: 'Contatos que chegam por site ou formulário são copiados à mão, abrindo espaço para erros e omissões.' },
      ],
    },
    solution: {
      title: { lead: 'Um CRM construído a partir do', key: 'seu processo' },
      text: 'Definimos com você campos, etapas, permissões e relatórios, e conectamos o CRM às fontes de contatos que a empresa já usa. Na Símtese, substituímos o pré-cadastro por e-mail por um sistema com validação de dados e padronização de exames.',
      caseSlug: 'simtese',
    },
    process: {
      text: 'Partimos do seu processo comercial, e não de um modelo pronto, e combinamos cada etapa antes de desenvolver.',
      steps: [
        { name: 'Diagnóstico', text: 'Mapeamos como os contatos chegam e são acompanhados hoje: etapas, responsáveis e informações que a equipe consulta.' },
        { name: 'Escopo e proposta', text: 'Definimos campos, etapas, permissões, integrações, prazo e investimento, por escrito e antes do desenvolvimento.' },
        { name: 'Desenvolvimento e entrega', text: 'Desenvolvemos o sistema, validamos com a equipe no uso real e entregamos com o suporte combinado.' },
      ],
    },
    cta: {
      headline: { lead: 'Qual processo o seu', key: 'CRM precisa seguir?' },
      text: 'Descreva como os contatos chegam e são acompanhados hoje. Indicamos o que faz sentido construir e por onde começar.',
      label: 'Apresentar necessidade',
      message: 'Olá! Vim pela página de CRM personalizado e gostaria de apresentar a necessidade da minha empresa.',
    },
  },
  {
    slug: 'automacoes',
    label: 'Automações e integrações',
    keyword: 'automação de processos empresariais / integração de sistemas',
    title: 'Automação de processos e integração de sistemas | Optional',
    description: 'Automação de processos empresariais e integração de sistemas sob medida: reduza tarefas repetitivas e faça as ferramentas da empresa trocarem dados sozinhas.',
    h1: { lead: 'Automações e integrações para', key: 'reduzir o trabalho manual' },
    intro: 'Conectamos as ferramentas que a empresa já usa para que os dados circulem sozinhos, com menos cópia manual, menos erros de digitação e menos retrabalho para a equipe.',
    image: '/solutions/automation.png',
    challenges: {
      title: { lead: 'Onde o trabalho manual', key: 'mais se repete' },
      intro: 'Rotinas que costumam virar retrabalho quando os sistemas não conversam entre si.',
      items: [
        { name: 'Dados copiados entre sistemas', text: 'Cada cópia manual é uma chance de erro e de informação desatualizada em um dos lados.' },
        { name: 'Contatos que esperam repasse', text: 'Formulários e mensagens que dependem de alguém encaminhar demoram a chegar a quem pode responder.' },
        { name: 'Conferências feitas à mão', text: 'Verificar planilhas e registros consome tempo e ainda deixa inconsistências passarem.' },
        { name: 'Avisos que dependem de lembrança', text: 'Prazos e pendências só aparecem quando alguém lembra de olhar.' },
      ],
    },
    solution: {
      title: { lead: 'Automatizar com', key: 'processo claro' },
      text: 'Antes de automatizar, mapeamos o processo e simplificamos o que for preciso, porque automatizar um fluxo confuso só acelera a confusão. Depois conectamos os sistemas, registramos cada execução e sinalizamos falhas.',
    },
    process: {
      text: 'Primeiro entendemos o processo; só depois automatizamos, começando por um fluxo.',
      steps: [
        { name: 'Diagnóstico', text: 'Mapeamos o processo e as ferramentas envolvidas e indicamos o que vale automatizar e o que vale revisar antes.' },
        { name: 'Escopo e proposta', text: 'Definimos fluxos, regras, integrações viáveis, prazo e investimento por escrito. A viabilidade de cada integração depende do que a ferramenta oferece.' },
        { name: 'Desenvolvimento e entrega', text: 'Começamos por um fluxo, validamos no uso real e combinamos o monitoramento, já que sistemas externos podem mudar.' },
      ],
    },
    cta: {
      headline: { lead: 'Qual tarefa a equipe', key: 'repete com frequência?' },
      text: 'Liste as rotinas e as ferramentas envolvidas. Avaliamos o que pode ser automatizado e o que vale revisar antes.',
      label: 'Analisar processo',
      message: 'Olá! Vim pela página de automações e integrações e gostaria de analisar um processo da minha empresa.',
    },
  },
  {
    slug: 'erp',
    label: 'ERP e sistemas de gestão',
    keyword: 'desenvolvimento de ERP personalizado / sistema de gestão sob medida',
    title: 'ERP e sistemas de gestão sob medida | Optional',
    description: 'Desenvolvimento de ERP personalizado e sistemas de gestão: controle operacional, rastreabilidade e dados centralizados a partir da rotina da sua empresa.',
    h1: { lead: 'ERP e sistemas de gestão para', key: 'organizar a operação' },
    intro: 'Rotinas, registros e controles da operação reunidos em um sistema feito para a sua empresa, com histórico do que foi feito, quando e por quem.',
    image: '/solutions/erp.png',
    challenges: {
      title: { lead: 'Quando a operação', key: 'depende de controles soltos' },
      intro: 'Situações que indicam a falta de um sistema de gestão próprio.',
      items: [
        { name: 'Controles em planilhas separadas', text: 'Cada área mantém o seu controle, e a informação fica desatualizada ou diverge entre elas.' },
        { name: 'Rastreabilidade difícil', text: 'Sem histórico confiável, descobrir a origem, o responsável ou a data de um registro vira investigação.' },
        { name: 'Rotinas feitas à mão', text: 'Tarefas repetitivas, como etiquetagem e conferências, consomem a equipe e abrem espaço para falhas.' },
        { name: 'Setores que não conversam', text: 'Dados de uma área precisam ser refeitos em outra, gerando retrabalho.' },
      ],
    },
    solution: {
      title: { lead: 'Sistema de gestão', key: 'sob medida' },
      text: 'Reunimos em uma base única apenas os módulos e as regras de que a operação precisa, começando pelo processo mais crítico. Na LaLouise, substituímos a etiquetagem manual por um sistema de validade automática, que facilita a rastreabilidade dos alimentos.',
      caseSlug: 'lalouise',
    },
    process: {
      text: 'Começamos pela rotina mais crítica e ampliamos por etapas, sempre com o escopo combinado por escrito.',
      steps: [
        { name: 'Diagnóstico', text: 'Entendemos as rotinas, os registros e os controles de cada setor para definir por qual processo começar.' },
        { name: 'Escopo e proposta', text: 'Delimitamos módulos, regras, permissões, prazo e investimento por escrito, antes de o desenvolvimento começar.' },
        { name: 'Desenvolvimento e entrega', text: 'Desenvolvemos por etapas, validamos com quem opera o sistema e entregamos com o suporte combinado. Novos módulos entram depois, sem refazer o que já funciona.' },
      ],
    },
    cta: {
      headline: { lead: 'Vamos diagnosticar a', key: 'sua operação?' },
      text: 'Conte como cada setor trabalha hoje. Apontamos por onde um sistema de gestão pode começar.',
      label: 'Solicitar diagnóstico',
      message: 'Olá! Vim pela página de ERP e sistemas de gestão e gostaria de solicitar um diagnóstico da minha operação.',
    },
  },
];
