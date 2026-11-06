import { Component, ElementRef, viewChild } from '@angular/core';
import { LogoComponent } from '../logo/logo-component';
import { SiteNavigationComponent } from '../site-navigation/site-navigation-component';

// Controla o diálogo de navegação, incluindo abertura, fechamento e clique no backdrop.
@Component({
  imports: [LogoComponent, SiteNavigationComponent],
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer-component.html',
  host: { class: 'block' },
})
export class MenuDrawerComponent {
  // Atributos
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  // Métodos
  protected open(): void {
    this.dialog().nativeElement.showModal();
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  protected closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close();
  }
}
