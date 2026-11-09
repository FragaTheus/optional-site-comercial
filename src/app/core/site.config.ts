/** Canal de contato dos CTAs: WhatsApp da Optional (DDI 55 + 11974479570). A mensagem é anexada por `BtnCtaComponent`. */
export const CONTACT_URL = 'https://wa.me/5511974479570';

/** URL pública canônica (sem barra final). PROVISÓRIA (domínio de deploy atual): trocar aqui, em `public/sitemap.xml` e em `public/robots.txt` quando o domínio definitivo existir. */
export const SITE_URL = 'https://optional-site-comercial-eyx6.vercel.app';

/** Frentes comerciais: fonte única de slugs e nomes para rotas, navegação, homepage, cases e links internos. `label` é o nome curto de navegação; `front`, o nome comercial da frente. */
export const SERVICE_LINKS = [
  { slug: 'sites', label: 'Sites e landing pages', front: 'Experiência e qualificação comercial' },
  { slug: 'automacoes', label: 'Automações e Integrações', front: 'Automações e Integrações' },
  { slug: 'sistemas', label: 'Sistemas personalizados', front: 'Sistemas personalizados' },
  {
    slug: 'terceirizacao-de-fluxos',
    label: 'Terceirização de fluxos',
    front: 'Terceirização de fluxos',
  },
] as const;

export type ServiceSlug = (typeof SERVICE_LINKS)[number]['slug'];
