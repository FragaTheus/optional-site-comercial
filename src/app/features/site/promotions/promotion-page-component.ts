import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seo } from '../../../core/seo';
import { CtaSectionComponent } from '../../../shared/components/cta-section/cta-section-component';
import { PROMOTIONS } from './promotion-content';
import { PromotionHeroSectionComponent } from './sections/hero/hero-section-component';
import { PromotionConsequencesSectionComponent } from './sections/consequences/consequences-section-component';
import { PromotionSolutionSectionComponent } from './sections/solution/solution-section-component';
import { PromotionOfferSectionComponent } from './sections/offer/offer-section-component';
import { PromotionFaqSectionComponent } from './sections/faq/faq-section-component';

// Compõe as seções de uma promoção (PASTOR) a partir dos dados e configura SEO, incluindo o tratamento da campanha encerrada.
@Component({
  selector: 'app-promotion-page',
  imports: [
    PromotionHeroSectionComponent,
    PromotionConsequencesSectionComponent,
    PromotionSolutionSectionComponent,
    CtaSectionComponent,
    PromotionOfferSectionComponent,
    PromotionFaqSectionComponent,
  ],
  templateUrl: './promotion-page-component.html',
})
export class PromotionPageComponent {
  // Atributos
  protected readonly promotion = PROMOTIONS.find(item => item.slug === inject(ActivatedRoute).snapshot.data['slug'])!;
  protected readonly expired = Date.now() > Date.parse(this.promotion.expiresAt);

  // Construtores
  constructor() {
    const { seo, slug } = this.promotion;
    inject(Seo).set(seo.title, seo.description, `/promocoes/${slug}`, [], { noindex: this.expired, image: seo.image });
  }
}
