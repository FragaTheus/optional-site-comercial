/** Título com palavras-chave em destaque: `lead` + <strong>`key`</strong> + `tail`. */
export interface PromotionHeading {
  lead: string;
  key: string;
  tail?: string;
}

export interface PromotionPlan {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
}

export interface PromotionTerm {
  title: string;
  text: string;
  small?: string;
}

export interface PromotionContent {
  slug: string;
  campaign: string;
  /** Fim da validade (ISO 8601). Depois dela a página fica `noindex` e exibe aviso de encerramento. */
  expiresAt: string;
  expiredNotice: string;
  seo: { title: string; description: string; image?: string };
  /** Fluxo único de conversão (WhatsApp) usado por todos os CTAs principais. */
  cta: { label: string; small: string; message: string };
  hero: { eyebrow: string; heading: PromotionHeading; offer: { lead: string; price: string }; condition: string };
  consequences: { heading: PromotionHeading; summary: string; items: string[] };
  solution: { heading: PromotionHeading; video: { src: string }; benefits: string[] };
  transformation: { heading: PromotionHeading; secondary: { label: string; href: string } };
  offer: {
    heading: PromotionHeading;
    plans: PromotionPlan[];
    includedTitle: string;
    included: string[];
    termsTitle: string;
    terms: PromotionTerm[];
    journeyTitle: string;
    journey: { title: string; text: string }[];
  };
  faq: { heading: PromotionHeading; items: { question: string; answer: string }[] };
  closing: { heading: PromotionHeading };
}

// Promoções publicadas em /promocoes/:slug. Para uma nova campanha, basta acrescentar um item (layout, rotas e SEO são reaproveitados).
export const PROMOTIONS: PromotionContent[] = [
  {
    slug: 'black-friday',
    campaign: 'Black Friday Optional',
    expiresAt: '2026-11-30T23:59:59-03:00',
    expiredNotice: 'Esta campanha foi encerrada. Fale com a Optional para conhecer as condições atuais.',
    seo: {
      title: 'Black Friday: site para MEI a partir de R$ 280 | Optional',
      description:
        'Site comercial de uma página para MEIs prestadores de serviços, a partir de R$ 280 na Black Friday. Pagamento único e pós-pago, sem mensalidade da Optional.',
    },
    cta: {
      label: 'Solicitar meu conceito',
      small: 'Sem compromisso',
      message: 'Olá! Vim pela Black Friday da Optional e gostaria de solicitar meu conceito.',
    },
    hero: {
      eyebrow: 'Black Friday Optional',
      heading: { lead: 'Pare de perder tempo com contatos que nem sabem o que', key: 'você oferece.' },
      offer: { lead: 'Sites comerciais a partir de', price: 'R$ 280' },
      condition: 'Pagamento único. Sem mensalidade da Optional.',
    },
    consequences: {
      heading: { lead: 'Seu trabalho para quando', key: 'você responde o básico.' },
      summary:
        'Cada pergunta repetida e cada orçamento fora do perfil tiram o foco do serviço e consomem o tempo que poderia ir para quem já sabe o que você faz.',
      items: [
        'Você interrompe o serviço para responder sempre às mesmas perguntas.',
        'Recebe orçamentos para serviços que nem oferece.',
        'O cliente compara preços sem conhecer seu trabalho.',
      ],
    },
    solution: {
      heading: { lead: 'Seu site explica', key: 'seus serviços', tail: 'antes de você atender.' },
      video: { src: '/promotions/lp-black-friday.mp4' },
      benefits: [
        'Mostre quais serviços você oferece e onde atende.',
        'Esclareça dúvidas sobre pagamentos e funcionamento.',
        'Apresente seus trabalhos e avaliações antes do orçamento.',
      ],
    },
    transformation: {
      heading: { lead: 'Menos tempo respondendo dúvidas. Mais', key: 'clientes preparados para conversar.' },
      secondary: { label: 'Conhecer a Optional', href: '/' },
    },
    offer: {
      heading: { lead: 'Seu site, seu investimento.', key: 'Sem mensalidades.' },
      plans: [
        { name: 'Essencial', price: 'R$ 280', description: 'Site comercial de uma página com 4 seções.' },
        { name: 'Profissional', price: 'R$ 340', description: 'Site comercial de uma página com 6 seções.', featured: true },
        { name: 'Completo', price: 'R$ 400', description: 'Site comercial de uma página com 8 seções.' },
      ],
      includedTitle: 'Incluso em todos os pacotes',
      included: [
        'Site comercial de uma única página.',
        'Copywriting do conteúdo comercial.',
        'Layout responsivo.',
        'Planejamento de conteúdo orientado à qualificação de clientes.',
        'SEO técnico básico, com palavras-chave ligadas à intenção de busca.',
        'Configurações pertinentes para descoberta no Google.',
        'Publicação do projeto.',
        'Projeto seu após o pagamento, conforme as condições de entrega e as licenças aplicáveis.',
      ],
      termsTitle: 'Prazos e condições',
      terms: [
        {
          title: 'Entrega inicial',
          text: 'Seu site publicado em até 1 dia útil após o fechamento da proposta.',
          small: 'Considera o recebimento das informações e dos materiais necessários. Prazo igual nos três pacotes.',
        },
        {
          title: 'Alterações',
          text: '48 horas após a entrega inicial para solicitar alterações em textos, imagens, informações comerciais, organização dos conteúdos, ajustes visuais e adequações ao conceito aprovado.',
          small: 'A janela começa quando a entrega inicial é disponibilizada. Pedidos que adicionem funcionalidades ou ampliem o escopo contratado são avaliados separadamente.',
        },
        {
          title: 'Previsão de conclusão',
          text: 'Alinhamento final em aproximadamente 3 dias úteis.',
          small: 'É uma previsão, não uma garantia: depende do envio das informações, do retorno dentro das 48 horas (que podem incluir fins de semana e feriados) e de alterações que não ampliem significativamente o escopo.',
        },
        {
          title: 'Pagamento',
          text: 'Pagamento único e pós-pago, realizado após a publicação do projeto, conforme as condições acordadas.',
          small: 'O prazo de revisão não altera o momento do pagamento. Fechada a proposta, as condições contratuais já se aplicam.',
        },
        {
          title: 'Domínio e infraestrutura',
          text: 'Domínio ".br" com custo de referência de R$ 40 por ano, contratado separadamente do pacote.',
          small: 'Os reajustes são definidos pelo registrador responsável, não pela Optional. Hospedagem e outros fornecedores, se houver, são informados separadamente.',
        },
        {
          title: 'Atualização anual',
          text: 'A Optional oferece uma atualização anual do projeto, para o site acompanhar a evolução do negócio.',
          small: 'Segue as condições e o escopo previstos na contratação. Ampliações fora do escopo original podem exigir novo orçamento.',
        },
        {
          title: 'Propriedade do projeto',
          text: 'Após o pagamento, o projeto entregue pertence a você, sem assinatura de desenvolvimento obrigatória com a Optional.',
          small: 'Respeitadas as condições de entrega e as licenças de dependências e recursos de terceiros.',
        },
        {
          title: 'SEO e Google',
          text: 'Títulos, descrições, estrutura de títulos, SEO on-page, indexabilidade, sitemap e orientação para solicitar a indexação, quando pertinentes.',
          small: 'Publicar e configurar o SEO não garante indexação imediata nem posições específicas no Google.',
        },
      ],
      journeyTitle: 'Da contratação ao alinhamento final',
      journey: [
        { title: 'Contratação', text: 'Aprovação e fechamento da proposta.' },
        { title: 'Entrega inicial', text: 'Publicação do site em até 1 dia útil.' },
        { title: 'Revisão', text: 'Você tem 48 horas para analisar o projeto e solicitar alterações.' },
        { title: 'Alinhamento final', text: 'A Optional realiza os ajustes pertinentes ao escopo aprovado.' },
      ],
    },
    faq: {
      heading: { lead: 'Dúvidas sobre', key: 'seu site', tail: 'e a contratação.' },
      items: [
        { question: 'Vou precisar pagar mensalidade?', answer: 'Não. O desenvolvimento é contratado por um pagamento único, sem mensalidade obrigatória com a Optional. Domínio e eventuais custos de infraestrutura são separados.' },
        { question: 'Em quanto tempo meu site fica pronto?', answer: 'A entrega inicial acontece em até 1 dia útil após o fechamento da proposta, considerando que as informações necessárias estejam disponíveis.' },
        { question: 'Posso pedir alterações depois da entrega?', answer: 'Sim. Você terá 48 horas após a entrega inicial para analisar o site e solicitar ajustes dentro do escopo contratado.' },
        { question: 'Quando o projeto estará totalmente alinhado?', answer: 'Se tudo ocorrer conforme o esperado, a previsão é concluir a entrega e os ajustes em aproximadamente 3 dias úteis.' },
        { question: 'Preciso pagar antes de receber o site?', answer: 'Não. O pagamento é pós-pago e realizado após a publicação, conforme as condições acordadas na contratação.' },
        { question: 'O site será meu?', answer: 'Sim. Após o pagamento, o projeto entregue pertence a você, conforme os termos de entrega e as licenças aplicáveis.' },
        { question: 'Meu site poderá evoluir junto com minha empresa?', answer: 'Sim. O site poderá receber novas informações, seções e funcionalidades conforme o negócio evoluir. Ampliações fora do escopo original poderão exigir novo orçamento.' },
        { question: 'A Optional continuará atualizando meu site?', answer: 'A Optional oferece uma atualização anual do projeto, conforme as condições e o escopo previstos na contratação.' },
        { question: 'Quanto custa manter o site no ar?', answer: 'O domínio ".br" tem custo de referência de R$ 40 anuais, sujeito a reajustes do registrador. Eventuais custos de hospedagem e serviços adicionais devem ser informados separadamente.' },
        { question: 'Meu site aparecerá no Google?', answer: 'O site será publicado com boas práticas de SEO e preparado para indexação. A posição nos resultados e o tempo de indexação dependem do Google.' },
      ],
    },
    closing: {
      heading: { lead: 'Veja como seu negócio pode ser apresentado em', key: 'uma página própria.' },
    },
  },
];
