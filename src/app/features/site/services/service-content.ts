import { ServiceSlug } from '../../../core/site.config';

export interface Heading { lead: string; key: string; tail?: string }
export interface Item { name: string; text: string }

// Conteúdo de uma página satélite. Cada página responde a uma intenção de busca própria; a estrutura é a mesma, o texto não.
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
  steps: Item[];
  cta: { headline: Heading; text: string; label: string; message: string };
}

const STEPS: Item[] = [
  { name: 'Diagnóstico', text: 'Conversamos sobre a operação, as rotinas e o que precisa mudar, para entender a necessidade antes de propor qualquer solução.' },
  { name: 'Escopo e proposta', text: 'Escopo, prazo, investimento e condições de suporte são combinados por escrito antes de o desenvolvimento começar. Não trabalhamos com valores de tabela.' },
  { name: 'Desenvolvimento e entrega', text: 'Desenvolvemos, validamos com você no uso real e entregamos. O suporte e a evolução seguem o que foi combinado no início.' },
];

export const SERVICES: ServiceContent[] = [
  {
    slug: 'crm',
    label: 'CRM personalizado',
    keyword: 'desenvolvimento de CRM personalizado',
    title: 'Desenvolvimento de CRM personalizado | Optional',
    description: 'Desenvolvimento de CRM personalizado: base de clientes, histórico de atendimento e processo comercial desenhados para a sua operação. Solicite um projeto.',
    h1: { lead: 'Desenvolvimento de', key: 'CRM personalizado' },
    intro: 'Um CRM personalizado organiza clientes, histórico e acompanhamento comercial do jeito que a sua empresa trabalha, em vez de exigir que a equipe se adapte a um sistema pronto. A Optional projeta e desenvolve o CRM a partir do seu processo real.',
    image: '/solutions/crm.png',
    challenges: {
      title: { lead: 'Quando um CRM sob medida', key: 'faz sentido' },
      intro: 'Sinais de que o relacionamento com clientes já pede um sistema próprio.',
      items: [
        { name: 'Contatos espalhados', text: 'Clientes em planilhas, e-mails e mensagens, com informações que dependem de quem fez o atendimento.' },
        { name: 'Processo comercial próprio', text: 'Etapas, critérios de qualificação ou agendamentos que ferramentas prontas só atendem com adaptações.' },
        { name: 'Equipe que cresce', text: 'Mais de uma pessoa atendendo o mesmo cliente exige histórico compartilhado e responsáveis definidos.' },
        { name: 'Dados vindos de outros lugares', text: 'Contatos de site, formulários e outros sistemas precisam chegar ao CRM sem digitação duplicada.' },
      ],
    },
    solution: {
      title: { lead: 'O que é um', key: 'CRM personalizado' },
      text: 'CRM (gestão de relacionamento com clientes) é o sistema onde ficam os contatos, o histórico de cada interação e as etapas do processo comercial. Em um CRM personalizado, campos, etapas, permissões e relatórios são definidos a partir da operação da empresa, e não de um modelo genérico.',
      caseSlug: 'simtese',
    },
    steps: STEPS,
    cta: {
      headline: { lead: 'Vamos desenhar o', key: 'CRM do seu processo?' },
      text: 'Conte como o seu processo comercial funciona hoje. Indicamos o que faz sentido construir e por onde começar.',
      label: 'Apresentar necessidade',
      message: 'Olá! Vim pela página de CRM personalizado e gostaria de apresentar a necessidade da minha empresa.',
    },
  },
  {
    slug: 'erp',
    label: 'ERP e sistemas de gestão',
    keyword: 'desenvolvimento de ERP personalizado / sistema de gestão sob medida',
    title: 'ERP e sistemas de gestão sob medida | Optional',
    description: 'Desenvolvimento de ERP personalizado e sistemas de gestão: controle operacional, rastreabilidade e dados centralizados a partir da rotina da sua empresa.',
    h1: { lead: 'Desenvolvimento de', key: 'ERP e sistemas de gestão' },
    intro: 'Um sistema de gestão sob medida centraliza os dados e controla os processos da operação do jeito que a empresa realmente trabalha, com rastreabilidade do que aconteceu, quando e com quem. A Optional o desenvolve a partir das rotinas, dos registros e dos controles da sua empresa.',
    image: '/solutions/erp.png',
    challenges: {
      title: { lead: 'Quando um sistema personalizado', key: 'faz sentido' },
      intro: 'Sinais de que a operação já pede controle e rastreabilidade em um só lugar.',
      items: [
        { name: 'Operação com regras próprias', text: 'Processos que sistemas de mercado só cobrem com adaptações ou módulos que não se encaixam.' },
        { name: 'Controle em planilhas', text: 'Registros em planilhas separadas, sem histórico confiável nem controle de quem alterou o quê.' },
        { name: 'Necessidade de rastreabilidade', text: 'Quando é preciso saber a origem, o responsável e o histórico de cada registro ou etapa.' },
        { name: 'Setores que não conversam', text: 'Informações de uma área que precisam chegar a outra sem retrabalho.' },
      ],
    },
    solution: {
      title: { lead: 'O que é um', key: 'ERP personalizado' },
      text: 'ERP (planejamento de recursos empresariais) é o sistema que reúne, em uma base única, informações e processos de áreas como operação, estoque, compras, financeiro e atendimento. Em um ERP sob medida, entram apenas os módulos e as regras de que a empresa precisa.',
      caseSlug: 'lalouise',
    },
    steps: STEPS,
    cta: {
      headline: { lead: 'Vamos pedir um', key: 'diagnóstico da operação?' },
      text: 'Conte como a sua operação funciona hoje. Indicamos o que faz sentido construir e por onde começar.',
      label: 'Solicitar diagnóstico',
      message: 'Olá! Vim pela página de ERP e sistemas de gestão e gostaria de solicitar um diagnóstico da minha operação.',
    },
  },
  {
    slug: 'automacoes',
    label: 'Automações e integrações',
    keyword: 'automação de processos empresariais / integração de sistemas',
    title: 'Automação de processos e integração de sistemas | Optional',
    description: 'Automação de processos empresariais e integração de sistemas sob medida: reduza tarefas repetitivas e faça as ferramentas da empresa trocarem dados sozinhas.',
    h1: { lead: 'Desenvolvimento de', key: 'automações e integrações' },
    intro: 'Automações e integrações conectam as ferramentas que a empresa já usa e assumem as tarefas repetitivas entre elas: copiar dados, conferir planilhas, repetir lançamentos, avisar a equipe. A Optional desenvolve essas rotinas sob medida para a sua operação.',
    image: '/solutions/automation.png',
    challenges: {
      title: { lead: 'Processos que costumam ser', key: 'automatizáveis' },
      intro: 'Tarefas manuais que costumam gerar retrabalho e inconsistências.',
      items: [
        { name: 'Entrada de contatos', text: 'Formulários e landing pages que enviam os dados direto ao CRM ou à planilha de controle, sem cópia manual.' },
        { name: 'Sincronização de dados', text: 'Um cadastro atualizado em um sistema refletido automaticamente nos demais.' },
        { name: 'Avisos e notificações', text: 'Alertas à equipe quando algo acontece: novo pedido, prazo próximo, pendência em aberto.' },
        { name: 'Conferência de registros', text: 'Regras que verificam dados e apontam inconsistências antes de virarem problema.' },
      ],
    },
    solution: {
      title: { lead: 'O que é', key: 'automação de processos' },
      text: 'Automação é fazer um sistema executar sozinho uma tarefa que hoje depende de uma pessoa, seguindo regras definidas. Integração é a conexão entre sistemas para que troquem informações automaticamente, em vez de a equipe ser a ponte entre eles.',
    },
    steps: STEPS,
    cta: {
      headline: { lead: 'Vamos analisar o seu', key: 'processo?' },
      text: 'Conte quais tarefas se repetem na sua rotina. Avaliamos o que pode ser automatizado e o que vale revisar antes.',
      label: 'Analisar processo',
      message: 'Olá! Vim pela página de automações e integrações e gostaria de analisar um processo da minha empresa.',
    },
  },
  {
    slug: 'sites',
    label: 'Sites comerciais',
    keyword: 'desenvolvimento de sites e landing pages',
    title: 'Desenvolvimento de sites e landing pages | Optional',
    description: 'Desenvolvimento de sites comerciais e landing pages sob medida, com SEO técnico, desempenho, conteúdo claro e páginas de campanha alinhadas à sua oferta.',
    h1: { lead: 'Desenvolvimento de', key: 'sites e landing pages' },
    intro: 'A presença digital precisa apresentar o trabalho da empresa, responder a quem pesquisa e apoiar campanhas específicas. Desenvolvemos sites comerciais e páginas de campanha com conteúdo, estrutura e tecnologia alinhados à operação e à intenção de busca.',
    image: '/solutions/site-abstract.png',
    challenges: {
      title: { lead: 'Onde a presença digital', key: 'faz diferença' },
      intro: 'Situações em que o site precisa explicar mais e qualificar melhor os contatos.',
      items: [
        { name: 'Apresentação institucional e comercial', text: 'Para explicar a empresa, seus serviços, sua região de atuação e como iniciar uma conversa.' },
        { name: 'Páginas de serviços', text: 'Para responder a buscas específicas e detalhar o que a empresa oferece a cada público.' },
        { name: 'Campanhas e ofertas', text: 'Para concentrar as informações de uma oferta, responder dúvidas e orientar o visitante até uma ação.' },
        { name: 'Presença digital a atualizar', text: 'Quando o conteúdo, a experiência ou a base técnica já não acompanham o trabalho da empresa.' },
      ],
    },
    solution: {
      title: { lead: 'Uma presença digital para', key: 'busca e campanhas' },
      text: 'Sites comerciais e landing pages fazem parte da mesma presença digital. Definimos a arquitetura, a apresentação e a mensuração conforme o público, as buscas relevantes e a ação que a operação precisa apoiar.',
      caseSlug: 'caldeiraria-realiza',
    },
    steps: STEPS,
    cta: {
      headline: { lead: 'Vamos solicitar uma', key: 'proposta?' },
      text: 'Conte como os clientes chegam até a empresa e o que precisam encontrar. Indicamos como estruturar essa presença digital.',
      label: 'Solicitar proposta',
      message: 'Olá! Vim pela página de sites e landing pages e gostaria de solicitar uma proposta.',
    },
  },
];
