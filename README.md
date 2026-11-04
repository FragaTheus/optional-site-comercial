# Optional

> Estado: projeto Angular criado com a **homepage** (hub de serviços). Páginas de serviços, concepts, sitemap e canal de contato real ainda **não** existem.

## 1. Visão geral
A marca é **Optional**.

Site da Optional, empresa de desenvolvimento de software e infraestrutura digital para empresas.

## 2. Objetivo empresarial
Posicionar a Optional como autoridade, apresentar serviços, servir de portfólio de competências e projetos, captar oportunidades, apoiar a prospecção e hospedar conceitos comerciais personalizados.

## 3. Posicionamento
Comercial e tecnológico, soluções sob medida para a realidade de cada empresa. Não é agência de marketing, nem currículo individual. Sem promessas de vendas/faturamento sem evidência; sem resultados, números ou depoimentos inventados.

## 4. Serviços
CRM; ERP e sistemas de gestão personalizados; automações e integrações; landing pages; sites institucionais e comerciais.

## 5. Objetivos do website
Plataforma institucional; apresentação comercial; portfólio; canal de aquisição; apoio à prospecção; repositório de conceitos.
Referências (sujeitas a validação, sem dados confidenciais): Símtese (CRM/agendamentos), LaLouise (controle operacional/rastreabilidade), Caldeiraria Realiza (site comercial), Paulo Carvalho (site profissional), Profissão do Século (landing page).

## 6. Features principais
- `features/site`: homepage (implementada); páginas de serviços, projetos/cases *(não implementados)*.
- `features/concepts`: `/concept/:slug`, noindex, fora do sitemap. *(não implementado)*

## 7. Arquitetura Angular
`src/app/{core, layouts/main-layout, shared/components, features/{site,concepts}}`. MainLayout com header, `RouterOutlet`, footer e drawer (`<dialog>`). Detalhes em [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## 8. Stack
Angular 22.2 (standalone, SSR + prerendering via `@angular/ssr`), Tailwind CSS 4.3 (`@tailwindcss/postcss`), Bricolage Grotesque (única família, headings e corpo) self-hosted (`public/fonts`, licença OFL), GSAP 3.15 (via serviço `Gsap`), Vitest, TypeScript 6. Versões conforme `package.json`.

## 9. Direção de arte
"Precisão em cada detalhe." Minimalista, tipográfica, assimétrica. Paleta: Carbon `#111315`, Paper `#F3F1EB`, Signal `#FF5930`, Slate `#74797D`, White `#FFFFFF`. Ver [`docs/ART_DIRECTION.md`](docs/ART_DIRECTION.md).

## 10. Padrões de Tailwind
Tailwind obrigatório; tokens em `@theme`; escala `text-*` fluida com `clamp()`; `--spacing-gutter`; `max-w-container` (100rem); grid `grid-cols-1 md:grid-cols-12`; classes `.btn*`, `.card*`, `.eyebrow`, `.site-container`, `.site-grid` em `@layer components`; botões `rounded-xs`. Ver [`docs/FRONTEND_STANDARDS.md`](docs/FRONTEND_STANDARDS.md).

## 11. Componentização
Componente Angular só com estado/comportamento/interação; visual puro vira classe global; preferir HTML nativo.

## 12. SEO
Title, description, canonical, Open Graph, HTML semântico, links internos e sitemap nas páginas comerciais. SSR com prerendering está habilitado (`app.routes.server.ts`). Pendentes: domínio (`SITE_URL` em `core/site.config.ts`) para canonical/og:url e sitemap.

## 13. Concepts
Páginas personalizadas para prospects. Noindex não é privacidade: nada confidencial em URL ou conteúdo; não bloquear em robots.txt; fora do sitemap e da navegação.

## 14. Agente e skills
- Agente: `.github/agents/optional.agent.md`; instruções: `.github/copilot-instructions.md`.
- Skills do projeto: `.github/skills/optional-web-design`, `.github/skills/optional-copywriting`.
- Skills externas (em `.agents/skills/`, registradas em `skills-lock.json`): `angular-developer` (angular/skills), `tailwind-best-practices` (ofershap/tailwind-best-practices), `frontend-design` (anthropics/skills).

## 15. Comandos de desenvolvimento
`npm install`, `npm start` (dev), `npm run build`, `npm test`. Instalação das skills:
```
npx skills add angular/skills --skill angular-developer --agent github-copilot
npx skills add ofershap/tailwind-best-practices --skill tailwind-best-practices --agent github-copilot
npx skills add anthropics/skills --skill frontend-design --agent github-copilot
```

## 16. Etapas futuras
Páginas satélites de serviços (e links do hub para elas), projetos/cases validados, concepts, sitemap, canal de contato real. CRM é futuro e está fora do escopo atual.

## 17. Escopo atual e limitações
Homepage e MainLayout. Os CTAs apontam para `#contato` (`CONTACT_URL`, pendente). Sem imagens, CRM, dashboard ou autenticação.
