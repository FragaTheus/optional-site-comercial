import { Component, input } from '@angular/core';
import { BtnCtaComponent } from '../../../../../shared/components/btn-cta/btn-cta-component';
import { BreadcrumbComponent } from '../../../../../shared/components/breadcrumb/breadcrumb-component';
import { PageHeroComponent } from '../../../../../shared/components/page-hero/page-hero-component';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Abertura da página de serviço: trilha de navegação, h1 alinhado à busca, introdução objetiva, CTA e imagem do serviço.
@Component({
  selector: 'app-service-hero-section',
  imports: [Reveal, PageHeroComponent, BreadcrumbComponent, BtnCtaComponent],
  templateUrl: './hero-section-component.html',
})
export class HeroSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
}
