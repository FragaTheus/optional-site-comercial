import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seo } from '../../../core/seo';
import { SITE_URL } from '../../../core/site.config';
import { CASES } from './case-content';
import { HeroSectionComponent } from './sections/hero/hero-section-component';
import { BeforeSectionComponent } from './sections/before/before-section-component';
import { AfterSectionComponent } from './sections/after/after-section-component';
import { BridgeSectionComponent } from './sections/bridge/bridge-section-component';
import { CtaSectionComponent } from '../../../shared/components/cta-section/cta-section-component';

// Compõe as seções de um case e configura seus metadados comerciais.
@Component({
  selector: 'app-case-page',
  imports: [HeroSectionComponent, BeforeSectionComponent, AfterSectionComponent, BridgeSectionComponent, CtaSectionComponent],
  templateUrl: './case-page-component.html',
})
export class CasePageComponent {
  protected readonly caseStudy = CASES.find(item => item.slug === inject(ActivatedRoute).snapshot.data['slug'])!;

  constructor() {
    const { slug, title, description, project, heroImage } = this.caseStudy;
    const url = `${SITE_URL}/cases/${slug}`;
    inject(Seo).set(title, description, `/cases/${slug}`, [
      {
        '@type': 'CreativeWork',
        name: title,
        description,
        url,
        image: SITE_URL + heroImage,
        creator: { '@type': 'Organization', name: 'Optional', url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_URL + '/' },
          { '@type': 'ListItem', position: 2, name: project, item: url },
        ],
      },
    ], { image: heroImage });
  }
}
