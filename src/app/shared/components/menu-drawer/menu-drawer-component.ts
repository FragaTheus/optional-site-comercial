import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_URL, SERVICE_LINKS } from '../../../core/site.config';

@Component({
  imports: [RouterLink],
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer-component.html',
  host: { class: 'block' },
})
export class MenuDrawerComponent {
  // Atributos
  protected readonly services = SERVICE_LINKS;
  protected readonly contactUrl = CONTACT_URL;
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  // Métodos
  protected open(): void {
    this.dialog().nativeElement.showModal();
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  protected closeOnBackdrop(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.close();
  }
}
