import { Component } from '@angular/core';
import { BtnCtaComponent } from '../../../../../shared/components/btn-cta/btn-cta-component';
import { Reveal } from '../../../../../shared/directives/reveal';

// Encerramento da homepage: convida o visitante a iniciar a conversa.
@Component({
  selector: 'app-closing-section',
  imports: [Reveal, BtnCtaComponent],
  templateUrl: './closing-section-component.html',
})
export class ClosingSectionComponent {
  // Atributos
}
