import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CASES } from '../../../cases/case-content';

// Destaca cases publicadose direciona à seleção completa.
@Component({
  selector: 'app-cases-intro-section',
  imports: [Reveal, RouterLink],
  templateUrl: './cases-intro-section-component.html',
})
export class CasesIntroSectionComponent {
  protected readonly cases = CASES.filter(({ slug }) =>
    ['caldeiraria-realiza', 'simtese', 'lalouise'].includes(slug),
  );
}
