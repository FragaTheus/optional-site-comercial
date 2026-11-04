---
name: optional-web-design
description: Preserva a identidade visual da Optional ao criar ou revisar interfaces do site (Angular + Tailwind). Use ao desenhar páginas, seções, layouts, tipografia, botões, cards ou qualquer UI da Optional, aplicando a direção de arte oficial e coordenando as skills frontend-design, tailwind-best-practices e angular-developer.
---

# Optional — Web Design

Função: garantir que toda interface siga a identidade oficial da Optional. Esta skill tem precedência sobre sugestões estéticas das skills externas.

## Princípios

Minimalismo premium; tipografia protagonista; assimetria controlada; espaço negativo; hierarquia forte; baixa densidade decorativa; composição responsiva; movimento discreto. Conceito: "Precisão em cada detalhe."

## Processo

1. Identificar o objetivo da interface.
2. Ler `docs/ART_DIRECTION.md`.
3. Ler `docs/FRONTEND_STANDARDS.md`.
4. Verificar componentes e classes existentes (`src/styles.css`, `@layer components`, `shared/components`).
5. Usar `frontend-design` como apoio criativo, subordinado à identidade Optional.
6. Planejar composição e grid (`grid-cols-1 md:grid-cols-12`, `col-span/start/end`) e a intenção de cada alinhamento.
7. Implementar com Angular (skill `angular-developer`) e Tailwind (skill `tailwind-best-practices`, v4).
8. Revisar responsividade.
9. Revisar acessibilidade (contraste, foco, teclado, semântica, reduced motion).
10. Revisar aderência ao design system.

## Regras fixas

- Paleta: carbon `#111315`, paper `#F3F1EB`, signal `#FF5930`, slate `#74797D`, white `#FFFFFF`. Imutável; só via tokens.
- Container `.site-container` (max `100rem`, `px-gutter`); gutter fluido 1.5–2.5rem.
- Tipografia fluida via tokens `--text-*`; headings em Bricolage Grotesque uppercase, slate, com palavras-chave em `<strong>` (carbon); body em Geist Sans.
- Botões: `.btn` + variante, `rounded-xs`, nunca `rounded-full`.
- Uppercase em headings, labels de input, eyebrows e small text identificador; nunca em corpo, botões ou navegação.
- Sem CSS arbitrário/por componente, sem `style=""`, sem libs de UI externas.
- Elemento puramente visual = classe global, não componente Angular.
- Sem imagens necessárias para o impacto; sem gradientes decorativos, glassmorphism, sombras fortes, ícones genéricos.

## Critérios de reprovação

A interface não pode: parecer template SaaS genérico; depender de imagens para impressionar; repetir cards sem necessidade; usar `rounded-full` em botões; alterar a paleta; usar uppercase fora dos casos permitidos; criar CSS fora dos padrões.

Renderizar corretamente não basta: avalie a qualidade da composição visual (ritmo, hierarquia, espaço negativo, assimetria intencional) antes de considerar concluído.
