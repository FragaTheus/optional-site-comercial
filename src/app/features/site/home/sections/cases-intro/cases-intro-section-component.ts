import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';

// Introduz os projetos e direciona à seleção de cases.
@Component({
  selector: 'app-cases-intro-section',
  imports: [Reveal, RouterLink],
  templateUrl: './cases-intro-section-component.html',
})
export class CasesIntroSectionComponent {}
