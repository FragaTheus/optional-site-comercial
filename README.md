# Optional

> Estado: **homepage**, hubs de serviços e cases, quatro páginas satélites de serviços e quatro páginas de cases implementadas, com sitemap. Concepts ainda não existem.

## 1. Visão geral
A marca é **Optional**.

Site da Optional, empresa de desenvolvimento de software e infraestrutura digital para empresas.

## 2. Objetivo empresarial
Posicionar a Optional como autoridade, apresentar serviços, servir de portfólio de competências e projetos, captar oportunidades, apoiar a prospecção e hospedar conceitos comerciais personalizados.

## 3. Posicionamento
Comercial e tecnológico, soluções sob medida para a realidade de cada empresa. Não é agência de marketing, nem currículo individual. Sem promessas de vendas/faturamento sem evidência; sem resultados, números ou depoimentos inventados.

## 4. Frentes comerciais
Experiência e qualificação comercial (sites e landing pages); automações (com integração entre ferramentas); sistemas personalizados; terceirização de fluxos (CRM e ERP são possíveis aplicações, não frentes independentes).

## 5. Objetivos do website
Plataforma institucional; apresentação comercial; portfólio; canal de aquisição; apoio à prospecção; repositório de conceitos.
Referências (sujeitas a validação, sem dados confidenciais): Símtese (sistema personalizado de atendimento e exames ocupacionais), LaLouise (sistema personalizado de qualidade, validades e rastreabilidade), automação de e-commerce (automação + integração), Caldeiraria Realiza (site comercial), Paulo Carvalho (site profissional), Profissão do Século (landing page).

## 6. Features principais
- `features/site`: homepage (único hub), páginas satélites `/servicos/{sites,automacoes,sistemas,terceirizacao-de-fluxos}` e cases em `/cases/:slug`. A página de sites também aborda landing pages. O conteúdo dos cases deve ser revisado antes da publicação.
- `features/concepts`: `/concept/:slug`, noindex, fora do sitemap. *(não implementado)*

## 7. Arquitetura Angular
`src/app/{core, layouts/main-layout, shared/components, features/{site,concepts}}`. MainLayout com header, `RouterOutlet`, footer e drawer (`<dialog>`). Detalhes em [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## 8. Stack
Angular 22.2 (standalone, SSR + prerendering via `@angular/ssr`), Tailwind CSS 4.3 (`@tailwindcss/postcss`), Bricolage Grotesque (única família, headings e corpo) self-hosted (`public/fonts`, licença OFL), GSAP 3.15 (via serviço `Gsap`), Vitest, TypeScript 6. Versões conforme `package.json`.

## 9. Direção de arte
"Precisão em cada detalhe." Minimalista, tipográfica, assimétrica. Paleta: Carbon `#111315`, Paper `#F3F1EB`, Signal `#FF5930`, Slate `#74797D`, White `#FFFFFF`. Ver [`docs/ART_DIRECTION.md`](docs/ART_DIRECTION.md).

## 10. Padrões de Tailwind
Tailwind obrigatório; tokens em `@theme`; escala `text-*` fluida com `clamp()`; `--spacing-gutter`; `max-w-container` (100rem); grid `grid-cols-1 lg:grid-cols-12`; classes `.btn*`, `.card*`, `.media-card*` (card com imagem de fundo), `.eyebrow`, `.site-container`, `.site-grid` em `@layer components`; botões `rounded-xs`. Ver [`docs/FRONTEND_STANDARDS.md`](docs/FRONTEND_STANDARDS.md).

## 11. Componentização
Componente Angular só com estado/comportamento/interação; visual puro vira classe global; preferir HTML nativo.

## 12. SEO
Title, description, canonical, Open Graph, HTML semântico, links internos e sitemap nas páginas comerciais. SSR com prerendering habilitado (`app.routes.server.ts`); JSON-LD (`Service`, `BreadcrumbList`) nas satélites; `public/sitemap.xml` e `robots.txt`. `SITE_URL` (`core/site.config.ts`) usa o domínio de deploy atual, provisório: trocar também no sitemap e no robots quando houver domínio definitivo. Estratégia de copy e SEO em [`docs/copyright.md`](docs/copyright.md).

## 13. Concepts
Páginas personalizadas para prospects. Noindex não é privacidade: nada confidencial em URL ou conteúdo; não bloquear em robots.txt; fora do sitemap e da navegação.

## 14. Agente e skills
- Copy: [`docs/copyright.md`](docs/copyright.md) é obrigatório para qualquer texto comercial.
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
Cases validados com mais detalhe, concepts, domínio definitivo e canal de contato real. Validar as palavras-chave de `docs/copyright.md`.

## 17. Escopo atual e limitações
Homepage, páginas satélites, cases e MainLayout. Os CTAs comerciais usam `CONTACT_URL`; não há CRM, dashboard ou autenticação na aplicação.
