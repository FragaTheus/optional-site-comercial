import { Component, input } from '@angular/core';
import { BtnCtaComponent } from '../../../../../shared/components/btn-cta/btn-cta-component';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Abertura da página de serviço: trilha de navegação, h1 alinhado à busca, introdução objetiva e CTAs.
@Component({
  selector: 'app-service-hero-section',
  imports: [Reveal, RouterLink, BtnCtaComponent],
  templateUrl: './hero-section-component.html',
})
export class HeroSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
}
