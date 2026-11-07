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

  /** Revela o elemento ao entrar na viewport (fade + deslocamento a partir da sua posição na seção). */
  fade(targets: gsap.TweenTarget, trigger: Element, delay = 0): void {
    const { x, y } = this.origin(trigger, 24);
    gsap.from(targets, { autoAlpha: 0, x, y, duration: 0.8, delay, ease: 'power3.out', scrollTrigger: { trigger, start: 'top 85%', once: true } });
  }

  /** Revela linhas de texto com máscara ao entrar na viewport, vindo do lado da seção em que o texto está. */
  lines(el: Element): void {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: self => {
        const { x, y } = this.origin(el, 110);
        return gsap.from(self.lines, { xPercent: x, yPercent: y, duration: 0.9, stagger: 0.08, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      },
    });
  }

  /** Revela filhos em sequência (cards, itens de lista). */
  stagger(container: Element, selector: string): void {
    const { x, y } = this.origin(container, 32);
    gsap.from(container.querySelectorAll(selector), { autoAlpha: 0, x, y, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: container, start: 'top 80%', once: true } });
  }

  /** Entrada única no carregamento (ex.: header). */
  intro(targets: gsap.TweenTarget, vars: gsap.TweenVars = {}): void {
    gsap.from(targets, { autoAlpha: 0, y: -16, duration: 0.7, ease: 'power3.out', ...vars });
  }

  /** Transição de seleção do accordion sem alterar o estado final definido pelo layout. */
  accordion(panels: HTMLElement[], previous: number[], content: HTMLElement): void {
    if (panels.some((panel, i) => Number(getComputedStyle(panel).flexGrow) !== previous[i])) {
      gsap.from(panels, {
        flexGrow: (i: number) => previous[i],
        duration: 0.45,
        ease: 'power2.out',
        clearProps: 'flexGrow',
        overwrite: true,
      });
    }
    gsap.from(content, { opacity: 0, duration: 0.3, ease: 'power2.out', clearProps: 'opacity' });
  }

  /** Deslocamento inicial de `el` conforme sua posição na seção: esquerda/direita vêm do lado; o restante vem de cima (metade superior) ou de baixo (metade inferior). */
  private origin(el: Element, distance: number): { x: number; y: number } {
    const box = (el.closest('section, footer') ?? el.parentElement ?? el).getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const dx = (rect.left + rect.width / 2 - box.left) / (box.width || 1) - 0.5;
    const dy = (rect.top + rect.height / 2 - box.top) / (box.height || 1) - 0.5;
    if (Math.abs(dx) > 0.2) return { x: Math.sign(dx) * distance, y: 0 };
    return { x: 0, y: Math.sign(dy) * distance };
  }
}
