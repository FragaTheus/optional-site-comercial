# Instruções do Copilot — Option

Option: empresa de software e infraestrutura digital sob medida (CRM, ERP/gestão, automações e integrações, landing pages, sites comerciais). Não é agência de marketing nem portfólio pessoal. Sem promessas de vendas/faturamento, sem resultados, números ou depoimentos inventados.

Leia antes de trabalhar: `README.md`, `docs/ART_DIRECTION.md`, `docs/FRONTEND_STANDARDS.md`, `docs/ARCHITECTURE.md`. Skills: `option-web-design`, `option-copywriting` (`.github/skills`), e as externas `angular-developer`, `tailwind-best-practices`, `frontend-design` (`.agents/skills`). Regras da Option prevalecem sobre sugestões das skills externas.

## Estado do projeto
Angular 22 + Tailwind 4 (confirme em `package.json`). Existem: MainLayout e Home. Não implemente CRM, dashboard, autenticação ou área interna sem pedido explícito.

## Arquitetura
Features em `src/app/`: `core/`, `layouts/main-layout/`, `shared/components/`, `features/site/` (público, indexável, SEO) e `features/concepts/` (`/concept/:slug`, layout próprio, `noindex`, fora do sitemap e da navegação; sem dados confidenciais; não bloquear no robots.txt). Header, footer e drawer (`<dialog>`) vivem só no MainLayout, com `RouterOutlet`. Não reorganize código funcional sem necessidade; evite abstrações prematuras.

## Tailwind / CSS (obrigatório; alvo v4)
- Sem CSS arbitrário ou por componente, SCSS visual, `style=""` ou libs de UI externas. Exceções: justificar antes.
- Ordem: classes globais existentes → utilities Tailwind → nova classe em `@layer components` justificada.
- Arquivo global único (`src/styles.css`): `@import "tailwindcss"`, `@theme`, `@layer base`, `@layer components`.
- Tokens: carbon `#111315`, paper `#F3F1EB`, signal `#FF5930`, slate `#74797D`, white `#FFFFFF`. Paleta imutável; sem hex nos templates; texto pequeno cinza = carbon com opacidade quando slate não tiver contraste.
- Tipografia fluida: `--text-*` com `clamp()` em `@theme`, mantendo nomes `text-xs`…`text-9xl` e máximos nominais; sem escala paralela nem `<br>` responsivo. Headings: Bricolage Grotesque, uppercase, slate, com palavras-chave em `<strong>` (carbon; white em `.surface-dark`/`.card-secondary`) via `@layer base`; sempre destaque as palavras-chave de cada heading.
- `--spacing-gutter: clamp(1.5rem, 1rem + 1.5vw, 2.5rem)` (`px-gutter`); `--max-w-container: 100rem` (`max-w-container`); `.site-container`; `.site-grid`.
- Grid: `grid grid-cols-1 md:grid-cols-12` com `col-span/start/end`.
- Classes visuais: `.btn` + `.btn-primary|secondary|tertiary`, `.card` + `.card-primary|secondary|tertiary`, `.eyebrow`, `.site-container`, `.site-grid`. Botões sempre `rounded-xs`, nunca `rounded-full`. Uppercase em headings, labels de input, eyebrows e small text identificador; nunca em corpo, botões ou navegação.
- Elemento só visual = classe global, não componente. Componente Angular só com estado, comportamento, I/O, interação ou reutilização funcional; prefira HTML nativo.
- Reutilize antes de criar; não duplique definições.

## Design
Direção de arte obrigatória: minimalista, premium, tipográfica, assimétrica (intencional, dentro do grid), muito espaço negativo, sem gradientes decorativos, glassmorphism, imagens abstratas de tecnologia ou hero genérico de SaaS. Funciona sem imagens. Motion discreto com `prefers-reduced-motion`. Acessibilidade sempre.

## Código
- Conciso: menos linhas sem perder clareza; sem variáveis intermediárias sem reutilização/ganho de legibilidade; sem dependências sem justificativa nem arquivos excessivamente fragmentados.
- Toda classe tem comentário imediatamente acima (responsabilidade e problema resolvido); dentro dela: atributos, construtores, métodos. Sem comentário em cada método.
- Antes de alterar código usado em 2+ locais (inclui CSS compartilhado, tokens, componentes globais): identificar locais, comunicar impactos, explicar a mudança, só então alterar.
- Angular: versão instalada, APIs modernas oficiais, style guide, reatividade, change detection, lazy loading, performance, acessibilidade.
- SEO nas páginas comerciais: title, description, canonical, Open Graph, HTML semântico, links internos, sitemap.
- Segurança: sem secrets no frontend; sem informações confidenciais de prospects.
