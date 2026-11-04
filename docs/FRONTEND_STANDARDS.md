# Padrões de frontend — Angular + Tailwind CSS

Documento normativo. Alvo: **Tailwind CSS v4** (CSS-first). Se o projeto instalado usar v3, adaptar para os mecanismos equivalentes (`tailwind.config.js` com `theme.extend`, `@layer components`, `@apply`) e registrar a diferença aqui; nunca misturar sintaxes.

> Estado atual: o repositório ainda não contém projeto Angular nem Tailwind instalados (ver `ARCHITECTURE.md`). Tudo abaixo é decisão aprovada, **ainda não implementada**. Ao criar o projeto, verificar as versões efetivas e ajustar.

## 1. Estilização

Tailwind é obrigatório. **Proibido**: CSS arbitrário em componentes Angular; CSS/SCSS por componente para estilo comum; `style` attributes para contornar o sistema; bibliotecas de UI com outro design system. Exceções técnicas reais devem ser explicadas antes da implementação.

Ordem de preferência: (1) classes globais existentes; (2) utilities Tailwind; (3) novas classes em `@layer components`, quando justificadas. Nunca criar estilo isolado se uma classe global resolve.

## 2. Estilo global

Um único arquivo global, preferencialmente `src/styles.css` (nunca `styles.css` e `style.css` juntos), o registrado em `angular.json`.

```css
@import "tailwindcss";

@theme { /* design tokens */ }
@layer base { /* estilos semânticos globais */ }
@layer components { /* classes visuais reutilizáveis */ }
```

## 3. Design tokens

Fonte única em `@theme`, com nomes semânticos: `--color-carbon: #111315`, `--color-paper: #F3F1EB`, `--color-signal: #FF5930`, `--color-slate: #74797D`, `--color-white: #FFFFFF` (gera `text-carbon`, `bg-paper` etc.). Sem hexadecimais espalhados nos templates.

## 4. Escala tipográfica fluida

Sobrescrever `--text-*` em `@theme` com `clamp()`, mantendo os nomes `text-xs` … `text-9xl`. Sem segunda escala paralela. O **máximo** de cada valor é o tamanho nominal original do Tailwind; o mínimo reduz proporcionalmente; interpolação via `vw`. Definir também `--text-*--line-height` coerente. Utilities `text-*` não são redefinidas em `@layer base`; use `@theme`.

Valores nominais máximos: xs 0.75rem, sm 0.875rem, base 1rem, lg 1.125rem, xl 1.25rem, 2xl 1.5rem, 3xl 1.875rem, 4xl 2.25rem, 5xl 3rem, 6xl 3.75rem, 7xl 4.5rem, 8xl 6rem, 9xl 8rem.

Exemplo conceitual (completar todos os tamanhos com coerência e validar visualmente):

```css
@theme {
  --text-base: clamp(0.9375rem, 0.9rem + 0.3vw, 1rem);
  --text-xl: clamp(1.0625rem, 1rem + 0.55vw, 1.25rem);
  --text-4xl: clamp(1.75rem, 1.4rem + 1.8vw, 2.25rem);
}
```

Sem quebras manuais de linha responsivas (`<br>` com `hidden md:block`) no lugar de tipografia fluida.

## 5. Heading e body (`@layer base`)

- Heading em carbon; h1 `font-black`, h2 `font-extrabold`, h3 `font-bold`, h4–h6 `font-semibold` (intervalo semibold–black), entrelinha compacta e tracking ajustado.
- Body em carbon com opacidade (cinza de alto contraste derivado da paleta), entrelinha generosa.
- Não usar slate em texto pequeno sem contraste suficiente.
- Os estilos base não impedem customização pontual por utilities.

## 6. Gutter

`--spacing-gutter: clamp(1.5rem, 1rem + 1.5vw, 2.5rem);` em `@theme` (gera `px-gutter`, `gap-gutter`…). Mínimo 1.5rem, máximo 2.5rem (ajustar a fórmula se necessário para respeitar os limites). É o espaçamento horizontal padrão dos containers; não substituir por `px-4/px-6/px-10` variáveis por página.

## 7. Container

`--max-w-container: 100rem;` como alias explícito; em v4 expor a utility `max-w-container` via namespace de `@theme` (`--container-container: 100rem` ou `@utility max-w-container`), sem redefinir o `container` padrão do Tailwind. Classe de composição:

```css
.site-container { width: 100%; max-width: var(--max-w-container); margin-inline: auto; padding-inline: var(--spacing-gutter); }
```

Implementar com a sintaxe correta para a versão instalada (`@apply w-full max-w-container mx-auto px-gutter`).

## 8. Grid

Mobile `grid-cols-1`; a partir de `md`: `md:grid-cols-12`. A maioria das seções usa 12 colunas, distribuindo com `col-span`, `col-start`, `col-end`; a assimetria nasce nesse grid. Sem breakpoints arbitrários sem necessidade; o mobile pode simplificar. `.site-grid` = `grid grid-cols-1 md:grid-cols-12 gap-x-gutter`.

## 9. Componentes visuais (`@layer components`)

Elementos puramente visuais são **classes**, não componentes Angular.

- Botões: `.btn` (base, `rounded-xs`, nunca `rounded-full`), `.btn-primary`, `.btn-secondary`, `.btn-tertiary`.
- Cards: `.card`, `.card-primary`, `.card-secondary`, `.card-tertiary`.
- Identificador: `.eyebrow` (único lugar, com labels de input, onde uppercase é permitido).
- Composição: `.site-container`, `.site-grid`.

Usar `@apply` com utilities Tailwind; não aplicar uma classe custom dentro de outra com `@apply` (não suportado em v4 para classes de `@layer components`). Combinar base + variante no template:

```html
<a class="btn btn-primary">Apresentar projeto</a>
<button type="button" class="btn btn-secondary">Conhecer serviços</button>
<div class="card card-primary">…</div>
```

Variantes semanticamente consistentes; sem variantes novas sem necessidade. Ter classes de card não obriga a usar cards em todas as seções.

## 10. Reutilização obrigatória

Antes de criar estilo: verificar componentes globais, `@layer components` e utilities. Reutilizar. Se não for reutilizar, justificar objetivamente antes. Não duplicar definições equivalentes.

## 11. Componentes comportamentais Angular

Criar componentes quando houver estado, comportamento, inputs/outputs, interação, reutilização funcional ou encapsulamento técnico justificado (drawer, accordion interativo, formulários, navegação). Preferir elemento HTML nativo quando suficiente (`<details>`, `<dialog>`). Não criar componente só para embrulhar uma `div` estilizada.

## 12. Código

- Concisão: menor número de linhas sem perder clareza; variáveis intermediárias só com reutilização ou ganho real.
- Toda classe TypeScript tem comentário imediatamente acima (responsabilidade e problema que resolve); dentro dela, separar atributos, construtores e métodos.
- Antes de alterar código usado em 2+ lugares (inclusive classes CSS, tokens e componentes globais): identificar os locais, comunicar impactos, explicar a mudança, então alterar.
- Angular: seguir a versão instalada, API moderna (standalone, signals, `inject()`, control flow nativo, `OnPush`), lazy loading, acessibilidade, style guide oficial.
- Sem secrets no frontend; sem dados confidenciais de prospects.

## 13. Acessibilidade e motion

Contraste AA, foco visível, navegação por teclado, semântica HTML, `prefers-reduced-motion` respeitado (`motion-safe:` / `motion-reduce:`).
