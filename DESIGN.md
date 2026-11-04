# DESIGN.md — Optional

Documento de design da Home da Optional. Só define decisões; nenhum código de UI. Complementa (não substitui) `docs/ART_DIRECTION.md` e `docs/FRONTEND_STANDARDS.md`: em conflito, valem os documentos aprovados, salvo as decisões marcadas como **revisão** abaixo.

Contexto verificado no projeto: Angular 22.2 + Tailwind CSS 4.3 (CSS-first, tokens em `@theme` no `src/styles.css`), SSR/prerender, GSAP via serviço `Gsap` e diretiva `appReveal`. Conteúdo da Home: hero, problema, serviços (CRM, ERP e gestão, automações e integrações, landing pages, sites comerciais), evolução do projeto (LP → integrações → CRM → ERP), princípios, FAQ (6 perguntas) e fechamento. Não há imagens, depoimentos, números ou cases validados.

Referências (apenas princípios): About da Meta e home da Apple — espaço em branco, tipografia protagonista, poucos elementos por tela, imagens grandes e raras, ritmo vertical generoso. Nada de logos, fontes, textos ou imagens deles.

## Decisões que revisam documentos anteriores

| Tema | Antes | Agora | Motivo |
|---|---|---|---|
| Famílias | Geist (corpo) + Bricolage (títulos) | **Bricolage Grotesque** como única sans; IBM Plex Mono como secundária | Pedido: 1 sans + no máximo 1 secundária |
| Cards | `.card*` liberados | Sem grid de cards iguais; ver exceção em §5.4 | Tipografia é o design |
| Bento | Não previsto | Bento assimétrico em no máximo 2 seções, para mesclar com as seções tipográficas; ver §4.1 | Variar o ritmo sem virar grid de cards |
| Imagens | "Não gerar imagens" | Slots previstos, **nunca obrigatórios**; a página funciona sem elas | Há zero imagens reais hoje |

Inalterados: paleta de 5 cores, botões `rounded-xs`, títulos em uppercase com palavras-chave em `<strong>`, Tailwind obrigatório, tokens em `@theme`, MainLayout, regras de SEO.

## 1. Princípios

1. Tipografia é o design: o título é a imagem da seção.
2. Assimetria por intenção: nada centralizado por padrão; cada alinhamento tem um motivo.
3. Espaço em branco desigual de propósito; o ritmo entre seções é irregular.
4. Um elemento dominante por tela; o resto recua.
5. Variance alta, motion baixo, densidade visual baixa.
6. Cor é rara: Signal aparece poucas vezes por tela e nunca como texto corrido.
7. Sem ornamento: o que não informa nem hierarquiza sai.

| Fazer | Evitar |
|---|---|
| Título de 7–9 colunas ancorado à esquerda | Hero centralizado com dois botões |
| Texto de apoio pequeno deslocado para outra coluna | Texto de apoio colado ao título, mesma largura |
| Linhas finas (`border`) como divisores | Caixas em volta de tudo |
| Listas tipográficas numeradas | Grid de cards iguais, ícones decorativos |
| Um CTA primário por tela | Vários botões de peso igual |

## 2. Tipografia

**Família principal — Bricolage Grotesque** (Google Fonts, SIL OFL, já self-hosted em `public/fonts/`). Sans grotesca com personalidade própria (aberturas e terminais incomuns), forte em tamanho display e legível em texto; evita o aspecto neutro de Inter/Roboto/Arial. Pesos disponíveis no arquivo atual: 200–800. **Revisão:** o arquivo atual é somente `wght`; usar os eixos `opsz`/`wdth` exige trocar o arquivo (pendente, avaliar tamanho antes).

**Família secundária — IBM Plex Mono** (Google Fonts, OFL), só para detalhes: numeração de etapas (`01`), rótulos técnicos, legendas. Carregar apenas pesos 400 e 500, latin. Alternativa descartada: serif — conflita com o tom tecnológico.

Geist deixa de ser usada quando esta direção for implementada (remover `@font-face` e preload).

### Tokens

```
--font-display: "Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif;
--font-sans:    var(--font-display);
--font-mono:    "IBM Plex Mono", ui-monospace, monospace;
```

### Escala (mantém os nomes `text-*`; máximos = tamanhos nominais do Tailwind)

A escala fluida `--text-xs … --text-9xl` já definida em `src/styles.css` permanece. Papéis nesta direção:

| Papel | Utility | Peso | Line-height | Tracking |
|---|---|---|---|---|
| Display (h1) | `text-9xl` (≥ md), `text-6xl` (mobile via clamp) | 800 | 0.92 | `-0.04em` |
| Título de seção (h2) | `text-7xl` a `text-8xl` | 800 | 0.96–1.0 | `-0.035em` |
| Subtítulo (h3) | `text-3xl` a `text-4xl` | 700 | 1.15–1.25 | `-0.02em` |
| Lead | `text-xl` | 400 | 1.5 | `0` |
| Corpo | `text-base`/`text-lg` | 400 | 1.65 | `0` |
| Eyebrow / rótulo | `text-sm` (mono) | 500 | 1.5 | `+0.08em`, uppercase |

Tokens a acrescentar em `@theme` na implementação: `--tracking-display: -0.04em`, `--tracking-title: -0.035em`, `--tracking-heading: -0.02em`. Títulos: uppercase (aprovado), Carbon nas palavras-chave (`<strong>`) e Slate no restante; em superfície escura, `<strong>` em White. Uppercase continua proibido em corpo, botões e navegação. Largura de leitura do corpo: máx. 62ch.

## 3. Cores

Paleta aprovada e imutável; esta direção só define papéis.

| Token | Valor | Papel |
|---|---|---|
| `--color-paper` | #F3F1EB | Fundo padrão (off-white) |
| `--color-white` | #FFFFFF | Faixa clara de contraste ocasional |
| `--color-carbon` | #111315 | Texto forte, palavras-chave dos títulos, seções escuras (quase preto) |
| `--color-slate` | #74797D | Títulos não destacados (≥ 24px), linhas, metadados grandes |
| `--color-signal` | #FF5930 | **Única cor de acento** |

Corpo: Carbon a 75% de opacidade sobre Paper (cinza de alto contraste). Em Carbon: Paper a 75%.

Contraste (AA): Carbon/Paper e Paper/Carbon passam com folga. Slate sobre Paper fica ≈ 3,9:1, então só vale para texto grande (≥ 24px ou ≥ 19px bold); nunca em texto pequeno. **Signal sobre Paper fica ≈ 2,9:1: não usar como cor de texto.** Signal serve para: fundo do botão primário (texto Carbon), foco visível, marca `<>` do logotipo, um traço fino por seção. Máximo de dois usos de Signal por viewport.

Superfícies: Paper (padrão), White (no máximo uma faixa), Carbon (seções de peso, `.surface-dark`). Sem gradientes.

## 4. Grid e espaçamento

- 12 colunas a partir de `md` (`grid grid-cols-1 md:grid-cols-12`), via `.site-grid`; container `.site-container` (`--max-w-container: 100rem`, `px-gutter`).
- `--spacing-gutter: clamp(1.5rem, 1rem + 1.5vw, 2.5rem)` serve de margem lateral e de gap de colunas.
- Textos de leitura nunca ocupam mais de 5 colunas.
- Escala vertical de seção (novo token, ritmo irregular de propósito):

```
--space-section-s:  clamp(4rem, 3rem + 4vw, 7rem);
--space-section-m:  clamp(6rem, 4rem + 8vw, 12rem);
--space-section-l:  clamp(8rem, 5rem + 12vw, 18rem);
```

Escala de espaçamento interno: múltiplos de 0,5rem (`2, 4, 6, 8, 12, 16, 24, 32` do Tailwind). Não usar valores arbitrários.

### 4.1 Bento (uso pontual, para mesclar)

Bento é um mosaico de blocos de tamanhos **diferentes** sobre o grid de 12 colunas. Serve para quebrar o ritmo tipográfico em até **2 seções da Home** (evita monotonia); nunca para a página inteira.

Regras:
- Blocos desiguais, no mínimo 3 tamanhos (ex.: 7×2, 5×1, 4×1 colunas×linhas). Proibido grid de blocos iguais.
- Montado com `grid grid-cols-1 md:grid-cols-12` e `col-span`/`row-span`, `auto-rows` por token; 4 a 6 blocos por mosaico.
- Gap = `--spacing-gutter`. Superfícies só da paleta: Paper com borda fina (`--color-line`), White, Carbon e, no máximo um bloco, Signal (texto Carbon).
- Cada bloco é tipografia: um título curto (h3), uma frase e, se couber, um numeral em mono. Sem ícones, sem imagem decorativa, sem sombra.
- Cantos: `rounded-xs`, o mesmo raio dos botões. Sem `rounded-2xl`.
- Estilo reutilizável: classe `.bento` (container) e `.bento-tile` + variantes de superfície (`.bento-tile-light`, `.bento-tile-dark`) em `@layer components`, reaproveitando `.card*` quando equivalente; sem componente Angular só para a caixa.
- Um bloco de texto grande deve dominar; os demais recuam (hierarquia de tamanho = hierarquia de importância).
- Mobile: 1 coluna, blocos empilhados na ordem de leitura, mantendo variação de altura e recuo; sem `row-span` abaixo de `md`.
- Motion: o mesmo fade + translate com stagger do §7; sem hover animado.

Onde usar na Home (alternando com seções tipográficas): **Princípios** (§5.5) e, opcionalmente, **Evolução** (§5.4) no lugar da escada. Serviços, FAQ, hero e fechamento permanecem tipográficos.

## 5. Layout da Home (seção por seção)

Cada seção é um componente em `features/site/home/sections/`. Alinhamentos abaixo são intenção, não receita mecânica.

### 5.1 Hero — âncora à esquerda
- Eyebrow (mono) na col. 1–4.
- h1 `text-9xl`, col. 1–9 (7 a 9 colunas), 3–4 linhas; palavras-chave em `<strong>`.
- Texto de apoio (`text-lg`, ≤ 5 col.) deslocado: col. 8–12, linha abaixo, com `mt` generoso.
- CTA primário "Apresentar projeto" na col. 1–3, abaixo; o secundário é um link tertiary, não um botão do mesmo peso.
- Imagem: nenhuma. Espaço: `--space-section-l` abaixo.

### 5.2 Problema — deslocado para a direita
- h2 `text-6xl`, col. 4–12 (deslocado à direita, em contraste com o hero).
- Corpo curto na col. 4–8, abaixo. Espaço: `--space-section-s` (seção curta, quase uma pausa).

### 5.3 Serviços — Carbon, composição horizontal e alternada
- Fundo `.surface-dark`. h2 `text-7xl`, col. 1–8.
- Cada serviço é um `<article>` com h3 e linha fina (`border-t`) acima; sem card, sem ícone.
- Alternância intencional: serviço 1 título col. 1–5 / texto col. 7–12; serviço 2 invertido (texto col. 1–5, título col. 8–12); serviço 3 título em largura de 8 col. com texto abaixo e recuado em col. 5–10; 4 e 5 retomam esquerda e direita. Pontos-chave como lista tipográfica com `—`, sem bullets decorativos.
- Espaço entre serviços irregular: alternar `--space-section-s` e `--space-section-m`.

### 5.4 Evolução do projeto — degraus (exceção controlada de cards)
- O conteúdo foi pedido em cards: manter 4 etapas, mas **não como grid de cards iguais**. Escada diagonal: cada etapa desce um degrau (`mt` crescente) e ocupa 3 col. (col. 1, 4, 7, 10). Sem sombra, sem preenchimento; borda fina superior em Slate. Só a última (ERP) usa `.card-secondary` (Carbon) como destino.
- Alternativa bento (§4.1), se a escada pesar: 4 blocos desiguais (LP col. 1–4, Integrações col. 5–12, CRM col. 1–8, ERP col. 9–12 em Carbon). Escolher uma das duas formas, não ambas.
- Numeração em mono (`01`–`04`). h2 em col. 1–8, texto de apoio em col. 9–12 ao lado.

### 5.5 Princípios — retorno à esquerda, faixa White, bento
- h2 col. 1–5 acima do mosaico (ou ao lado em `lg`). Mosaico bento (§4.1) com 3 princípios + 1 bloco de fechamento: Sob medida col. 1–7 (2 linhas, bloco dominante, Carbon), Integrado col. 8–12 (1 linha, Paper com borda), Evolutivo col. 8–12 (1 linha, White com borda), frase de síntese col. 1–7 (1 linha, Signal ou Paper). Sem divisórias pesadas.

### 5.6 FAQ — coluna deslocada
- h2 col. 1–4 (fixo ao rolar em `md+` com `position: sticky`, sem JS); `details`/`summary` em col. 6–12.
- Resposta ≤ 62ch. Indicador `+` em mono.

### 5.7 Fechamento — Carbon, composição única centralizada
- Única seção centralizada, por ser o encerramento. h2 `text-8xl` em col. 2–11, CTA primário abaixo. Espaço: `--space-section-l`.

### Imagens (slots opcionais)
Nenhuma é necessária. Se vierem a existir (fotos reais, telas reais de produto autorizadas), entram grandes e raras: no máximo duas na Home, 7–8 col., sangrando para a margem, sem moldura, sem sombra. Não usar imagens abstratas de tecnologia nem mockups inventados.

## 6. Componentes

Elementos puramente visuais são classes em `@layer components`; componentes Angular só com estado ou comportamento.

| Elemento | Definição |
|---|---|
| **Nav** (`<header>`) | Fixa e transparente sobre Paper, sem blur. Wordmark à esquerda (`Optional` + `<>` em Signal), links em `text-base` normal case (sem uppercase), alinhados à direita; um único CTA tertiary. Em mobile, abre o drawer (`<dialog>`). |
| **Botão** | `.btn` com `rounded-xs`, normal case. `.btn-primary`: fundo Signal, texto Carbon. `.btn-secondary`: contorno 1px. `.btn-tertiary`: texto com sublinhado fino. Um primário por tela. Sem `rounded-full`. |
| **Link** | Sublinhado de 1px com `underline-offset-4`; hover troca a cor do sublinhado para Signal. Foco: outline Signal de 2px. |
| **Hero** | §5.1. Sem imagem, sem gradiente, sem centralização. |
| **Bloco de texto com destaque** | Título uppercase com `<strong>` nas palavras-chave (Carbon sobre Slate) ao lado do corpo em outra coluna. É o padrão base de toda seção. |
| **Eyebrow** | `.eyebrow`, mono, uppercase, `tracking-widest`; no máximo um por seção. |
| **Footer** (`<footer>`) | Carbon. Wordmark grande (`text-8xl`) à esquerda, links institucionais em lista simples na col. 8–12, linha legal pequena. Sem ícones sociais decorativos. |

Tokens de componente a acrescentar: `--radius-button` (alias de `rounded-xs`), `--line-hairline: 1px`, `--color-line: color-mix(in oklab, var(--color-carbon) 15%, transparent)` (linhas finas derivadas da paleta, sem nova cor).

## 7. Motion

Sutil e funcional, via serviço `Gsap` (componentes não importam `gsap`): fade + translate vertical de 12–24px, 0,6–0,8 s, `ease: power2.out`, disparado uma vez ao entrar na viewport. Títulos: revelação por linha (`appReveal="lines"`). Listas: stagger de 0,06 s. Sem parallax, sem scrub, sem hover chamativo (hover só altera cor ou sublinhado). Tudo dentro de `prefers-reduced-motion: no-preference`; com redução, o conteúdo aparece direto e sem deslocamento. Conteúdo nunca fica invisível se o JS falhar (SSR).

## 8. Responsivo

- Abaixo de `md`: 1 coluna, alinhado à esquerda; a assimetria vira **recuo** (`pl-gutter` extra ou `ml-auto` em blocos de apoio) em vez de colunas.
- Texto de apoio desloca-se com `ml-auto` e largura de ~80% quando a ordem original o colocava à direita.
- Degraus da evolução viram lista vertical com recuo crescente (0, 1, 2, 3 níveis).
- FAQ: título sobre as perguntas, sem sticky.
- Display escala só por `clamp()`; sem quebras manuais de linha. Mínimo `text-6xl` ≈ 36px no h1; sem overflow horizontal de 360px a 1920px.
- Áreas de toque ≥ 44px; espaços de seção usam os mesmos tokens fluidos.

## 9. Anti-padrões proibidos

- Gradientes (especialmente roxo/azul), glassmorphism, `backdrop-blur`.
- Grid de cards ou de bento com blocos iguais; caixas em volta de cada bloco; bento em mais de 2 seções.
- Hero centralizado com dois botões de igual peso.
- Ícones decorativos, emojis como ícone, ilustrações genéricas de tecnologia.
- Sombras pesadas (`shadow-lg` ou maior); no máximo borda fina.
- Uppercase em corpo, botões ou navegação; `rounded-full` em botões.
- Signal como cor de texto corrido ou em mais de dois pontos por tela.
- Segunda escala tipográfica; valores hex fora de `@theme`; CSS por componente.
- Números, depoimentos, logos de clientes ou cases não validados.

## Pendências

- Aprovar o corte de Geist e a troca para Bricolage única (e, se desejado, o arquivo com eixos `opsz`/`wdth`).
- Definir se IBM Plex Mono entra agora ou apenas quando houver necessidade real.
- Canal de contato (`CONTACT_URL`) e domínio (`SITE_URL`) seguem indefinidos.
- Execução do skill `design-taste-frontend` (script `draw.mjs` e inspeção no navegador) ficou para a etapa de implementação; este documento só registra a direção.
