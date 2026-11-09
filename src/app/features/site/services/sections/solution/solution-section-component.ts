import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';
import { CASES } from '../../../cases/case-content';
import { ServiceContent } from '../../service-content';

// Solução e experiência da página de serviço: composição bento que explica o serviço e, quando existe, liga ao case real correspondente.
@Component({
  selector: 'app-service-solution-section',
  imports: [Reveal, RouterLink],
  templateUrl: './solution-section-component.html',
})
export class SolutionSectionComponent {
  // Atributos
  readonly service = input.required<ServiceContent>();
  protected readonly project = computed(() => CASES.find(c => c.slug === this.service().solution.caseSlug));
  protected readonly image = computed(() => {
    const project = this.project();
    return project?.service === this.service().slug ? { src: project.heroImage, alt: `Projeto ${project.project}` } : { src: this.service().image, alt: '' };
  });
}
