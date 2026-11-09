import { TestBed } from '@angular/core/testing';
import { HoursSimulatorComponent } from './hours-simulator-component';

describe('HoursSimulatorComponent', () => {
  it('computes annual hours as minutes * repetitions * days * 12 / 60', async () => {
    const fixture = TestBed.createComponent(HoursSimulatorComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const set = async (id: string, value: number) => {
      const input = el.querySelector<HTMLInputElement>(`#${id}`)!;
      input.value = String(value);
      input.dispatchEvent(new Event('input'));
      await fixture.whenStable();
    };
    expect(el.querySelector('output')?.textContent).toContain('220');
    await set('sim-minutes', 30);
    await set('sim-repetitions', 4);
    await set('sim-days', 20);
    expect(el.querySelector('output')?.textContent).toContain('480');
    expect(el.textContent).toContain('Cenário hipotético');
    expect(el.querySelectorAll('label').length).toBe(3);
  });
});
