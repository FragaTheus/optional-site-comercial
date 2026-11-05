import { Component } from '@angular/core';
import { Reveal } from '../../../../../shared/directives/reveal';

interface IProof {
  value: string;
  label: string;
}

// Prova social da homepage: apresenta os números validados logo após a abertura.
@Component({
  selector: 'app-socialproof-section',
  imports: [Reveal],
  templateUrl: './socialproof-section-component.html',
})
export class SocialproofSectionComponent {
  // Atributos
  protected readonly proofs: IProof[] = [
    { value: '12', label: 'operações consideradas' },
    { value: '367h', label: 'de economia potencial por mês' },
    { value: '4.400h', label: 'de economia potencial por ano' },
  ];
}
