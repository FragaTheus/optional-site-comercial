import { Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gsap } from '../../../core/gsap';
import { Seo } from '../../../core/seo';
import { SITE_URL } from '../../../core/site.config';
import { SERVICES, ServiceContent } from './service-content';
import { ChallengesSectionComponent } from './sections/challenges/challenges-section-component';
import { CtaSectionComponent } from '../../../shared/components/cta-section/cta-section-component';
import { HeroSectionComponent } from './sections/hero/hero-section-component';
import { ProcessSectionComponent } from './sections/process/process-section-component';
import { SolutionSectionComponent } from './sections/solution/solution-section-component';

// Página satélite de serviço (/servicos/:slug): escolhe o conteúdo pelo `slug` da rota, compõe as seções, define SEO e dados estruturados e aciona as animações. Orientada à intenção de busca, não à narrativa da homepage.
@Component({
  selector: 'app-service-page',
  imports: [HeroSectionComponent, ChallengesSectionComponent, SolutionSectionComponent, ProcessSectionComponent, CtaSectionComponent],
  templateUrl: './service-page-component.html',
})
export class ServicePageComponent {
  // Atributos
  protected readonly service: ServiceContent = SERVICES.find(s => s.slug === inject(ActivatedRoute).snapshot.data['slug'])!;

  // Construtores
  constructor() {
    const { slug, title, description, label } = this.service;
    const path = `/servicos/${slug}`;
    const provider = { '@type': 'Organization', name: 'Optional', ...(SITE_URL && { url: SITE_URL }) };
    inject(Seo).set(title, description, path, [
      { '@type': 'Service', name: label, description, provider, ...(SITE_URL && { url: SITE_URL + path }) },
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
