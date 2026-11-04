import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Raiz da aplicação: apenas hospeda o roteador; layouts e páginas vivem nas rotas.
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  template: '<router-outlet />',
})
export class App {}
