import { DestroyRef, Component, ElementRef, afterNextRender, inject, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gsap } from '../../../core/gsap';
import { CONTACT_URL, NAV_LINKS } from '../../../core/site.config';

// Header sticky: navegação principal e botão do drawer; inverte as cores conforme o fundo da seção que passa por baixo dele (escuro sobre fundo claro e vice-versa).
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  host: { class: 'sticky top-0 z-40 block px-gutter pt-3', '(window:scroll)': 'sync()', '(window:resize)': 'sync()' },
})
export class Header {
  // Atributos
  readonly menuOpen = output<void>();
  protected readonly links = NAV_LINKS;
  protected readonly contactUrl = CONTACT_URL;
  protected readonly overDark = signal(false);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly gsap = inject(Gsap);

  // Construtores
  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      destroyRef.onDestroy(this.gsap.run(this.el, () => this.gsap.intro(this.el)));
      this.sync();
    });
  }

  // Métodos
  protected sync(): void {
    const { top, height } = this.el.firstElementChild!.getBoundingClientRect();
    const below = document.elementsFromPoint(window.innerWidth / 2, top + height / 2).find(e => !this.el.contains(e));
    this.overDark.set(!!below?.closest('.surface-dark'));
  }
}
