import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  routerLink?: string;
}

// Exibe uma trilha acessível de links ancestrais e da página atual.
@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb-component.html',
})
export class BreadcrumbComponent {
  readonly ancestors = input.required<readonly BreadcrumbItem[]>();
  readonly currentLabel = input.required<string>();
}
