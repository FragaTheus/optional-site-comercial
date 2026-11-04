# Option

> Estado: **base documental**. Decisões abaixo são aprovadas; o código do site **ainda não foi implementado** (não há projeto Angular neste repositório).

## 1. Visão geral
Site da Option, empresa de desenvolvimento de software e infraestrutura digital para empresas.

## 2. Objetivo empresarial
Posicionar a Option como autoridade, apresentar serviços, servir de portfólio de competências e projetos, captar oportunidades, apoiar a prospecção e hospedar conceitos comerciais personalizados.

## 3. Posicionamento
Comercial e tecnológico, soluções sob medida para a realidade de cada empresa. Não é agência de marketing, nem currículo individual. Sem promessas de vendas/faturamento sem evidência; sem resultados, números ou depoimentos inventados.

## 4. Serviços
CRM; ERP e sistemas de gestão personalizados; automações e integrações; landing pages; sites institucionais e comerciais.

## 5. Objetivos do website
Plataforma institucional; apresentação comercial; portfólio; canal de aquisição; apoio à prospecção; repositório de conceitos.
Referências (sujeitas a validação, sem dados confidenciais): Símtese (CRM/agendamentos), LaLouise (controle operacional/rastreabilidade), Caldeiraria Realiza (site comercial), Paulo Carvalho (site profissional), Profissão do Século (landing page).

## 6. Features principais
- `features/site`: homepage, páginas de serviços, projetos/cases, SEO, CTAs. *(não implementado)*
- `features/concepts`: `/concept/:slug`, noindex, fora do sitemap. *(não implementado)*

## 7. Arquitetura Angular
`src/app/{core, layouts/main-layout, shared/components, features/{site,concepts}}`. MainLayout com header, `RouterOutlet`, footer e drawer (`<dialog>`). Detalhes em [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## 8. Stack
Não há `package.json`; Angular e Tailwind **não estão instalados**. Decisão aprovada: Angular + Tailwind CSS v4 (registrar versões ao criar o projeto). Ferramenta usada: Node/npm e o gerenciador de skills (`npx skills`).

## 9. Direção de arte
"Precisão em cada detalhe." Minimalista, tipográfica, assimétrica. Paleta: Carbon `#111315`, Paper `#F3F1EB`, Signal `#FF5930`, Slate `#74797D`, White `#FFFFFF`. Ver [`docs/ART_DIRECTION.md`](docs/ART_DIRECTION.md).

## 10. Padrões de Tailwind
Tailwind obrigatório; tokens em `@theme`; escala `text-*` fluida com `clamp()`; `--spacing-gutter`; `max-w-container` (100rem); grid `grid-cols-1 md:grid-cols-12`; classes `.btn*`, `.card*`, `.eyebrow`, `.site-container`, `.site-grid` em `@layer components`; botões `rounded-xs`. Ver [`docs/FRONTEND_STANDARDS.md`](docs/FRONTEND_STANDARDS.md).

## 11. Componentização
Componente Angular só com estado/comportamento/interação; visual puro vira classe global; preferir HTML nativo.

## 12. SEO
Title, description, canonical, Open Graph, HTML semântico, links internos e sitemap nas páginas comerciais. SSR/prerendering ainda **não avaliado** (pendência).

## 13. Concepts
Páginas personalizadas para prospects. Noindex não é privacidade: nada confidencial em URL ou conteúdo; não bloquear em robots.txt; fora do sitemap e da navegação.

## 14. Agente e skills
- Agente: `.github/agents/option.agent.md`; instruções: `.github/copilot-instructions.md`.
- Skills do projeto: `.github/skills/option-web-design`, `.github/skills/option-copywriting`.
- Skills externas (em `.agents/skills/`, registradas em `skills-lock.json`): `angular-developer` (angular/skills), `tailwind-best-practices` (ofershap/tailwind-best-practices), `frontend-design` (anthropics/skills).

## 15. Comandos de desenvolvimento
Ainda inexistentes (sem projeto Angular). Instalação das skills:
```
npx skills add angular/skills --skill angular-developer --agent github-copilot
npx skills add ofershap/tailwind-best-practices --skill tailwind-best-practices --agent github-copilot
npx skills add anthropics/skills --skill frontend-design --agent github-copilot
```

## 16. Etapas futuras
Criar o projeto Angular + Tailwind com tokens e classes globais; MainLayout; homepage e páginas de serviços; concepts; avaliar SSR/prerendering e sitemap. CRM é futuro e está fora do escopo atual.

## 17. Escopo atual e limitações
Apenas documentação, instruções do Copilot e skills. Nenhuma página, imagem, CRM, dashboard ou autenticação foi criada.
