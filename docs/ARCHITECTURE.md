# Arquitetura — Optional

## Estado atual (verificado na inspeção)

Angular 22.2 e Tailwind CSS 4.3 (v4, CSS-first), com SSR + prerendering habilitados (`RenderMode.Prerender` em `**`). Implementados: `core/` (`seo.ts`, `site.config.ts`, `gsap.ts`), `shared/directives/reveal.ts`, `layouts/main-layout`, `features/site/home` (hero, objections, services, showcase, cases, closing) e `features/site/services` (páginas satélites). **Não implementados**: `features/concepts`. Pendentes em `site.config.ts`: `CONTACT_URL` (canal de contato) e `SITE_URL` definitivo (hoje o domínio de deploy, provisório; trocar também em `public/sitemap.xml` e `public/robots.txt`).

## Estrutura Angular pretendida

Orientada a features; ajustar nomes às convenções da versão instalada e não reorganizar código funcional só para reproduzir a árvore.

```
src/app/
  core/                 serviços singleton, SEO/metadados, configuração
  layouts/
    main-layout/        header/ e footer/ (componentes), <router-outlet>
  shared/
    components/         somente componentes comportamentais reutilizáveis, incluindo menu/drawer
  features/
    site/               presença comercial pública (indexável)
    concepts/           conceitos personalizados para prospects (noindex)
```

## features/site

Páginas nunca ficam em um único arquivo: cada página é um componente de página (`<nome>-page-component.ts/.html`) que apenas compõe seções, define SEO e orquestra animações; cada seção fica em um componente próprio, **em uma pasta própria** dentro de `sections/` (`sections/<nome>/<nome>-section-component.ts/.html`), com seus dados e imports. Exemplo: `features/site/home/home-page-component.*` + `features/site/home/sections/hero/hero-section-component.*`.

Homepage, páginas satélites de serviços (CRM, ERP/gestão, automações, landing pages, sites comerciais), projetos e cases, conteúdo comercial, SEO, metadados, CTAs. Páginas indexáveis e otimizadas.

### Hubs

`services-hub/` compõe a página `/servicos`, incluindo as antigas seções de objeções, serviços e abordagem. `cases-hub/` compõe `/cases` e apresenta cada entrada de `CASES` com links para suas páginas. A homepage resume as duas áreas e aponta para os hubs. As imagens abstratas da homepage e da lista de cases são provisórias.

### Páginas satélites

`features/site/services/`: um único `service-page-component` (rota `servicos/:slug`, uma rota estática por serviço gerada de `SERVICE_LINKS`, para o prerender descobrir cada URL) escolhe o conteúdo em `service-content.ts` pelo `slug` em `route.data` e compõe as seções em `sections/` (hero, about, applications, capabilities, differentials, related, faq, cta). Novo serviço = nova entrada em `SERVICE_LINKS` e `SERVICES`. Estratégia de conteúdo: `docs/copyright.md`.

### Cases

`features/site/cases/`: `case-page-component` compõe hero, problema, solução e CTA. `case-content.ts` concentra conteúdo, link para o serviço, endereço do projeto, imagem de hero e imagens opcionais. As rotas estáticas `/cases/:slug` são geradas de `CASES` para prerender. Para adicionar um case, incluir seus dados em `CASES`, atualizar o sitemap e, quando pertinente, `caseSlug` na seção de serviços do hub. Revisar textos, direitos de uso e dados visíveis nas imagens antes de publicar; requisitos e metas não são resultados comprovados.

## features/concepts

Rota `/concept/:slug`, layout independente, identidade visual própria possível, conteúdo/interfaces/imagens para apresentações e follow-ups. Regras: `noindex`; fora do sitemap; fora da navegação institucional; sem otimização para busca; **sem informações confidenciais em URLs ou conteúdo**. Noindex não é privacidade. Não bloquear essas rotas no `robots.txt`, pois o buscador precisa ler o noindex.

## MainLayout

Componente de layout compartilhado que envolve as rotas institucionais com `RouterOutlet` e child routes. Contém `<header>` (navegação institucional) e `<footer>` (informações institucionais e navegação complementar). O componente compartilhado de menu/drawer renderiza seu próprio botão e `<dialog>` nativo, gerenciando abertura, fechamento por Esc/backdrop e acessibilidade, sem estado ou handlers no layout. Páginas **não** declaram header/footer individualmente. `/concept/:slug` fica fora do MainLayout.

## Componentes compartilhados

Só componentes com estado/comportamento (drawer, accordion interativo, formulários, navegação). `site-navigation` é compartilhado pelo drawer e rodapé e usa `SERVICE_LINKS` e `CASES` como fontes dos links; ao selecionar um link normalmente, avisa o drawer para fechá-lo. Elementos puramente visuais são classes em `@layer components` (ver `FRONTEND_STANDARDS.md`).

## Roteamento

Rotas institucionais como filhas do MainLayout; features carregadas com lazy loading (`loadChildren`/`loadComponent`); rota `concept/:slug` separada com layout próprio; fallback 404.

## SEO

Páginas comerciais exigem: `title` e meta description próprios, canonical, Open Graph, HTML semântico, conteúdo indexável, links internos, sitemap e metadados específicos (via `Title`/`Meta` do Angular, definidos por rota).

**Renderização:** Angular SSR com prerendering das rotas estáticas (HTML da homepage já sai com conteúdo). Ao criar `concepts`, definir `RenderMode` adequado e `noindex`. `public/sitemap.xml` lista as páginas indexáveis; `Seo.set` define title, description, Open Graph, canonical e JSON-LD. **Pendência:** domínio definitivo.

Concepts: noindex, fora do sitemap, sem exposição de dados confidenciais.

## Evolução futura para CRM

A estrutura por features permite adicionar futuramente uma feature própria (ex.: `features/crm/`). **Não desenvolver agora**: dashboard, autenticação administrativa, pipeline de vendas, gestão de clientes, área interna. Evitar abstrações prematuras.
