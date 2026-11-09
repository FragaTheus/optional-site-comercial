import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seo } from '../../../core/seo';
import { CASES } from './case-content';
import { HeroSectionComponent } from './sections/hero/hero-section-component';
import { BeforeSectionComponent } from './sections/before/before-section-component';
import { AfterSectionComponent } from './sections/after/after-section-component';
import { BridgeSectionComponent } from './sections/bridge/bridge-section-component';
import { CtaSectionComponent } from './sections/cta/cta-section-component';

// Compõe as seções de um case e configura seus metadados comerciais.
@Component({
  selector: 'app-case-page',
  imports: [HeroSectionComponent, BeforeSectionComponent, AfterSectionComponent, BridgeSectionComponent, CtaSectionComponent],
  templateUrl: './case-page-component.html',
})
export class CasePageComponent {
  protected readonly caseStudy = CASES.find(item => item.slug === inject(ActivatedRoute).snapshot.data['slug'])!;

  constructor() {
    inject(Seo).set(this.caseStudy.title, this.caseStudy.description, `/cases/${this.caseStudy.slug}`);
  }
}
