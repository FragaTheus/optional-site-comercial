/** Destino dos CTAs. PENDENTE: definir o canal real de contato (formulário, e-mail ou WhatsApp). */
export const CONTACT_URL = '#contato';

/** URL pública canônica (sem barra final). PENDENTE: definir o domínio; vazio desativa canonical/og:url. */
export const SITE_URL = '';

export const NAV_LINKS = [
  { label: 'Serviços', fragment: 'servicos' },
  { label: 'Evolução', fragment: 'evolucao' },
  { label: 'Perguntas', fragment: 'faq' },
  { label: 'Contato', fragment: 'contato' },
] as const;
