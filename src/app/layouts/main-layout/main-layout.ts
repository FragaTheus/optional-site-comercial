import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';

// Shell institucional: header, conteúdo da rota e footer, para as páginas não repetirem a estrutura.
@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
