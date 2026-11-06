import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

// Carrega e reproduz o vídeo só ao entrar na viewport (lazy), em loop; com prefers-reduced-motion mantém apenas o poster.
@Directive({ selector: 'video[appLazyVideo]' })
export class LazyVideo {
  // Atributos
  readonly appLazyVideo = input.required<string>();
  private readonly el = inject<ElementRef<HTMLVideoElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  // Construtores
  constructor() {
    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return this.el.pause();
        if (!this.el.getAttribute('src')) this.el.src = this.appLazyVideo();
        this.el.play().catch(() => {});
      });
      observer.observe(this.el);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
