import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CONTACT_URL, SERVICE_LINKS } from '../../core/site.config';
import { Footer } from './footer/footer';
import { Header } from './header/header';

// Shell institucional: header, conteúdo da rota, footer e drawer (dialog) em um só lugar, para as páginas não repetirem a estrutura.
@Component({
  selector: 'app-main-layout',
  imports: [RouterLink, RouterOutlet, Header, Footer],
  templateUrl: './main-layout.html',
})
export class MainLayout {
  // Atributos
  protected readonly services = SERVICE_LINKS;
  protected readonly contactUrl = CONTACT_URL;
  private readonly drawer = viewChild.required<ElementRef<HTMLDialogElement>>('drawer');

  // Métodos
  protected open(): void {
    this.drawer().nativeElement.showModal();
  }

  protected close(): void {
    this.drawer().nativeElement.close();
  }

  protected closeOnBackdrop(event: MouseEvent): void {
    if (event.target === this.drawer().nativeElement) this.close();
  }
}
