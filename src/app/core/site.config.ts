/** Destino dos CTAs. PENDENTE: definir o canal real de contato (formulário, e-mail ou WhatsApp). Páginas de serviço expõem `#contato` na seção final. */
export const CONTACT_URL = '#contato';

/** URL pública canônica (sem barra final). PROVISÓRIA (domínio de deploy atual): trocar aqui, em `public/sitemap.xml` e em `public/robots.txt` quando o domínio definitivo existir. */
export const SITE_URL = 'https://optional-site-comercial-eyx6.vercel.app';

/** Páginas satélites de serviço: fonte única de slugs e nomes para rotas, footer e links internos. */
export const SERVICE_LINKS = [
  { slug: 'sites', label: 'Sites comerciais' },
  { slug: 'landing-pages', label: 'Landing pages' },
  { slug: 'crm', label: 'CRM personalizado' },
  { slug: 'automacoes', label: 'Automações e integrações' },
  { slug: 'erp', label: 'ERP e sistemas de gestão' },
] as const;

export type ServiceSlug = (typeof SERVICE_LINKS)[number]['slug'];
