import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../../../shared/components/breadcrumb/breadcrumb-component';
import { PageHeroComponent } from '../../../../../shared/components/page-hero/page-hero-component';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CaseContent } from '../../case-content';

// Identifica o cliente e o projeto e oferece acesso ao site e à solução.
@Component({
  selector: 'app-case-hero-section',
  imports: [Reveal, RouterLink, BreadcrumbComponent, PageHeroComponent],
  templateUrl: './hero-section-component.html',
})
export class HeroSectionComponent {
  readonly caseStudy = input.required<CaseContent>();
}
