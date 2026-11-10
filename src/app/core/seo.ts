import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_URL } from './site.config';

// Centraliza title, description, Open Graph, canonical e dados estruturados (JSON-LD) das páginas comerciais.
@Injectable({ providedIn: 'root' })
export class Seo {
  // Atributos
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  // Métodos
  set(title: string, description: string, path = '/', graph: object[] = [], options: { noindex?: boolean; image?: string } = {}): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Optional' });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    if (options.noindex) this.meta.updateTag({ name: 'robots', content: 'noindex,follow' });
    else this.meta.removeTag('name="robots"');
    if (options.image) this.meta.updateTag({ property: 'og:image', content: SITE_URL + options.image });
    else this.meta.removeTag('property="og:image"');
    this.head('script[type="application/ld+json"]', 'script', el => {
      el.setAttribute('type', 'application/ld+json');
      el.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    }, graph.length > 0);
    if (!SITE_URL) return;
    const url = SITE_URL + path;
    this.meta.updateTag({ property: 'og:url', content: url });
    this.head('link[rel="canonical"]', 'link', el => {
      el.setAttribute('rel', 'canonical');
      el.setAttribute('href', url);
    }, true);
  }

  // Cria, atualiza ou remove um elemento único do <head>.
  private head(selector: string, tag: string, fill: (el: HTMLElement) => void, keep: boolean): void {
    let el = this.document.head.querySelector<HTMLElement>(selector);
    if (!keep) return el?.remove();
    el ??= this.document.head.appendChild(this.document.createElement(tag));
    fill(el);
  }
}
