# Padrões de frontend — Angular + Tailwind CSS

Documento normativo. Alvo: **Tailwind CSS v4** (CSS-first). Se o projeto instalado usar v3, adaptar para os mecanismos equivalentes (`tailwind.config.js` com `theme.extend`, `@layer components`, `@apply`) e registrar a diferença aqui; nunca misturar sintaxes.

> Estado atual: Tailwind v4.3 instalado; tokens, escala fluida e classes globais estão em `src/styles.css`. Paleta Optional com `--color-*: initial` e cinco cores; `whatsapp` é uma exceção limitada ao hover/pressed dos botões primários. O primário mantém texto carbon sobre Signal no estado normal.

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

Fonte única em `@theme`, com nomes semânticos: `--color-carbon: #111315`, `--color-paper: #F3F1EB`, `--color-signal: #FF5930`, `--color-slate: #74797D`, `--color-white: #FFFFFF` (gera `text-carbon`, `bg-paper` etc.). Sem hexadecimais espalhados nos templates. `--color-whatsapp` e `--color-whatsapp-active` são exceções restritas, respectivamente, ao hover e ao estado pressionado de `.btn-primary`.

## 4. Escala tipográfica fluida

Sobrescrever `--text-*` em `@theme`, mantendo os nomes `text-xs` … `text-9xl`. Sem segunda escala paralela. A escala fluida original é reduzida em 10%, sem ficar abaixo dos mínimos existentes. Definir também `--text-*--line-height` coerente. Utilities `text-*` não são redefinidas em `@layer base`; use `@theme`.

Valores nominais de referência do Tailwind: xs 0.75rem, sm 0.875rem, base 1rem, lg 1.125rem, xl 1.25rem, 2xl 1.5rem, 3xl 1.875rem, 4xl 2.25rem, 5xl 3rem, 6xl 3.75rem, 7xl 4.5rem, 8xl 6rem, 9xl 8rem.

Exemplo conceitual (completar todos os tamanhos com coerência e validar visualmente):

```css
@theme {
  --text-base: max(0.9375rem, clamp(0.9375rem, 0.9rem + 0.2vw, 1rem) * 0.9);
  --text-xl: max(1rem, clamp(1rem, 0.92rem + 0.4vw, 1.25rem) * 0.9);
  --text-4xl: max(1.1875rem, clamp(1.1875rem, 0.8875rem + 1.5vw, 2.25rem) * 0.9);
}
```

Sem quebras manuais de linha responsivas (`<br>` com `hidden md:block`) no lugar de tipografia fluida.

## 5. Heading e body (`@layer base`)

- Heading: `font-display` (Bricolage Grotesque), `uppercase`, `text-slate`; h1/h2 `font-extrabold`, h3 `font-bold`, h4–h6 `font-semibold`. Palavras-chave dentro de `<strong>` ficam em carbon (regra em `@layer base`; em `.surface-dark` e `.card-secondary` ficam white). Heading sem `<strong>` aparece todo em slate: sempre destacar as palavras-chave.
- Body em carbon com opacidade (cinza de alto contraste derivado da paleta), entrelinha generosa.
- Não usar slate em texto pequeno sem contraste suficiente.
- Os estilos base não impedem customização pontual por utilities.

## 6. Gutter

`--spacing-gutter: clamp(1.5rem, 1rem + 1.5vw, 2.5rem);` em `@theme` (gera `p-gutter`, `px-gutter`, `gap-gutter`…). Mínimo 1.5rem, máximo 2.5rem (ajustar a fórmula se necessário para respeitar os limites). O gutter é o espaçamento padrão dos containers em todos os lados; não substituir por padding variável (`p-*`, `px-*`) por página.

## 7. Container

`--max-w-container: 100rem;` como alias explícito; em v4 expor a utility `max-w-container` via namespace de `@theme` (`--container-container: 100rem` ou `@utility max-w-container`), sem redefinir o `container` padrão do Tailwind. Classe de composição:

```css
.site-container { width: 100%; max-width: var(--max-w-container); margin-inline: auto; padding: var(--spacing-gutter); }
```

Implementar com a sintaxe correta para a versão instalada (`@apply w-full max-w-container mx-auto p-gutter`).
As seções usam o padding vertical do `.site-container`; não aplicar espaçamentos `section-*` diretamente às tags `<section>`.

## 8. Grid

Mobile e tablet usam `grid-cols-1`; a partir de `lg`: `lg:grid-cols-12`. As utilitárias de posicionamento (`col-span`, `col-start`, `col-end`) também devem usar o prefixo `lg:` para só compor o grid de 12 colunas nesse breakpoint. Sem breakpoints arbitrários sem necessidade; telas menores podem simplificar. `.site-grid` = `grid grid-cols-1 lg:grid-cols-12 gap-x-gutter`.

Os mínimos dos tokens preservam a legibilidade em telas estreitas; a redução de 10% não ultrapassa esses limites.

## 9. Componentes visuais (`@layer components`)

Elementos puramente visuais são **classes**, não componentes Angular.

- Botões: `.btn` (base, `rounded-xs`, nunca `rounded-full`), `.btn-primary`, `.btn-secondary`, `.btn-tertiary`. Os seletores globais `a` e `button` usam `w-full max-w-sm`; logo, controles compactos e links de navegação ou texto podem ajustar a largura quando necessário.
- Cards: `.card`, `.card-primary`, `.card-secondary`, `.card-tertiary`.
- Composição: `.site-container`, `.site-grid`.
- Card com imagem de fundo: `.media-card` (container), `.media-card-img` (`object-cover`), `.media-card-fade` (gradiente radial em carbon), `.media-card-scrim` (reforço de contraste sob o texto). Texto em `paper`/`white`; a imagem é decorativa (`alt=""`) e o texto carrega o conteúdo.
- `.eyebrow`: rótulo identificador em uppercase.
- Superfície escura: `.surface-dark` (fundo carbon, texto paper, strong dos headings em white). `.card-secondary` compartilha a mesma regra.

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

## 13. Motion (GSAP)

Toda animação passa pelo serviço `Gsap` (`core/gsap.ts`): registra ScrollTrigger e SplitText, não executa no servidor e só anima com `prefers-reduced-motion: no-preference`. Componentes injetam o serviço (`Gsap.run(host, …)` retorna o cleanup para `DestroyRef`); textos usam a diretiva `appReveal` (`shared/directives/reveal.ts`): `appReveal="lines"` em headings, `appReveal` em parágrafos e blocos. Listas de cards usam `data-stagger="<seletor>"` no container. Não importar `gsap` diretamente em componentes. Animações discretas (fade, subida curta, máscara de linhas).

## 14. Acessibilidade

Contraste AA, foco visível, navegação por teclado, semântica HTML, `prefers-reduced-motion` respeitado (`motion-safe:` / `motion-reduce:`).
