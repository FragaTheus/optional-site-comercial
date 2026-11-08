# Instruções do Copilot — Optional

Optional: empresa de software e infraestrutura digital sob medida (CRM, ERP/gestão, automações e integrações, sites comerciais e landing pages como uma mesma frente de presença digital). Não é agência de marketing nem portfólio pessoal. Sem promessas de vendas/faturamento, sem resultados, números ou depoimentos inventados.

Leia antes de trabalhar: `README.md`, `docs/copyright.md` (**obrigatório para qualquer texto**: copywriting, direção editorial e SEO; homepage = narrativa progressiva, satélites = intenção de busca), `docs/ART_DIRECTION.md`, `docs/FRONTEND_STANDARDS.md`, `docs/ARCHITECTURE.md`. Skills: `optional-web-design`, `optional-copywriting` (`.github/skills`), e as externas `angular-developer`, `tailwind-best-practices`, `frontend-design` (`.agents/skills`). Regras da Optional prevalecem sobre sugestões das skills externas.

## Estado do projeto
Angular 22 + Tailwind 4 (confirme em `package.json`). Existem: MainLayout, Home e quatro páginas satélites `/servicos/{crm,erp,automacoes,sites}` (`features/site/services`; conteúdo em `service-content.ts`, slugs em `SERVICE_LINKS`). A página de sites também cobre landing pages; não crie uma rota separada para esse formato. Não implemente CRM, dashboard, autenticação ou área interna sem pedido explícito.

## Arquitetura
**Páginas divididas em componentes (obrigatório):** cada página é um componente de página (`<nome>-page-component.ts/.html`) que só compõe seções, define SEO e orquestra animações; cada seção é um componente em pasta própria dentro de `sections/` (`sections/<nome>/<nome>-section-component.ts/.html`). Nunca deixe todas as seções em um arquivo. Ex.: `features/site/home/home-page-component.*` + `features/site/home/sections/hero/hero-section-component.*`.
Features em `src/app/`: `core/`, `layouts/main-layout/`, `shared/components/`, `features/site/` (público, indexável, SEO) e `features/concepts/` (`/concept/:slug`, layout próprio, `noindex`, fora do sitemap e da navegação; sem dados confidenciais; não bloquear no robots.txt). Header, footer e drawer (`<dialog>`) vivem só no MainLayout, com `RouterOutlet`. Não reorganize código funcional sem necessidade; evite abstrações prematuras.

## Tailwind / CSS (obrigatório; alvo v4)
- Sem CSS arbitrário ou por componente, SCSS visual, `style=""` ou libs de UI externas. Exceções: justificar antes.
- Ordem: classes globais existentes → utilities Tailwind → nova classe em `@layer components` justificada.
- Arquivo global único (`src/styles.css`): `@import "tailwindcss"`, `@theme`, `@layer base`, `@layer components`.
- Tokens: carbon `#111315`, paper `#F3F1EB`, signal `#FF5930`, slate `#74797D`, white `#FFFFFF`. Paleta imutável; sem hex nos templates; texto pequeno cinza = carbon com opacidade quando slate não tiver contraste.
- Tipografia fluida: `--text-*` com `clamp()` em `@theme`, mantendo nomes `text-xs`…`text-9xl` e máximos nominais; sem escala paralela nem `<br>` responsivo. Headings: Bricolage Grotesque, uppercase, slate, com palavras-chave em `<strong>` (carbon; white em `.surface-dark`/`.card-secondary`) via `@layer base`; sempre destaque as palavras-chave de cada heading.
- `--spacing-gutter: clamp(1.5rem, 1rem + 1.5vw, 2.5rem)` (`px-gutter`); `--max-w-container: 100rem` (`max-w-container`); `.site-container`; `.site-grid`.
- Grid: `grid grid-cols-1 md:grid-cols-12` com `col-span/start/end`.
- Classes visuais: `.btn` + `.btn-primary|secondary|tertiary`, `.card` + `.card-primary|secondary|tertiary`, `.site-container`, `.site-grid`. Botões sempre `rounded-xs`, nunca `rounded-full`. Uppercase em headings, labels de input, eyebrows e small text identificador; nunca em corpo, botões ou navegação.
- Elemento só visual = classe global, não componente. Componente Angular só com estado, comportamento, I/O, interação ou reutilização funcional; prefira HTML nativo.
- Reutilize antes de criar; não duplique definições.

## Design
Direção de arte obrigatória: minimalista, premium, tipográfica, assimétrica (intencional, dentro do grid), muito espaço negativo, sem gradientes decorativos, glassmorphism, imagens abstratas de tecnologia ou hero genérico de SaaS. Funciona sem imagens. Motion discreto com GSAP apenas via serviço `Gsap` (`core/gsap.ts`) e diretiva `appReveal`; nunca importar `gsap` direto nos componentes; respeitar `prefers-reduced-motion`. Acessibilidade sempre.

## Código
- Conciso: menos linhas sem perder clareza; sem variáveis intermediárias sem reutilização/ganho de legibilidade; sem dependências sem justificativa nem arquivos excessivamente fragmentados.
- Toda classe tem comentário imediatamente acima (responsabilidade e problema resolvido); dentro dela: atributos, construtores, métodos. Sem comentário em cada método.
- Antes de alterar código usado em 2+ locais (inclui CSS compartilhado, tokens, componentes globais): identificar locais, comunicar impactos, explicar a mudança, só então alterar.
- Angular: versão instalada, APIs modernas oficiais, style guide, reatividade, change detection, lazy loading, performance, acessibilidade.
- SEO nas páginas comerciais: title, description, canonical, Open Graph, HTML semântico, links internos, sitemap.
- Segurança: sem secrets no frontend; sem informações confidenciais de prospects.
