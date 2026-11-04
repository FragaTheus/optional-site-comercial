import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { Gsap } from '../../core/gsap';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CONTACT_URL, NAV_LINKS } from '../../core/site.config';

// Shell institucional: header, conteúdo da rota, footer e drawer (dialog) em um só lugar, para as páginas não repetirem a estrutura.
@Component({
  selector: 'app-main-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './main-layout.html',
})
export class MainLayout {
  // Atributos
  protected readonly links = NAV_LINKS;
  protected readonly contactUrl = CONTACT_URL;
  protected readonly year = new Date().getFullYear();
  private readonly drawer = viewChild.required<ElementRef<HTMLDialogElement>>('drawer');
  private readonly header = viewChild.required<ElementRef<HTMLElement>>('header');
  private readonly gsap = inject(Gsap);

  // Construtores
  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => destroyRef.onDestroy(this.gsap.run(this.header().nativeElement, () => this.gsap.intro(this.header().nativeElement))));
  }

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
