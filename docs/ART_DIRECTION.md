# Direção de arte — Optional

Documento normativo. Toda interface da Optional deve segui-lo. Skills externas (`frontend-design` etc.) apoiam a criação, mas **nunca substituem** estas regras.

## Conceito criativo

**"Precisão em cada detalhe."**

Identidade: minimalista, premium, tecnológica, sofisticada, tipográfica, assimétrica, autoral.

Referências de sensibilidade (sem copiar literalmente): páginas institucionais da Apple, Meta About, uso da tipografia da Claude. A estética editorial industrial sugerida anteriormente está **descartada**.

## Paleta oficial (aprovada, imutável)

| Token  | Hex       | Uso                                                              |
| ------ | --------- | ---------------------------------------------------------------- |
| carbon | `#111315` | Destaque das palavras-chave dos títulos (`strong`); fundo de seções escuras |
| paper  | `#F3F1EB` | Fundo claro predominante                                         |
| signal | `#FF5930` | Destaque, uso moderado (CTA primário, detalhes pontuais)         |
| slate  | `#74797D` | Elementos secundários, bordas, textos grandes                    |
| white  | `#FFFFFF` | Superfícies claras alternativas e texto sobre carbon             |

- Alternância de seções claras (paper/white) e escuras (carbon).
- O body tem aparência cinza com contraste acessível (WCAG AA, mínimo 4.5:1 para texto pequeno). Slate sobre paper **não** atinge esse contraste em texto pequeno: use carbon com opacidade adequada (ex.: `text-carbon/75`). Não introduzir uma sexta cor.
- Não usar valores hexadecimais nos templates; apenas tokens.

## Minimalismo

Priorizar: muito espaço negativo, poucos elementos, tipografia expressiva, contraste, composições alinhadas, hierarquia objetiva.

Evitar: gradientes decorativos, glassmorphism, excesso de cards, ícones genéricos, imagens abstratas de tecnologia, sombras exageradas, hero genérico de SaaS, animações chamativas.

## Assimetria

A narrativa visual é assimétrica e deliberada. Exemplo de ritmo: esquerda → centro → direita → composição horizontal → esquerda → encerramento central. **Não aplicar mecanicamente**: cada alinhamento precisa de uma intenção (ênfase, pausa, contraste, transição). A assimetria é construída dentro do grid de 12 colunas (`col-start`, `col-span`, `col-end`).

## Tipografia

A tipografia é o principal elemento gráfico.

- Heading: **Bricolage Grotesque** (variável, OFL, self-hosted; pesos 200–800, logo `font-extrabold` é o máximo). Body: a mesma família. Sem monospace (só em blocos de código reais).
- Antes de implementar, avaliar licença, disponibilidade e estratégia de carregamento (self-host, `font-display: swap`, subset, preload). Evitar muitas famílias.
- Headings: fortes, expressivos, **uppercase**, em slate com as **palavras-chave em `<strong>` na cor carbon** (white em fundos escuros). Cada heading deve destacar suas palavras-chave com `<strong>`. Pesos de semibold a extrabold, entrelinha compacta quando apropriado, tracking ajustado (mais fechado no h1 — tighter — e aliviando até tight conforme o nível desce), escala claramente superior ao body.
- Body: peso confortável, aparência cinza, contraste acessível, entrelinha generosa.
- Escala fluida com `clamp()` (ver `FRONTEND_STANDARDS.md`).
- **Uppercase** em headings (h1–h6), labels de inputs e small text identificador. Nunca em textos corridos, botões, navegação ou descrições.

## Botões

- Todos usam `rounded-xs`. Proibido `rounded-full` e aparência de pílula.
- Composição minimalista; o botão primário tem hierarquia visual superior aos demais.

## Imagens

Nesta fase não se geram imagens. O design deve funcionar sem imagens: tipografia e espaço negativo criam o impacto. Os assets abstratos existentes (`public/home-img`) aparecem como fundo de cards (`.media-card`) com gradientes que preservam a legibilidade; nunca como galeria decorativa.

## Motion

Animações discretas e com propósito (feedback, orientação, transição de estado). Sempre respeitar `prefers-reduced-motion`. Sem movimento apenas decorativo.

## Checklist de revisão visual

- A composição tem intenção e hierarquia clara sem imagens?
- Há assimetria justificada, dentro do grid de 12 colunas?
- Paleta e tokens intactos? Signal usado com moderação?
- Contraste do texto pequeno ≥ 4.5:1?
- Botões com `rounded-xs`; sem uppercase fora dos casos permitidos?
- Não parece template SaaS genérico?
