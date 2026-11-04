import { DestroyRef, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Único ponto de acesso ao GSAP: registra plugins, ignora o servidor (SSR) e respeita prefers-reduced-motion, para componentes e diretivas só descreverem o movimento.
@Injectable({ providedIn: 'root' })
export class Gsap {
  // Atributos
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID)) && typeof window.matchMedia === 'function';

  // Construtores
  constructor() {
    if (this.browser) gsap.registerPlugin(ScrollTrigger, SplitText);
  }

  // Métodos
  /** Executa `animate` dentro de `scope` só com movimento permitido; retorna a função que desfaz tudo. */
  run(scope: Element, animate: () => void): () => void {
    if (!this.browser) return () => {};
    const mm = gsap.matchMedia(scope);
    mm.add('(prefers-reduced-motion: no-preference)', () => animate());
    return () => mm.revert();
  }

  /** Revela o elemento ao entrar na viewport (fade + subida). */
  fade(targets: gsap.TweenTarget, trigger: Element, delay = 0): void {
    gsap.from(targets, { autoAlpha: 0, y: 24, duration: 0.8, delay, ease: 'power3.out', scrollTrigger: { trigger, start: 'top 85%', once: true } });
  }

  /** Revela linhas de texto com máscara ao entrar na viewport. */
  lines(el: Element): void {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: self => gsap.from(self.lines, { yPercent: 110, duration: 0.9, stagger: 0.08, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }),
    });
  }

  /** Revela filhos em sequência (cards, itens de lista). */
  stagger(container: Element, selector: string): void {
    gsap.from(container.querySelectorAll(selector), { autoAlpha: 0, y: 32, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: container, start: 'top 80%', once: true } });
  }

  /** Entrada única no carregamento (ex.: header). */
  intro(targets: gsap.TweenTarget, vars: gsap.TweenVars = {}): void {
    gsap.from(targets, { autoAlpha: 0, y: -16, duration: 0.7, ease: 'power3.out', ...vars });
  }
}
