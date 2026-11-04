import { Component, inject } from '@angular/core';
import { Seo } from '../../../core/seo';
import { CONTACT_URL } from '../../../core/site.config';

// Homepage: apresenta a Option e funciona como hub que direciona para cada serviço.
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {
  // Atributos
  protected readonly contactUrl = CONTACT_URL;
  protected readonly services = [
    { name: 'CRM', text: 'Clientes, histórico e relacionamento em um só lugar, com o processo comercial que a sua equipe realmente segue.' },
    { name: 'ERP e gestão', text: 'Controle operacional, rastreabilidade e organização empresarial desenhados para a rotina da sua operação.' },
    { name: 'Automações e integrações', text: 'Menos tarefa manual e mais produtividade, conectando as ferramentas que a empresa já usa.' },
    { name: 'Landing pages', text: 'Infraestrutura de campanhas com experiência de conversão, mensuração e rastreamento.' },
    { name: 'Sites comerciais', text: 'Presença digital com autoridade, SEO e uma apresentação à altura do trabalho que a empresa entrega.' },
  ];
  protected readonly steps = [
    { title: 'Entender', text: 'Mapeamos como a operação funciona hoje e onde ela trava.' },
    { title: 'Desenhar', text: 'Definimos a solução em torno do seu processo, não de um modelo pronto.' },
    { title: 'Construir', text: 'Desenvolvemos e integramos com o que já existe na empresa.' },
    { title: 'Evoluir', text: 'Ajustamos conforme o negócio muda, sem recomeçar do zero.' },
  ];
  protected readonly principles = [
    { title: 'Sob medida', text: 'A solução nasce do seu processo, não de um pacote adaptado.' },
    { title: 'Integrado', text: 'Conversa com as ferramentas e os dados que você já tem.' },
    { title: 'Evolutivo', text: 'Estruturado para crescer junto com a operação.' },
  ];

  // Construtores
  constructor() {
    inject(Seo).set(
      'Option — Software e infraestrutura digital sob medida para empresas',
      'A Option desenvolve CRM, ERP e sistemas de gestão, automações, landing pages e sites comerciais sob medida para a realidade de cada empresa.',
    );
  }
}
