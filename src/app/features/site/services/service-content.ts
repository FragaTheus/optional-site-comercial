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
  cta: string;
  midCta: { headline: string; text: string };
  about: { title: Heading; paragraphs: string[] };
  applications: { title: Heading; items: Item[] };
  capabilities: Item[];
  contrast: { title: Heading; items: Item[] };
  differentials: Item[];
  projects: { name: string; scope: string }[];
  faq: { q: string; a: string }[];
  links: { slug: ServiceSlug; anchor: string; text: string }[];
}

const COST = 'Depende do escopo, e por isso não trabalhamos com valores de tabela. Prazo e investimento são apresentados depois de entendermos a operação e antes de qualquer desenvolvimento começar.';
const SUPPORT = 'Suporte e manutenção são combinados por escrito antes do início do projeto, e a solução pode evoluir conforme o negócio muda.';
const WRITTEN = { name: 'Combinado por escrito', text: 'Escopo, prazo, investimento e condições de suporte definidos antes de o desenvolvimento começar.' };

export const SERVICES: ServiceContent[] = [
  {
    slug: 'crm',
    label: 'CRM personalizado',
    keyword: 'desenvolvimento de CRM personalizado',
    title: 'Desenvolvimento de CRM personalizado | Optional',
    description: 'Desenvolvimento de CRM personalizado: base de clientes, histórico de atendimento e processo comercial desenhados para a sua operação. Solicite um projeto.',
    h1: { lead: 'Desenvolvimento de', key: 'CRM personalizado' },
    intro: 'Um CRM personalizado organiza clientes, histórico e acompanhamento comercial do jeito que a sua empresa trabalha, em vez de exigir que a equipe se adapte a um sistema pronto. A Optional projeta e desenvolve o CRM a partir do seu processo real.',
    midCta: { headline: 'Quer um CRM desenhado para o seu processo comercial?', text: 'Descreva como os contatos chegam e são acompanhados hoje. Indicamos o que faz sentido construir.' },
    cta: 'Conte como o seu processo comercial funciona hoje. Indicamos o que faz sentido construir e por onde começar.',
    about: {
      title: { lead: 'O que é um', key: 'CRM personalizado' },
      paragraphs: [
        'CRM (gestão de relacionamento com clientes) é o sistema onde ficam os contatos, o histórico de cada interação e as etapas do processo comercial. Em um CRM personalizado, campos, etapas, permissões e relatórios são definidos a partir da operação da empresa, e não de um modelo genérico.',
        'Na prática, é o ponto único de consulta para perguntas simples: quem é este cliente, o que já foi conversado, o que está agendado e qual é o próximo passo.',
      ],
    },
    applications: {
      title: { lead: 'Quando um CRM sob medida', key: 'faz sentido' },
      items: [
        { name: 'Contatos espalhados', text: 'Clientes em planilhas, e-mails e mensagens, com informações que dependem de quem fez o atendimento.' },
        { name: 'Processo comercial próprio', text: 'Etapas, critérios de qualificação ou agendamentos que ferramentas prontas só atendem com adaptações.' },
        { name: 'Equipe que cresce', text: 'Mais de uma pessoa atendendo o mesmo cliente exige histórico compartilhado e responsáveis definidos.' },
        { name: 'Dados vindos de outros lugares', text: 'Contatos de site, formulários e outros sistemas precisam chegar ao CRM sem digitação duplicada.' },
      ],
    },
    capabilities: [
      { name: 'Base de clientes', text: 'Cadastro centralizado de contatos e empresas, com os campos que o seu negócio realmente usa.' },
      { name: 'Histórico e acompanhamento', text: 'Cada interação, tarefa e agendamento registrado e consultável por quem atende.' },
      { name: 'Etapas do processo comercial', text: 'Fluxo desenhado a partir das etapas que a equipe segue, com responsáveis e status.' },
      { name: 'Agendamentos e resultados', text: 'Acompanhamento dos compromissos marcados e do que resultou de cada um.' },
      { name: 'Perfis e permissões', text: 'Cada pessoa vê e altera apenas o que cabe ao seu papel.' },
      { name: 'Integrações', text: 'Conexão com site, formulários, planilhas e outras ferramentas por meio de integrações e automações.' },
      { name: 'Relatórios', text: 'Visões consolidadas definidas com a gestão, a partir dos dados que o sistema registra.' },
    ],
    contrast: {
      title: { lead: 'CRM personalizado', key: 'ou solução pronta?' },
      items: [
        { name: 'Solução pronta', text: 'Tem recursos amplos e começa rápido, mas costuma exigir que o processo se adapte à ferramenta. Custos podem variar conforme usuários e módulos.' },
        { name: 'CRM personalizado', text: 'Parte do processo da empresa. Exige um projeto inicial, em troca de um sistema que reflete a operação e evolui com ela.' },
        { name: 'Quando manter o pronto', text: 'Se um CRM de mercado atende o processo sem adaptações forçadas, ele pode ser a melhor escolha. Quando for o caso, dizemos isso.' },
      ],
    },
    differentials: [
      { name: 'Parte do processo, não de um modelo', text: 'O projeto começa pelo entendimento de como a operação funciona hoje.' },
      { name: 'Integrado ao que já existe', text: 'Sempre que possível, o CRM se conecta às ferramentas atuais em vez de substituí-las.' },
      { name: 'Entrega em etapas', text: 'Validações ao longo do caminho ajustam a solução ao uso real antes da entrega final.' },
      WRITTEN,
    ],
    projects: [{ name: 'Símtese', scope: 'CRM para gestão de agendamentos e acompanhamento de resultados.' }],
    faq: [
      { q: 'Quanto custa desenvolver um CRM personalizado?', a: COST },
      { q: 'Preciso trocar as ferramentas que já uso?', a: 'Não necessariamente. Sempre que possível, o CRM se integra ao que a empresa já utiliza. A troca só é recomendada quando a ferramenta atual é, de fato, o problema.' },
      { q: 'Posso começar por uma parte do CRM?', a: 'Sim. É possível começar pelo essencial, como base de clientes e histórico, e acrescentar módulos conforme o uso.' },
      { q: 'O que acontece depois que o CRM entra no ar?', a: SUPPORT },
    ],
    links: [
      { slug: 'automacoes', anchor: 'automações e integrações', text: 'Conecte o CRM a formulários, planilhas e outros sistemas para que os contatos cheguem sem digitação.' },
      { slug: 'sites', anchor: 'sites comerciais e landing pages', text: 'Leve os contatos dos formulários do site e das páginas de campanha direto para o CRM.' },
      { slug: 'erp', anchor: 'ERP e sistemas de gestão', text: 'Quando o relacionamento precisa conversar com o controle operacional, os dois podem fazer parte do mesmo sistema.' },
    ],
  },
  {
    slug: 'erp',
    label: 'ERP e sistemas de gestão',
    keyword: 'desenvolvimento de ERP personalizado / sistema de gestão sob medida',
    title: 'ERP e sistemas de gestão sob medida | Optional',
    description: 'Desenvolvimento de ERP personalizado e sistemas de gestão: controle operacional, rastreabilidade e dados centralizados a partir da rotina da sua empresa.',
    h1: { lead: 'Desenvolvimento de', key: 'ERP e sistemas de gestão' },
    intro: 'Um sistema de gestão sob medida centraliza os dados e controla os processos da operação do jeito que a empresa realmente trabalha, com rastreabilidade do que aconteceu, quando e com quem. A Optional o desenvolve a partir das rotinas, dos registros e dos controles da sua empresa.',
    midCta: { headline: 'Sua operação pede mais controle e rastreabilidade?', text: 'Conte como os setores trabalham hoje. Indicamos por onde um sistema de gestão pode começar.' },
    cta: 'Conte como a sua operação funciona hoje. Indicamos o que faz sentido construir e por onde começar.',
    about: {
      title: { lead: 'O que é um', key: 'ERP personalizado' },
      paragraphs: [
        'ERP (planejamento de recursos empresariais) é o sistema que reúne, em uma base única, informações e processos de áreas como operação, estoque, compras, financeiro e atendimento. Em um ERP sob medida, entram apenas os módulos e as regras de que a empresa precisa.',
        'Nem toda empresa precisa de um ERP completo. Muitas precisam de um sistema de gestão focado: aquele que controla a operação específica do negócio, com o nível de detalhe que ela exige.',
      ],
    },
    applications: {
      title: { lead: 'Quando um sistema personalizado', key: 'faz sentido' },
      items: [
        { name: 'Operação com regras próprias', text: 'Processos que sistemas de mercado só cobrem com adaptações ou módulos que não se encaixam.' },
        { name: 'Controle em planilhas', text: 'Registros em planilhas separadas, sem histórico confiável nem controle de quem alterou o quê.' },
        { name: 'Necessidade de rastreabilidade', text: 'Quando é preciso saber a origem, o responsável e o histórico de cada registro ou etapa.' },
        { name: 'Setores que não conversam', text: 'Informações de uma área que precisam chegar a outra sem retrabalho.' },
      ],
    },
    capabilities: [
      { name: 'Controle operacional', text: 'Registro e acompanhamento das rotinas do dia a dia, do início à conclusão de cada processo.' },
      { name: 'Rastreabilidade', text: 'Histórico de cada registro: o que mudou, quando e por quem.' },
      { name: 'Centralização de dados', text: 'Uma base única consultada por todos, no lugar de cópias em planilhas.' },
      { name: 'Integração entre setores', text: 'Fluxos que passam a informação de uma área para a seguinte sem digitação duplicada.' },
      { name: 'Processos e permissões', text: 'Etapas, responsáveis, aprovações e perfis de acesso definidos conforme a empresa.' },
      { name: 'Relatórios de gestão', text: 'Indicadores e consultas definidos com a gestão, a partir dos dados registrados.' },
      { name: 'Integrações', text: 'Conexão com outros sistemas e ferramentas que a empresa já utiliza.' },
    ],
    contrast: {
      title: { lead: 'Sistema sob medida', key: 'ou pacote pronto?' },
      items: [
        { name: 'Pacote pronto', text: 'Cobre processos comuns a muitas empresas. Pode exigir personalizações, módulos adicionais ou mudanças na rotina para se encaixar.' },
        { name: 'Sistema sob medida', text: 'Reflete as rotinas da operação e cresce por módulos, conforme a necessidade.' },
        { name: 'Sem construir tudo de uma vez', text: 'O projeto pode começar pelo processo mais crítico e avançar por etapas, sem recomeçar do zero.' },
      ],
    },
    differentials: [
      { name: 'Nasce da rotina real', text: 'O desenho do sistema parte dos registros e dos controles que a operação já pratica.' },
      { name: 'Rastreabilidade desde o início', text: 'O histórico das ações faz parte do desenho, e não um acréscimo posterior.' },
      { name: 'Módulos que evoluem', text: 'A estrutura permite incluir novas funcionalidades sem refazer o que já funciona.' },
      { name: 'Integrado ao que já existe', text: 'Sempre que possível, o sistema se conecta às ferramentas atuais da empresa.' },
    ],
    projects: [{ name: 'LaLouise', scope: 'Sistema de controle operacional com rastreabilidade.' }],
    faq: [
      { q: 'ERP personalizado e sistema de gestão são a mesma coisa?', a: 'O termo ERP costuma descrever sistemas integrados e abrangentes. "Sistema de gestão" é mais amplo e pode ser um sistema focado em uma operação específica. Em ambos os casos, o escopo é definido a partir da necessidade da empresa.' },
      { q: 'Preciso de um ERP completo desde o início?', a: 'Não. Muitos projetos começam pelo processo mais crítico e evoluem em etapas. Cada etapa só entra quando faz sentido para o negócio.' },
      { q: 'Quanto custa e quanto tempo leva?', a: COST },
      { q: 'O sistema se integra às ferramentas que já uso?', a: 'Sempre que possível, sim. A viabilidade de cada integração é avaliada na conversa inicial, conforme os recursos que cada ferramenta oferece.' },
    ],
    links: [
      { slug: 'crm', anchor: 'CRM personalizado', text: 'Para organizar clientes e processo comercial, o CRM pode ser o primeiro módulo ou um sistema à parte.' },
      { slug: 'automacoes', anchor: 'automações e integrações', text: 'Conecte o sistema de gestão às ferramentas que continuam em uso e elimine a cópia manual entre elas.' },
    ],
  },
  {
    slug: 'automacoes',
    label: 'Automações e integrações',
    keyword: 'automação de processos empresariais / integração de sistemas',
    title: 'Automação de processos e integração de sistemas | Optional',
    description: 'Automação de processos empresariais e integração de sistemas sob medida: reduza tarefas repetitivas e faça as ferramentas da empresa trocarem dados sozinhas.',
    h1: { lead: 'Desenvolvimento de', key: 'automações e integrações' },
    intro: 'Automações e integrações conectam as ferramentas que a empresa já usa e assumem as tarefas repetitivas entre elas: copiar dados, conferir planilhas, repetir lançamentos, avisar a equipe. A Optional desenvolve essas rotinas sob medida para a sua operação.',
    midCta: { headline: 'Tem tarefas repetidas que ocupam a equipe?', text: 'Liste as rotinas e as ferramentas envolvidas. Avaliamos o que pode ser automatizado.' },
    cta: 'Conte quais tarefas se repetem na sua rotina. Avaliamos o que pode ser automatizado e o que vale revisar antes.',
    about: {
      title: { lead: 'O que é', key: 'automação de processos' },
      paragraphs: [
        'Automação é fazer um sistema executar sozinho uma tarefa que hoje depende de uma pessoa, seguindo regras definidas, sem digitação manual. Integração é a conexão entre sistemas para que troquem informações automaticamente, em vez de a equipe ser a ponte entre eles.',
        'Os benefícios plausíveis são menos retrabalho, menos erros de digitação e informação atualizada onde ela é consultada. A dimensão do ganho depende do processo e é avaliada caso a caso, antes do projeto.',
      ],
    },
    applications: {
      title: { lead: 'Processos que costumam ser', key: 'automatizáveis' },
      items: [
        { name: 'Entrada de contatos', text: 'Formulários e landing pages que enviam os dados direto ao CRM ou à planilha de controle, sem cópia manual.' },
        { name: 'Sincronização de dados', text: 'Um cadastro atualizado em um sistema refletido automaticamente nos demais.' },
        { name: 'Avisos e notificações', text: 'Alertas à equipe quando algo acontece: novo pedido, prazo próximo, pendência em aberto.' },
        { name: 'Documentos e relatórios', text: 'Relatórios e documentos montados a partir dos dados, em vez de compilados à mão.' },
        { name: 'Conferência de registros', text: 'Regras que verificam dados e apontam inconsistências antes de virarem problema.' },
      ],
    },
    capabilities: [
      { name: 'Integração entre sistemas', text: 'Conexão com ferramentas que oferecem API, webhooks ou outro meio de integração.' },
      { name: 'Fluxos com regras', text: 'Condições, etapas e exceções definidas conforme o processo da empresa.' },
      { name: 'Rotinas agendadas', text: 'Tarefas executadas em horários definidos ou disparadas por eventos.' },
      { name: 'Tratamento de dados', text: 'Ajuste de formatos e validações para que os sistemas entendam as informações uns dos outros.' },
      { name: 'Registro e tratamento de falhas', text: 'Erros registrados e sinalizados, em vez de passarem despercebidos.' },
      { name: 'Monitoramento e manutenção', text: 'Acompanhamento e ajustes quando um sistema integrado muda.' },
    ],
    contrast: {
      title: { lead: 'Quando vale', key: 'automatizar' },
      items: [
        { name: 'Vale automatizar', text: 'Tarefas frequentes, baseadas em regras claras e com dados já em formato digital.' },
        { name: 'Vale revisar antes', text: 'Processos ainda indefinidos ou que mudam toda semana. Automatizar um processo confuso só acelera a confusão.' },
        { name: 'Conectores prontos ou sob medida', text: 'Ferramentas prontas de conexão resolvem integrações simples. O desenvolvimento sob medida se justifica com regras próprias, volume ou necessidade de controle e registro.' },
      ],
    },
    differentials: [
      { name: 'Mapeamento antes de automatizar', text: 'O processo é entendido e, se preciso, simplificado antes de virar automação.' },
      { name: 'Falhas visíveis', text: 'Cada execução é registrada, e erros são sinalizados para quem pode corrigi-los.' },
      { name: 'Implantação gradual', text: 'Começamos por um fluxo, validamos no uso real e só então ampliamos.' },
      { name: 'Manutenção combinada', text: 'Integrações dependem de sistemas externos, por isso o acompanhamento é definido antes de o projeto começar.' },
    ],
    projects: [],
    faq: [
      { q: 'O que pode ser automatizado na minha empresa?', a: 'Em geral, tarefas repetitivas, baseadas em regras claras e com dados em formato digital. A viabilidade é avaliada em uma conversa sobre o processo.' },
      { q: 'Preciso trocar os sistemas que uso?', a: 'Não. O objetivo é conectar o que já existe. A troca só é recomendada quando uma ferramenta impede a integração ou é, de fato, o problema.' },
      { q: 'O que acontece se um sistema integrado mudar?', a: 'Integrações dependem de serviços externos que podem mudar. Por isso a manutenção e o monitoramento são combinados antes do início do projeto.' },
      { q: 'Quanto custa e quanto tempo leva?', a: COST },
    ],
    links: [
      { slug: 'crm', anchor: 'CRM personalizado', text: 'Contatos de site e formulários chegam ao CRM automaticamente, com histórico desde o primeiro registro.' },
      { slug: 'erp', anchor: 'ERP e sistemas de gestão', text: 'Para quem precisa de um sistema central que receba e organize os dados das integrações.' },
      { slug: 'sites', anchor: 'sites comerciais e landing pages', text: 'Cada conversão de campanha pode seguir direto para as ferramentas da equipe.' },
    ],
  },
  {
    slug: 'sites',
    label: 'Sites comerciais',
    keyword: 'desenvolvimento de sites e landing pages',
    title: 'Desenvolvimento de sites e landing pages | Optional',
    description: 'Desenvolvimento de sites comerciais e landing pages sob medida, com SEO técnico, desempenho, conteúdo claro e páginas de campanha alinhadas à sua oferta.',
    h1: { lead: 'Desenvolvimento de', key: 'sites e landing pages' },
    intro: 'A presença digital precisa apresentar o trabalho da empresa, responder a quem pesquisa e apoiar campanhas específicas. Desenvolvemos sites comerciais e páginas de campanha com conteúdo, estrutura e tecnologia alinhados à operação e à intenção de busca.',
    midCta: { headline: 'Sua presença digital explica com clareza o que a empresa oferece?', text: 'Conte como os clientes encontram a empresa e o que precisam entender antes de entrar em contato.' },
    cta: 'Conte como os clientes chegam até a empresa e o que precisam encontrar. Indicamos como estruturar essa presença digital.',
    about: {
      title: { lead: 'Uma presença digital para', key: 'busca e campanhas' },
      paragraphs: [
        'A estrutura pode reunir páginas institucionais, páginas de serviços e páginas focadas em uma oferta ou campanha. Cada conteúdo responde a uma intenção e ajuda o visitante a entender o que a empresa faz e qual é o próximo passo.',
        'Sites comerciais e landing pages fazem parte da mesma presença digital. Definimos a arquitetura, a apresentação e a mensuração conforme o público, as buscas relevantes e a ação que a operação precisa apoiar.',
      ],
    },
    applications: {
      title: { lead: 'Onde a presença digital', key: 'faz diferença' },
      items: [
        { name: 'Apresentação institucional e comercial', text: 'Para explicar a empresa, seus serviços, sua região de atuação e como iniciar uma conversa.' },
        { name: 'Páginas de serviços', text: 'Para responder a buscas específicas e detalhar o que a empresa oferece a cada público.' },
        { name: 'Campanhas e ofertas', text: 'Para concentrar as informações de uma oferta, responder dúvidas e orientar o visitante até uma ação.' },
        { name: 'Presença digital a atualizar', text: 'Quando o conteúdo, a experiência ou a base técnica já não acompanham o trabalho da empresa.' },
      ],
    },
    capabilities: [
      { name: 'Arquitetura de conteúdo', text: 'Páginas, títulos e navegação organizados pelas dúvidas e buscas dos públicos da empresa.' },
      { name: 'SEO técnico', text: 'HTML semântico, metadados, canonical, dados estruturados, sitemap e conteúdo renderizado.' },
      { name: 'Conteúdo de campanha', text: 'Estrutura da oferta, respostas a dúvidas e chamadas para ação coerentes com o objetivo da página.' },
      { name: 'Mensuração', text: 'Eventos e parâmetros de campanha definidos com as ferramentas de análise que a empresa utiliza.' },
      { name: 'Performance, responsividade e acessibilidade', text: 'Leitura e navegação cuidadosas em diferentes telas, com carregamento otimizado e acesso por teclado.' },
      { name: 'Captação e integração', text: 'Pontos de contato claros e envio de formulários para CRM, e-mail ou outras ferramentas, quando disponíveis.' },
      { name: 'Manutenção e evolução', text: 'Ajustes e novas páginas conforme combinado no início do projeto.' },
    ],
    contrast: {
      title: { lead: 'Uma presença,', key: 'diferentes estruturas' },
      items: [
        { name: 'Apresentação da empresa', text: 'Páginas que organizam a atuação, os serviços, a região e os canais de contato.' },
        { name: 'Página de campanha', text: 'Conteúdo concentrado em uma oferta, com dúvidas frequentes, ação clara e mensuração prevista.' },
        { name: 'Continuidade', text: 'A linguagem, a identidade e os caminhos de contato permanecem coerentes em toda a presença digital.' },
      ],
    },
    differentials: [
      { name: 'Busca e experiência alinhadas', text: 'Conteúdo útil para quem pesquisa, com caminho claro para o próximo passo.' },
      { name: 'Desenvolvido sob medida', text: 'A estrutura e o visual partem da identidade, da oferta e do público da empresa.' },
      { name: 'Medição planejada', text: 'Páginas de campanha podem incluir eventos e parâmetros definidos antes de entrar no ar.' },
      WRITTEN,
    ],
    projects: [
      { name: 'Caldeiraria Realiza', scope: 'Site comercial.' },
      { name: 'Paulo Carvalho', scope: 'Site profissional.' },
      { name: 'Profissão do Século', scope: 'Landing page.' },
    ],
    faq: [
      { q: 'Vocês desenvolvem landing pages?', a: 'Sim. Páginas de campanha podem fazer parte do mesmo projeto de presença digital, com conteúdo focado na oferta, caminho de contato e mensuração definidos para cada objetivo.' },
      { q: 'O que a presença digital precisa ter?', a: 'Conteúdo claro sobre a empresa e seus serviços, páginas organizadas por intenção, contato visível, bom desempenho em celulares e uma base técnica correta para buscadores.' },
      { q: 'A estrutura garante posições no Google ou conversões?', a: 'Não. A base técnica e a clareza do conteúdo ajudam a preparar a presença digital, mas posições e conversões dependem de fatores como concorrência, oferta, público e distribuição.' },
      { q: 'Vocês fazem manutenção e evolução?', a: SUPPORT },
      { q: 'Quanto custa e quanto tempo leva?', a: COST },
    ],
    links: [
      { slug: 'automacoes', anchor: 'automações e integrações', text: 'Os contatos recebidos pelo site podem ir direto para o CRM ou para a planilha da equipe.' },
      { slug: 'crm', anchor: 'CRM personalizado', text: 'Para acompanhar cada contato do primeiro formulário ao fechamento.' },
    ],
  },
];
