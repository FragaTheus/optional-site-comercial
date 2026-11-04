import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_URL } from '../../../../../core/site.config';
import { Reveal } from '../../../../../shared/directives/reveal';
import { ServiceContent } from '../../service-content';

// Abertura da página de serviço: trilha de navegação, h1 alinhado à busca, introdução objetiva e CTAs.
@Component({
  selector: 'app-service-hero-section',
  imports: [Reveal, RouterLink],
  templateUrl: './hero-section-component.html',
})
export class HeroSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
  protected readonly contactUrl = CONTACT_URL;
}
