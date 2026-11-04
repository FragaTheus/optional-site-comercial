import { Component } from '@angular/core';
import { CONTACT_URL } from '../../../../core/site.config';
import { Reveal } from '../../../../shared/directives/reveal';

// Encerramento da homepage: convida o visitante a iniciar a conversa.
@Component({
  selector: 'app-closing-section',
  imports: [Reveal],
  templateUrl: './closing-section-component.html',
})
export class ClosingSectionComponent {
  // Atributos
  protected readonly contactUrl = CONTACT_URL;
}
