import { Component } from '@angular/core';
import { Reveal } from '../../../../shared/directives/reveal';

// Perguntas frequentes em details/summary nativos, para reduzir objeções e explicar como funciona trabalhar com a Optional.
@Component({
  selector: 'app-faq-section',
  imports: [Reveal],
  templateUrl: './faq-section-component.html',
})
export class FaqSectionComponent {
  // Atributos
  protected readonly faqs = [
    { q: 'Como começa um projeto?', a: 'Por uma conversa sobre como a sua operação funciona hoje: processos, ferramentas, gargalos e objetivos. Com esse cenário, indicamos o que faz sentido construir e por onde começar.' },
    { q: 'Preciso trocar as ferramentas que já uso?', a: 'Não necessariamente. Sempre que possível, o novo sistema se integra ao que a empresa já utiliza. A troca só é recomendada quando a ferramenta atual é, de fato, o problema.' },
    { q: 'Quanto custa e quanto tempo leva?', a: 'Depende do escopo, e por isso não trabalhamos com valores de tabela. Prazo e investimento são apresentados depois de entendermos a operação e antes de qualquer desenvolvimento começar.' },
    { q: 'Preciso de um ERP completo desde o início?', a: 'Não. Muitos projetos começam por uma landing page, uma automação ou um CRM e evoluem em etapas. Cada etapa só entra quando faz sentido para o negócio.' },
    { q: 'Como funciona a entrega?', a: 'O trabalho é dividido em etapas, com validações ao longo do caminho, para que a solução seja ajustada ao uso real antes de chegar ao final.' },
    { q: 'O que acontece depois que o sistema entra no ar?', a: 'A solução continua evoluindo conforme o negócio muda. Condições de suporte e manutenção são combinadas por escrito antes do início do projeto.' },
  ];
}
