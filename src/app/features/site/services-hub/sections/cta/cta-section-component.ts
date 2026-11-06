import { Component } from '@angular/core';
import { BtnCtaComponent } from '../../../../../shared/components/btn-cta/btn-cta-component';
import { Reveal } from '../../../../../shared/directives/reveal';

// Encerra o hub de serviços com o canal comercial da Optional.
@Component({
  selector: 'app-services-hub-cta-section',
  imports: [BtnCtaComponent, Reveal],
  templateUrl: './cta-section-component.html',
})
export class CtaSectionComponent {}
