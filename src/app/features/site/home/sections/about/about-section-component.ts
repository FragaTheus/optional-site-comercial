import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';

// Apresenta a Optional e três aspectos da sua abordagem de desenvolvimento.
@Component({
  selector: 'app-about-section',
  imports: [Reveal],
  templateUrl: './about-section-component.html',
})
export class AboutSectionComponent {}
