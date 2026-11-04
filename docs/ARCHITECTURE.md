# Arquitetura — Option

## Estado atual (verificado na inspeção)

Angular 22.2 e Tailwind CSS 4.3 (v4, CSS-first), com SSR + prerendering habilitados (`RenderMode.Prerender` em `**`). Implementados: `core/` (`seo.ts`, `site.config.ts`), `layouts/main-layout`, `features/site/home`. **Não implementados**: páginas de serviços, `features/concepts`, sitemap. Pendentes em `site.config.ts`: `CONTACT_URL` (canal de contato) e `SITE_URL` (domínio; sem ele não há canonical/og:url).

## Estrutura Angular pretendida

Orientada a features; ajustar nomes às convenções da versão instalada e não reorganizar código funcional só para reproduzir a árvore.

```
src/app/
  core/                 serviços singleton, SEO/metadados, configuração
  layouts/
    main-layout/        header, <router-outlet>, footer, drawer
  shared/
    components/         somente componentes comportamentais reutilizáveis
  features/
    site/               presença comercial pública (indexável)
    concepts/           conceitos personalizados para prospects (noindex)
```

## features/site

Homepage, páginas satélites de serviços (CRM, ERP/gestão, automações, landing pages, sites comerciais), projetos e cases, conteúdo comercial, SEO, metadados, CTAs. Páginas indexáveis e otimizadas.

## features/concepts

Rota `/concept/:slug`, layout independente, identidade visual própria possível, conteúdo/interfaces/imagens para apresentações e follow-ups. Regras: `noindex`; fora do sitemap; fora da navegação institucional; sem otimização para busca; **sem informações confidenciais em URLs ou conteúdo**. Noindex não é privacidade. Não bloquear essas rotas no `robots.txt`, pois o buscador precisa ler o noindex.

## MainLayout

Componente de layout compartilhado que envolve as rotas institucionais com `RouterOutlet` e child routes. Contém `<header>` (navegação institucional), `<footer>` (informações institucionais e navegação complementar) e o drawer (`<dialog>` nativo, com gerenciamento de foco, fechamento por Esc/backdrop e acessibilidade). Páginas **não** declaram header/footer/drawer individualmente. `/concept/:slug` fica fora do MainLayout.

## Componentes compartilhados

Só componentes com estado/comportamento (drawer, accordion interativo, formulários, navegação). Elementos puramente visuais são classes em `@layer components` (ver `FRONTEND_STANDARDS.md`).

## Roteamento

Rotas institucionais como filhas do MainLayout; features carregadas com lazy loading (`loadChildren`/`loadComponent`); rota `concept/:slug` separada com layout próprio; fallback 404.

## SEO

Páginas comerciais exigem: `title` e meta description próprios, canonical, Open Graph, HTML semântico, conteúdo indexável, links internos, sitemap e metadados específicos (via `Title`/`Meta` do Angular, definidos por rota).

**Renderização:** Angular SSR com prerendering das rotas estáticas (HTML da homepage já sai com conteúdo). Ao criar `concepts`, definir `RenderMode` adequado e `noindex`. **Pendência:** sitemap e domínio.

Concepts: noindex, fora do sitemap, sem exposição de dados confidenciais.

## Evolução futura para CRM

A estrutura por features permite adicionar futuramente uma feature própria (ex.: `features/crm/`). **Não desenvolver agora**: dashboard, autenticação administrativa, pipeline de vendas, gestão de clientes, área interna. Evitar abstrações prematuras.
