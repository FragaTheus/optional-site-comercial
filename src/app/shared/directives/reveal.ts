import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';
import { Gsap } from '../../core/gsap';

// Anima o texto do elemento ao entrar na viewport ('lines' para headings, 'fade' para parágrafos), via serviço Gsap.
@Directive({ selector: '[appReveal]' })
export class Reveal {
  // Atributos
  readonly appReveal = input<'lines' | 'fade' | ''>('fade');
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly gsap = inject(Gsap);
  private readonly destroyRef = inject(DestroyRef);

  // Construtores
  constructor() {
    afterNextRender(() =>
      this.destroyRef.onDestroy(this.gsap.run(this.el, () => (this.appReveal() === 'lines' ? this.gsap.lines(this.el) : this.gsap.fade(this.el, this.el)))),
    );
  }
}
