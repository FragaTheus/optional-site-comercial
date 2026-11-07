import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICE_LINKS } from '../../../../../core/site.config';
import { Reveal } from '../../../../../shared/directives/reveal';

const TEXTS: Record<(typeof SERVICE_LINKS)[number]['slug'], string> = {
  sites: 'Presença digital própria para apresentar a empresa, os serviços e os canais de contato.',
  'landing-pages': 'Páginas focadas em uma oferta, desenhadas para converter visitas em contatos.',
  crm: 'Clientes, histórico e acompanhamento comercial organizados do jeito que sua equipe trabalha.',
  automacoes: 'Fluxos e integrações que conectam ferramentas e reduzem tarefas manuais.',
  erp: 'Sistemas de gestão que centralizam processos, controles e informações da operação.',
};

// Imagens abstratas provisórias, a serem substituídas.
const IMAGES = [
  'optional_abstrato_01_camadas.png',
  'optional_abstrato_02_arco.png',
  'optional_abstrato_03_planos.png',
  'optional_abstrato_04_diagonais.png',
];

// Apresenta todos os serviços como cards-link e conduz à seção seguinte.
@Component({
  selector: 'app-solutions-intro-section',
  imports: [Reveal, RouterLink],
  templateUrl: './solutions-intro-section-component.html',
})
export class SolutionsIntroSectionComponent {
  protected readonly solutions = SERVICE_LINKS.map((s, i) => ({
    ...s,
    text: TEXTS[s.slug],
    image: `/home-img/${IMAGES[i % IMAGES.length]}`,
  }));
}
