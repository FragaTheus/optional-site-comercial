import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../../shared/directives/reveal';

// Evidências da homepage: projetos reais da Optional descritos apenas com o que foi validado (tipo e escopo), sem métricas ou depoimentos; novos detalhes só entram após validação.
@Component({
  selector: 'app-cases-section',
  imports: [Reveal, RouterLink],
  templateUrl: './cases-section-component.html',
})
export class CasesSectionComponent {
  // Atributos
  protected readonly projects = [
    { name: 'Símtese', type: 'CRM', scope: 'CRM para gestão de agendamentos e acompanhamento de resultados.', slug: 'crm', anchor: 'Sobre CRM personalizado' },
    { name: 'LaLouise', type: 'Sistema de gestão', scope: 'Sistema de controle operacional com rastreabilidade.', slug: 'erp', anchor: 'Sobre ERP e sistemas de gestão' },
    { name: 'Caldeiraria Realiza', type: 'Site comercial', scope: 'Site comercial da empresa.', slug: 'sites', anchor: 'Sobre sites comerciais' },
    { name: 'Paulo Carvalho', type: 'Site profissional', scope: 'Site profissional.', slug: 'sites', anchor: 'Sobre sites profissionais' },
    { name: 'Profissão do Século', type: 'Landing page', scope: 'Landing page.', slug: 'landing-pages', anchor: 'Sobre landing pages' },
  ];
}
