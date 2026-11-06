import { Component, inject } from '@angular/core';
import { Seo } from '../../../core/seo';
import { CtaSectionComponent } from '../cases/sections/cta/cta-section-component';
import { HeroSectionComponent } from './sections/hero/hero-section-component';
import { ProjectsSectionComponent } from './sections/projects/projects-section-component';

// Compõe o hub de cases e configura seus metadados.
@Component({
  selector: 'app-cases-hub-page',
  imports: [HeroSectionComponent, ProjectsSectionComponent, CtaSectionComponent],
  templateUrl: './cases-hub-page-component.html',
})
export class CasesHubPageComponent {
  constructor() {
    inject(Seo).set('Cases de software e sites | Optional', 'Conheça projetos desenvolvidos pela Optional: sites comerciais, CRM e sistemas de gestão para diferentes necessidades.', '/cases');
  }
}
