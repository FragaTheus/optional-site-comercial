# Copywriting, direção editorial e SEO — Optional

Documento normativo e **fonte de verdade de toda a comunicação comercial** da Optional. (O nome `copyright.md` é histórico: o arquivo trata de copywriting, direção editorial, SEO semântico e conversão, não de direitos autorais.) Toda cópia nova ou revisada, em qualquer página, segue este documento; as skills e as instruções globais o consultam obrigatoriamente.

## 1. Princípios

A Optional desenvolve **software e infraestrutura digital sob medida** para empresas (CRM, ERP e sistemas de gestão, automações e integrações, sites comerciais e landing pages como formatos de uma mesma frente de presença digital). Não é agência de marketing, nem currículo individual.

**Tom de voz:** premium, minimalista, direto, provocativo, profissional, confiante, objetivo, orientado a problemas reais. Pode ser incisivo ao nomear o problema; nunca sensacionalista nem condescendente.

**Proibido:** promessas garantidas; urgência falsa; estatísticas, métricas, resultados ou depoimentos inventados; promessa de aumento de vendas ou faturamento sem evidência; jargão em excesso; frases genéricas de marketing; linguagem exageradamente publicitária; posicionar a Optional como agência de marketing; garantir posições em buscadores.

**Formato:** headlines em caixa normal (o CSS aplica uppercase) com 1–3 palavras-chave em `<strong>`; sem uppercase manual em textos corridos e botões; frases curtas; um argumento por bloco; texto de apoio de uma ou duas frases.

**Provas:** só o que está validado. Projetos de referência (ver §7) são descritos apenas pelo tipo de entrega e escopo confirmados.

## 2. Duas estratégias, duas funções

| | **A — Homepage** | **B — Páginas satélites** |
|---|---|---|
| Função | Construir interesse, posicionamento e confiança | Capturar busca orgânica e converter |
| Lógica | Narrativa editorial progressiva | Resposta direta à intenção de busca |
| Seções | Encadeadas: cada uma desenvolve a anterior | Independentes e consultáveis: o visitante vai direto ao que procura |
| Texto | Minimalista, provocativo, pouco volume | Informativo, específico, profundidade proporcional ao serviço |
| SEO | Marca e posicionamento | Palavra-chave, intenção, termos relacionados, FAQ, dados estruturados |
| Estrutura | Fixa (§3) | Recomendada (§4), adaptável ao conteúdo |

Regra de ouro: **não aplicar storytelling nas satélites e não aplicar estrutura de FAQ/SEO extensa na homepage.** Não repetir o mesmo texto entre homepage e satélites nem entre satélites.

## 3. Estratégia A — Homepage (narrativa progressiva)

Objetivo: despertar interesse → criar identificação → questionar soluções inadequadas → apresentar as soluções → demonstrar diferenciação → construir autoridade → conduzir à conversão.

Cada seção responde ou desenvolve o argumento da anterior. Seção que não tem função na cadeia **não existe** (por isso foram removidas "De landing page a ERP", "Estrutura, não improviso" e o FAQ "Como trabalhamos").

| # | Seção | Papel | Mensagem-chave | Prepara a próxima porque… |
|---|---|---|---|---|
| 1 | Hero ✅ final | Posicionamento | "Infraestrutura Digital para aumentar a eficiência da sua empresa." Sistemas e automações de acordo com a operação, para reduzir custos, aumentar a produtividade e contribuir com a aquisição de novos clientes | leva ao `#atuacao` (Entender atuação) |
| 2 | Introdução às soluções | Atuação | Quatro frentes comerciais com links para suas páginas: Qualificação comercial, Gestão de relacionamento, Automações de processo e Organização operacional | leva à seção Sobre (`#sobre`) |
| 3 | Introdução aos cases | Evidências | Destaques de LaLouise e Símtese, com links individuais | leva às soluções (`#atuacao`) |
| 4 | Sobre a Optional | Abordagem | Apresentação institucional e diferenciais | prepara a conversa |
| 5 | Contato | Próximo passo | "Agora, vamos falar da sua operação." | fecha a narrativa |

A homepage é o único hub; não existem `/servicos` nem `/cases`. A navegação permite acessar diretamente as páginas detalhadas.

### Conteúdo anterior: Hero e Objeções

O hero permanece na homepage; a seção de objeções foi migrada para `features/site/services-hub/sections/objections`.

**1. Hero** (`#home-hero`)
- Eyebrows: "Est. 2025 // SP" e "Studio de Engenharia de Software".
- H1: **Infraestrutura Digital** para aumentar a **eficiência** da sua **empresa.**
- Apoio: "Sistemas e automações de acordo com sua operação para reduzir custos, aumentar a produtividade e contribuir com a aquisição de novos clientes."
- CTA único: "Entender atuação" (âncora `#atuacao`, `btn-secondary`).
- Minimalista: tipografia e espaço negativo, sem imagens.

**2. Objeções** (`#atuacao`)
- H2: Onde a **tecnologia** faz a **diferença**.
- Três cards numerados (`card-primary`, rolagem horizontal no mobile):
  - 01 **Custos**: "Erros e retrabalho aumentam os custos da operação e comprometem sua margem de lucro."
  - 02 **Produtividade**: "Tarefas manuais e repetitivas consomem tempo e limitam a capacidade da sua equipe."
  - 03 **Experiência**: "Seu site não acompanha a evolução da empresa nem transmite a qualidade dos serviços."
- Fecho em bloco escuro: "Sua **empresa enfrenta** um desses **desafios?**" + CTA "Vamos conversar" (mensagem de WhatsApp: "Olá! Gostaria de falar sobre os desafios que minha empresa enfrenta.").


Regras da homepage:
- A ordem das quatro frentes (qualificação comercial → gestão de relacionamento → automações de processo → organização operacional) é apenas narrativa, **não** uma evolução obrigatória; cada frente pode ser contratada individualmente. Sites e landing pages fazem parte da mesma frente de qualificação comercial.
- Objeções não são FAQ: sem acordeão, sem pergunta/resposta; o visitante se reconhece. Sem ícones decorativos.
- Sem FAQ extenso. Dúvidas úteis para busca vão para as satélites.
- Sem botão flutuante de WhatsApp; sem formulários ou integrações inventados (`CONTACT_URL` em `core/site.config.ts` é o fluxo de contato, ainda pendente).
- Hero minimalista: tipografia, espaço negativo e hierarquia; sem imagens.

## 4. Estratégia B — Páginas satélites (SEO e intenção de busca)

Prioridades, nesta ordem: (1) responder à intenção de busca; (2) explicar claramente o serviço; (3) demonstrar aplicações; (4) apresentar funcionalidades e capacidades; (5) esclarecer diferenciais; (6) responder dúvidas relevantes; (7) criar links internos; (8) conduzir à conversão.

**Estrutura recomendada** (implementada em `features/site/services/`, uma seção por componente; ajustar quando o conteúdo pedir):

1. H1 alinhado ao serviço + introdução objetiva + CTA (`sections/hero`)
2. Explicação do serviço e comparação com a alternativa mais buscada (`about`)
3. Principais aplicações / quando faz sentido (`applications`)
4. Funcionalidades e capacidades (`capabilities`)
5. Diferenciais da Optional (`differentials`)
6. Projetos relacionados (somente validados) e serviços complementares (`related`)
7. Dúvidas relevantes, em `details` nativos (`faq`)
8. CTA comercial (`cta`, expõe `#contato`)

Regras: conteúdo original por página; sem keyword stuffing; sem texto genérico para "encher"; listas quando facilitam a leitura; um único H1, H2 por seção, H3 por item; links internos contextuais com âncora descritiva e só quando fizerem sentido; FAQ só com perguntas reais da intenção de busca; benefícios sempre "plausíveis" e condicionados ao processo ("reduz retrabalho", nunca "triplica vendas"); nenhuma garantia de posição no Google nem de conversão.

**Técnico obrigatório:** title e meta description exclusivos; canonical; Open Graph; HTML semântico; JSON-LD (`Service`, `FAQPage`, `BreadcrumbList`) apenas com dados reais; presença em `public/sitemap.xml`; conteúdo prerenderizado (SSR `RenderMode.Prerender`); acessibilidade e performance. Title ~50–60 caracteres; description ~140–160.

## 5. Estratégia SEO por página (hipóteses a validar)

Nenhum volume de busca, dificuldade ou posição é conhecido: as palavras-chave abaixo são **hipóteses fundamentadas** e devem ser validadas em ferramenta de pesquisa (Search Console, Planejador de Palavras-chave) antes de qualquer ajuste. Não registrar números sem fonte.

| Slug | Palavra-chave candidata | Intenção | Termos relacionados | Público | CTA |
|---|---|---|---|---|---|
| `/servicos/crm` | desenvolvimento de CRM personalizado | Comercial: contratar desenvolvimento | CRM sob medida, CRM personalizado, sistema de gestão de clientes, gestão de relacionamento | Empresas com processo comercial próprio, equipe comercial em crescimento | Apresentar projeto |
| `/servicos/erp` | desenvolvimento de ERP personalizado / sistema de gestão sob medida | Comercial | ERP sob medida, sistema de gestão personalizado, controle operacional, rastreabilidade | Empresas com operação própria e controles em planilhas | Apresentar projeto |
| `/servicos/automacoes` | automação de processos empresariais | Comercial e informacional | integração de sistemas, automação de tarefas repetitivas, integração entre ferramentas | Empresas com retrabalho entre ferramentas | Apresentar projeto |
| `/servicos/sites` | desenvolvimento de sites e landing pages | Comercial | site institucional, site comercial, criação de site para empresas, landing page para campanhas, página de conversão | Empresas de serviços, B2B, profissionais e empresas com ofertas de campanha | Apresentar projeto |

Dúvidas relevantes, proposta de valor, conteúdo e links internos de cada página estão em `src/app/features/site/services/service-content.ts` (fonte única do conteúdo das satélites). A página `/servicos/sites` reúne a presença institucional/comercial e páginas de campanha; landing pages são abordadas como formato de conteúdo, não como frente ou destino independente. Links complementares: CRM↔automações/sites, ERP↔automações, sites↔CRM/automações.

URLs: `/servicos/<slug>` (`crm`, `erp`, `automacoes`, `sites`). Slugs ficam em `SERVICE_LINKS` (`core/site.config.ts`), que alimenta rotas, footer e links. A rota antiga `/servicos/landing-pages` foi removida sem alias ou redirecionamento, por decisão explícita do projeto; novas alterações de URLs devem manter o redirecionamento 301 como regra geral.

## 6. Checklist de revisão de copy

- A seção cumpre seu papel na estratégia (A ou B)?
- Na homepage: continua o argumento da anterior e prepara a próxima?
- Nas satélites: responde à intenção de busca já no H1 e na introdução?
- Tom premium e direto, sem promessa garantida, urgência, número ou depoimento inventado?
- Palavras-chave dos headings em `<strong>`; um H1 por página?
- Title/description exclusivos, canonical, links internos reais com âncora descritiva?

## 7. Projetos de referência (validado)

| Projeto | Entrega validada | Serviço |
|---|---|---|
| Símtese | CRM para gestão de agendamentos e acompanhamento de resultados | CRM |
| LaLouise | Sistema de controle operacional com rastreabilidade | ERP / gestão |
| Caldeiraria Realiza | Site comercial | Sites |
| Paulo Carvalho | Site profissional | Sites |
| Profissão do Século | Landing page | Landing pages |

Hoje não há problema, solução, contribuição ou funcionalidades documentados além disso: **não inventar**. Quando houver validação (e autorização para divulgar marca/dados), estender cada case com: problema ou necessidade → solução desenvolvida → contribuição efetiva → funcionalidades entregues. Métricas só com documentação. Tom de autoridade empresarial, nunca currículo pessoal.

## 8. Pendências

- Definir o domínio definitivo (`SITE_URL`, `public/sitemap.xml`, `public/robots.txt`); hoje usa o domínio de deploy atual, provisório.
- Definir o canal real de contato (`CONTACT_URL`).
- Validar palavras-chave (§5) e expandir os cases (§7).
