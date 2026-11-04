import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';

// Pausa de leitura da homepage: nomeia o problema e sua consequência.
@Component({
  selector: 'app-problem-section',
  imports: [Reveal],
  templateUrl: './problem-section-component.html',
})
export class ProblemSectionComponent {}
