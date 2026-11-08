/** Canal de contato dos CTAs: WhatsApp da Optional (DDI 55 + 11974479570). A mensagem é anexada por `BtnCtaComponent`. */
export const CONTACT_URL = 'https://wa.me/5511974479570';

/** URL pública canônica (sem barra final). PROVISÓRIA (domínio de deploy atual): trocar aqui, em `public/sitemap.xml` e em `public/robots.txt` quando o domínio definitivo existir. */
export const SITE_URL = 'https://optional-site-comercial-eyx6.vercel.app';

/** Páginas satélites de serviço: fonte única de slugs e nomes para rotas, footer e links internos. */
export const SERVICE_LINKS = [
  { slug: 'sites', label: 'Sites comerciais' },
  { slug: 'crm', label: 'CRM personalizado' },
  { slug: 'automacoes', label: 'Automações e integrações' },
  { slug: 'erp', label: 'ERP e sistemas de gestão' },
] as const;

export type ServiceSlug = (typeof SERVICE_LINKS)[number]['slug'];
