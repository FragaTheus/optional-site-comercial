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
  /** Exibe o simulador de horas no lugar da imagem do hero. */
  simulator?: boolean;
  challenges: { title: Heading; intro: string; items: Item[]; sources?: { label: string; href: string }[] };
  solution: { title: Heading; text: string; caseSlug?: string };
  process: { text: string; steps: Item[] };
  cta: { headline: Heading; text: string; label: string; message: string };
}

export const SERVICES: ServiceContent[] = [
  {
    slug: 'sites',
    label: 'Sites e Landing Pages',
    keyword: 'desenvolvimento de sites e landing pages',
    title: 'Sites e landing pages sob medida | Optional',
    description: 'Sites comerciais e landing pages sob medida: conteúdo claro, SEO técnico e contato facilitado para apresentar seus serviços e receber contatos mais qualificados.',
    h1: { lead: 'Melhore a experiência do usuário e', key: 'qualifique potenciais clientes.' },
    intro: 'Criamos experiências que ajudam seu público a encontrar o que procura, compreender suas soluções e entrar em contato mais preparado.',
    image: '/solutions/site-abstract.png',
    challenges: {
      title: { lead: 'O que os visitantes pensam', key: 'sobre os sites das empresas?' },
      intro: 'Pesquisas da Nielsen Norman Group e de Stanford apontam problemas de conteúdo, navegação e credibilidade que prejudicam a experiência e a percepção dos sites empresariais.',
      items: [
        { name: 'Conteúdo genérico', text: 'Textos vagos e repetitivos não esclarecem as dúvidas de quem procura uma solução.' },
        { name: 'Serviços pouco claros', text: 'Descrições incompletas dificultam compreender a oferta e avaliar se ela atende à necessidade.' },
        { name: 'Navegação confusa', text: 'Informações dispersas e caminhos pouco intuitivos dificultam encontrar o que importa.' },
        { name: 'Uma imagem que não representa a empresa', text: 'Um site desatualizado pode transmitir menos confiança do que a qualidade real dos serviços merece.' },
      ],
      sources: [
        { label: 'Nielsen Norman Group — About Us Information on Websites (2019)', href: 'https://www.nngroup.com/articles/about-us-information-on-websites/' },
        { label: 'Stanford — Guidelines for Web Credibility', href: 'https://credibility.stanford.edu/guidelines/' },
      ],
    },
    solution: {
      title: { lead: 'Seus diferenciais', key: 'precisam ser percebidos.' },
      text: 'Transformamos o que torna sua empresa única em uma experiência que comunica seu valor, esclarece dúvidas e ajuda seu público a tomar decisões.',
      caseSlug: 'caldeiraria-realiza',
    },
    process: {
      text: 'Da compreensão do seu negócio à melhoria contínua, cuidamos de cada etapa para que seu site acompanhe os objetivos da sua empresa.',
      steps: [
        { name: 'Conhecemos seu negócio', text: 'Entendemos sua empresa, seus serviços e os problemas que ela resolve.' },
        { name: 'Entendemos seu público', text: 'Identificamos quem procura seus serviços, suas necessidades e o que influencia suas decisões.' },
        { name: 'Planejamos a experiência', text: 'Criamos os textos e o visual do site para valorizar sua empresa e facilitar a navegação.' },
        { name: 'Desenvolvemos e publicamos', text: 'Construímos, colocamos o site no ar e cuidamos do seu funcionamento.' },
        { name: 'Acompanhamos e melhoramos', text: 'Durante o primeiro ano, analisamos os dados e fazemos melhorias conforme o que foi combinado.' },
        { name: 'Atualizamos a cada ano', text: 'Planejamos novas versões para manter o site alinhado à evolução da sua empresa.' },
      ],
    },
    cta: {
      headline: { lead: 'A próxima experiência', key: 'com sua empresa começa aqui.' },
      text: 'Vamos desenvolver uma jornada digital que facilite a descoberta dos seus serviços e prepare seu público para entrar em contato.',
      label: 'Apresentar meu projeto',
      message: 'Olá! Vim pela página de sites e landing pages e gostaria de solicitar uma proposta.',
    },
  },
  {
    slug: 'automacoes',
    label: 'Automações',
    keyword: 'automação de processos e integração de sistemas',
    title: 'Automações e Integrações para Empresas | Optional',
    description: 'Automatize tarefas e conecte as ferramentas da sua empresa para reduzir trabalho manual, retrabalho e tempo gasto transferindo informações.',
    h1: { lead: 'O tempo da sua equipe vale mais que', key: 'tarefas repetitivas.' },
    intro: 'Conectamos suas ferramentas e automatizamos atividades rotineiras, liberando tempo para trabalhos que exigem atenção e decisões humanas.',
    image: '/solutions/automation.png',
    simulator: true,
    challenges: {
      title: { lead: 'Onde o trabalho manual', key: 'mais se repete' },
      intro: 'Rotinas que consomem tempo da equipe e abrem espaço para erros quando dependem de execução manual e de ferramentas que não se conhecem.',
      items: [
        { name: 'Tarefas repetidas todos os dias', text: 'Atividades que seguem sempre as mesmas regras ocupam a equipe com trabalho que poderia ser executado sozinho.' },
        { name: 'Retrabalho para corrigir erros', text: 'Cálculos e preenchimentos feitos à mão estão sujeitos a falhas, e cada correção toma ainda mais tempo.' },
        { name: 'Dados copiados à mão', text: 'Levar informações de uma ferramenta para outra toma tempo, gera cadastros repetidos e permite erros de digitação.' },
        { name: 'Ferramentas subaproveitadas', text: 'Sistemas bons ficam limitados quando não conseguem receber ou enviar informações aos demais, e cada área trabalha com dados diferentes.' },
      ],
    },
    solution: {
      title: { lead: 'Tarefas automáticas e ferramentas', key: 'que trabalham juntas' },
      text: 'Antes de automatizar, mapeamos o processo e simplificamos o que for preciso, porque automatizar um fluxo confuso só acelera a confusão. Depois, definimos as regras, desenvolvemos a automação das tarefas escolhidas e conectamos as ferramentas para que as informações circulem sem digitação. Em um e-commerce, automatizamos o cadastro e o tratamento das informações de produtos; na LaLouise, o cálculo da validade e a emissão das etiquetas.',
      caseSlug: 'automacao-ecommerce',
    },
    process: {
      text: 'Primeiro entendemos o processo e as ferramentas em uso; só depois automatizamos e conectamos, começando por uma tarefa.',
      steps: [
        { name: 'Diagnóstico', text: 'Mapeamos o processo, listamos as ferramentas em uso e indicamos o que vale automatizar, conectar ou revisar antes.' },
        { name: 'Escopo e proposta', text: 'Verificamos o que cada ferramenta permite conectar e definimos tarefas, regras, prazo e investimento, por escrito e antes do desenvolvimento.' },
        { name: 'Desenvolvimento e entrega', text: 'Começamos por uma tarefa, validamos no uso real com a equipe e entregamos com o suporte combinado, já que sistemas externos podem mudar.' },
      ],
    },
    cta: {
      headline: { lead: 'Qual tarefa a equipe', key: 'repete com frequência?' },
      text: 'Liste as rotinas que mais consomem tempo e as ferramentas que precisam conversar. Avaliamos o que pode ser automatizado ou conectado.',
      label: 'Analisar processo',
      message: 'Olá! Vim pela página de automações e gostaria de analisar uma rotina ou conectar ferramentas da minha empresa.',
    },
  },
  {
    slug: 'sistemas',
    label: 'Sistemas personalizados',
    keyword: 'desenvolvimento de sistemas personalizados',
    title: 'Sistemas personalizados sob medida | Optional',
    description: 'Desenvolvimento de sistemas personalizados: um software próprio para organizar e controlar os processos específicos da sua empresa, com informações centralizadas e rastreáveis.',
    h1: { lead: 'Um sistema feito para', key: 'organizar a sua operação.' },
    intro: 'Desenvolvemos softwares próprios que acompanham as particularidades da sua operação, centralizam as informações e permitem controlar cada atividade.',
    image: '/solutions/systems.png',
    challenges: {
      title: { lead: 'Quando nenhum sistema pronto', key: 'se encaixa na operação' },
      intro: 'Processos específicos raramente cabem em ferramentas genéricas.',
      items: [
        { name: 'Controles em planilhas e papéis', text: 'Cada área guarda o seu controle, e a informação fica dispersa e desatualizada.' },
        { name: 'Sistema pronto que não se encaixa', text: 'Quando a ferramenta não segue o processo da empresa, a equipe passa a trabalhar por fora dela.' },
        { name: 'Pouca rastreabilidade', text: 'Sem histórico confiável, descobrir a origem, o responsável ou a data de um registro vira investigação.' },
        { name: 'Atividades sem acompanhamento', text: 'Sem um lugar único para registrar etapas e responsáveis, fica difícil saber o que está pendente.' },
      ],
    },
    solution: {
      title: { lead: 'Um software próprio para', key: 'o seu processo' },
      text: 'Definimos com você as informações, as etapas e as regras do processo e desenvolvemos o sistema a partir delas, começando pelo mais crítico. Na Símtese, organizamos o fluxo de atendimento e de exames ocupacionais. Na LaLouise, o controle de qualidade, validades e rastreabilidade de alimentos para restaurantes. Sistemas como esses podem incluir funções de CRM ou ERP quando o processo pede.',
      caseSlug: 'simtese',
    },
    process: {
      text: 'Começamos pelo processo mais crítico e ampliamos por etapas, sempre com o escopo combinado por escrito.',
      steps: [
        { name: 'Diagnóstico', text: 'Entendemos a rotina, os registros e os responsáveis para definir por qual processo começar.' },
        { name: 'Escopo e proposta', text: 'Delimitamos informações, etapas, permissões, prazo e investimento por escrito, antes de o desenvolvimento começar.' },
        { name: 'Desenvolvimento e entrega', text: 'Desenvolvemos por etapas, validamos com quem usa o sistema e entregamos com o suporte combinado.' },
        { name: 'Evolução', text: 'Novas funções entram depois, conforme a necessidade, sem refazer o que já funciona.' },
      ],
    },
    cta: {
      headline: { lead: 'Qual processo o seu sistema', key: 'precisa organizar?' },
      text: 'Conte como a operação funciona hoje. Indicamos o que faz sentido construir e por onde começar.',
      label: 'Apresentar necessidade',
      message: 'Olá! Vim pela página de sistemas personalizados e gostaria de apresentar a necessidade da minha empresa.',
    },
  },
];
