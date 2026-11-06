import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';

// Apresenta o escopo da página de soluções.
@Component({
  selector: 'app-services-hub-hero-section',
  imports: [Reveal],
  templateUrl: './hero-section-component.html',
})
export class HeroSectionComponent {}
