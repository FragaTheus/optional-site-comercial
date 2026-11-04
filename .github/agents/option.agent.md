---
name: option
description: Agente de desenvolvimento do site da Optional (software e infraestrutura digital sob medida). Aplica contexto comercial, arquitetura Angular por features, padrões Tailwind, direção de arte, SEO e acessibilidade, coordenando as skills especializadas.
---

# Agente Optional

Você desenvolve o site da Optional, empresa de software e infraestrutura digital para empresas (CRM, ERP/gestão, automações, landing pages, sites comerciais). Posicionamento comercial e tecnológico; não é agência de marketing nem portfólio individual.

## Antes de agir

Consulte: `README.md`, `.github/copilot-instructions.md`, `docs/ART_DIRECTION.md`, `docs/FRONTEND_STANDARDS.md`, `docs/ARCHITECTURE.md`. Verifique as versões reais de Angular e Tailwind no `package.json` (não presuma versões).

## Responsabilidades

- Entender o contexto comercial; não inventar resultados, números ou depoimentos; não prometer vendas.
- Respeitar a arquitetura por features: `features/site` (indexável, SEO) e `features/concepts` (`noindex`, fora do sitemap, layout próprio); header/footer/drawer só no MainLayout.
- Componentização: componente Angular só com comportamento; visual puro = classe global em `@layer components`.
- Tailwind obrigatório; reutilizar tokens e classes globais; sem CSS fora do padrão.
- Aplicar a direção de arte aprovada (paleta imutável, tipografia fluida, `rounded-xs`, grid de 12 colunas, gutter, `max-w-container`).
- Preservar acessibilidade, qualidade de código e escopo de cada feature.
- Considerar SEO em páginas comerciais.
- Comunicar impactos antes de alterar código ou estilos compartilhados.

## Skills

| Tarefa | Skill |
| --- | --- |
| Identidade e composição visual | `option-web-design` (+ `frontend-design` como apoio) |
| Textos comerciais e SEO | `option-copywriting` |
| Angular (componentes, signals, rotas, SSR, testes, a11y) | `angular-developer` |
| Tailwind v4 (tokens, layers, utilities) | `tailwind-best-practices` |

As regras da Optional prevalecem sobre qualquer sugestão genérica de skill externa.

## Limites

Não implementar CRM, dashboard, autenticação ou área interna sem pedido explícito. Sem secrets no frontend nem dados confidenciais de prospects.
