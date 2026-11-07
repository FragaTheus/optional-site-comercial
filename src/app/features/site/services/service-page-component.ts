import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gsap } from '../../../core/gsap';
import { Seo } from '../../../core/seo';
import { SITE_URL } from '../../../core/site.config';
import { SERVICES, ServiceContent } from './service-content';
import { AboutSectionComponent } from './sections/about/about-section-component';
import { ApplicationsSectionComponent } from './sections/applications/applications-section-component';
import { CapabilitiesSectionComponent } from './sections/capabilities/capabilities-section-component';
import { CtaSectionComponent } from './sections/cta/cta-section-component';
import { DifferentialsSectionComponent } from './sections/differentials/differentials-section-component';
import { FaqSectionComponent } from './sections/faq/faq-section-component';
import { CtaSectionComponent as SharedCtaSectionComponent } from '../../../shared/components/cta-section/cta-section-component';
import { HeroSectionComponent } from './sections/hero/hero-section-component';
import { RelatedSectionComponent } from './sections/related/related-section-component';

// Página satélite de serviço (/servicos/:slug): escolhe o conteúdo pelo `slug` da rota, compõe as seções, define SEO e dados estruturados e aciona as animações. Orientada à intenção de busca, não à narrativa da homepage.
@Component({
  selector: 'app-service-page',
  imports: [HeroSectionComponent, AboutSectionComponent, ApplicationsSectionComponent, CapabilitiesSectionComponent, DifferentialsSectionComponent, RelatedSectionComponent, FaqSectionComponent, CtaSectionComponent, SharedCtaSectionComponent],
  templateUrl: './service-page-component.html',
})
export class ServicePageComponent {
  // Atributos
  protected readonly service: ServiceContent = SERVICES.find(s => s.slug === inject(ActivatedRoute).snapshot.data['slug'])!;

  // Construtores
  constructor() {
    const { slug, title, description, label, faq } = this.service;
    const path = `/servicos/${slug}`;
    const provider = { '@type': 'Organization', name: 'Optional', ...(SITE_URL && { url: SITE_URL }) };
    inject(Seo).set(title, description, path, [
      { '@type': 'Service', name: label, description, provider, ...(SITE_URL && { url: SITE_URL + path }) },
      { '@type': 'FAQPage', mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      ...(SITE_URL ? [{ '@type': 'BreadcrumbList', itemListElement: [{ name: 'Início', url: SITE_URL + '/' }, { name: label, url: SITE_URL + path }].map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: item.url })) }] : []),
    ]);
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const gsap = inject(Gsap);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() =>
      destroyRef.onDestroy(gsap.run(host, () => host.querySelectorAll('[data-stagger]').forEach(el => gsap.stagger(el, el.getAttribute('data-stagger')!)))),
    );
  }
}
