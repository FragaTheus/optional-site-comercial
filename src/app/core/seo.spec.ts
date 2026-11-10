import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { CASES } from '../features/site/cases/case-content';
import { PROMOTIONS } from '../features/site/promotions/promotion-content';
import { SERVICES } from '../features/site/services/service-content';
import { Seo } from './seo';
import { SITE_URL } from './site.config';

describe('Seo', () => {
  afterEach(() => {
    TestBed.inject(DOCUMENT).head.querySelectorAll(
      'link[rel="canonical"], script[type="application/ld+json"], meta[property^="og:"], meta[name^="twitter:"], meta[name="description"], meta[name="robots"]',
    ).forEach(element => element.remove());
  });

  it('updates search and social metadata without duplicate tags', () => {
    const seo = TestBed.inject(Seo);
    seo.set('Título anterior', 'Descrição anterior', '/anterior', [], { noindex: true });
    seo.set('Título atual', 'Descrição atual', '/atual', [], { image: '/solutions/automation.png' });
    const document = TestBed.inject(DOCUMENT);
    const meta = TestBed.inject(Meta);

    expect(TestBed.inject(Title).getTitle()).toBe('Título atual');
    for (const selector of ['name="description"', 'property="og:description"', 'name="twitter:description"']) {
      expect(meta.getTags(selector)).toHaveLength(1);
      expect(meta.getTag(selector)?.content).toBe('Descrição atual');
    }
    expect(meta.getTag('property="og:title"')?.content).toBe('Título atual');
    expect(meta.getTag('name="twitter:title"')?.content).toBe('Título atual');
    expect(meta.getTag('property="og:url"')?.content).toBe(SITE_URL + '/atual');
    expect(meta.getTag('property="og:locale"')?.content).toBe('pt_BR');
    expect(meta.getTag('property="og:image"')?.content).toBe(SITE_URL + '/solutions/automation.png');
    expect(meta.getTag('name="twitter:image"')?.content).toBe(SITE_URL + '/solutions/automation.png');
    expect(meta.getTag('name="twitter:card"')?.content).toBe('summary_large_image');
    expect(meta.getTag('name="robots"')).toBeNull();
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(SITE_URL + '/atual');
  });

  it('replaces structured data and clears obsolete images and graph on navigation', () => {
    const seo = TestBed.inject(Seo);
    const document = TestBed.inject(DOCUMENT);
    const meta = TestBed.inject(Meta);
    seo.set('Serviço', 'Descrição', '/servico', [{ '@type': 'Service', name: 'Anterior' }], { image: '/solutions/automation.png' });
    const graph = [{ '@type': 'Organization', name: 'Optional' }];
    seo.set('Início', 'Descrição', '/', graph);

    expect(document.head.querySelectorAll('script[type="application/ld+json"]')).toHaveLength(1);
    expect(JSON.parse(document.head.querySelector('script[type="application/ld+json"]')!.textContent!)).toEqual({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
    expect(meta.getTag('property="og:image"')).toBeNull();
    expect(meta.getTag('name="twitter:image"')).toBeNull();
    expect(meta.getTag('name="twitter:card"')?.content).toBe('summary');

    seo.set('Campanha encerrada', 'Descrição', '/campanha', [], { noindex: true });
    expect(meta.getTag('name="robots"')?.content).toBe('noindex,follow');
    expect(document.head.querySelector('script[type="application/ld+json"]')).toBeNull();
  });

  it('keeps content metadata unique, concise and specific to each page', () => {
    const pages = [...SERVICES, ...CASES, ...PROMOTIONS.map(promotion => promotion.seo)];
    expect(new Set(pages.map(page => page.title)).size).toBe(pages.length);
    expect(new Set(pages.map(page => page.description)).size).toBe(pages.length);
    for (const page of pages) {
      expect(page.title.length, page.title).toBeGreaterThanOrEqual(45);
      expect(page.title.length, page.title).toBeLessThanOrEqual(60);
      expect(page.description.length, page.title).toBeGreaterThanOrEqual(140);
      expect(page.description.length, page.title).toBeLessThanOrEqual(160);
      expect(page.title).toContain('Optional');
    }
    for (const service of SERVICES) expect(service.title.toLowerCase()).toContain(service.keyword);
  });
});
