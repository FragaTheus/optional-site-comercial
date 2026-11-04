# Arquitetura — Option

## Estado atual (verificado na inspeção)

O repositório contém apenas um README inicial. **Não há** `package.json`, Angular, Tailwind, `angular.json`, arquivo global de estilos, roteamento, layouts, SSR ou prerendering. Versões: **não identificadas** (nada instalado). Ao criar o projeto com o Angular CLI, não fixar versão sem pedido, e registrar aqui as versões efetivas de Angular e Tailwind. A arquitetura abaixo é decisão aprovada, **ainda não implementada**.

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

**Renderização:** SPA com render apenas no cliente é insuficiente para SEO ideal. **Pendência técnica:** avaliar SSR/prerendering (Angular SSR com prerender das rotas comerciais estáticas) quando o projeto for criado. Não instalar automaticamente sem avaliar a arquitetura.

Concepts: noindex, fora do sitemap, sem exposição de dados confidenciais.

## Evolução futura para CRM

A estrutura por features permite adicionar futuramente uma feature própria (ex.: `features/crm/`). **Não desenvolver agora**: dashboard, autenticação administrativa, pipeline de vendas, gestão de clientes, área interna. Evitar abstrações prematuras.
