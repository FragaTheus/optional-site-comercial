import { Component, DestroyRef, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NotFoundSectionComponent } from './sections/not-found/not-found-section-component';

// Composes the not-found page and prevents unknown URLs from falling through to the homepage.
@Component({
  selector: 'app-not-found-page',
  imports: [NotFoundSectionComponent],
  templateUrl: './not-found-page-component.html',
})
export class NotFoundPageComponent {
  constructor() {
    inject(Title).setTitle('Página não encontrada | Optional');
    const robots = inject(Meta).updateTag({ name: 'robots', content: 'noindex' });
    inject(DestroyRef).onDestroy(() => robots?.remove());
  }
}
