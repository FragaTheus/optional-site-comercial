import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROMOTION_LINK, SERVICE_LINKS } from '../../../core/site.config';
import { CASES } from '../../../features/site/cases/case-content';

// Compartilha a navegação institucional entre o drawer e o rodapé.
@Component({
  selector: 'app-site-navigation',
  imports: [RouterLink],
  templateUrl: './site-navigation-component.html',
  host: { class: 'block' },
})
export class SiteNavigationComponent {
  protected readonly services = SERVICE_LINKS;
  protected readonly cases = CASES;
  protected readonly promotion = PROMOTION_LINK;
  readonly linkSelected = output<void>();

  protected selectLink(event: MouseEvent): void {
    if (event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
      this.linkSelected.emit();
    }
  }
}
