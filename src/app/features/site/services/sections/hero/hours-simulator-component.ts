import { DecimalPipe } from '@angular/common';
import { Component, WritableSignal, computed, signal } from '@angular/core';

// Simulador da Hero de Automações: estima as horas anuais gastas em uma tarefa manual para tornar o custo do trabalho repetitivo concreto.
@Component({
  selector: 'app-hours-simulator',
  imports: [DecimalPipe],
  templateUrl: './hours-simulator-component.html',
})
export class HoursSimulatorComponent {
  // Atributos
  protected readonly minutes = signal(10);
  protected readonly repetitions = signal(5);
  protected readonly days = signal(22);
  protected readonly hours = computed(() => (this.minutes() * this.repetitions() * this.days() * 12) / 60);
  protected readonly fields = [
    { id: 'sim-minutes', label: 'Minutos por tarefa', value: this.minutes },
    { id: 'sim-repetitions', label: 'Repetições por dia', value: this.repetitions },
    { id: 'sim-days', label: 'Dias trabalhados por mês', value: this.days },
  ];

  // Métodos
  protected update(value: WritableSignal<number>, input: HTMLInputElement): void {
    value.set(Math.max(0, input.valueAsNumber || 0));
  }
}
