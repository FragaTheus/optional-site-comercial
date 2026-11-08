import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SolutionsIntroSectionComponent } from './solutions-intro-section-component';

describe('SolutionsIntroSectionComponent', () => {
  it('keeps one solution open and links each front to its service page', async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsIntroSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(SolutionsIntroSectionComponent);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    const triggers = [...root.querySelectorAll<HTMLButtonElement>('[aria-controls]')];
    const panels = [...root.querySelectorAll<HTMLElement>('[data-solution-content]')];
    const cards = [...root.querySelectorAll<HTMLElement>('[data-solution-card]')];
    const solutions = [
      { label: 'Qualificação comercial', href: '/servicos/sites' },
      { label: 'Gestão de relacionamento', href: '/servicos/crm' },
      { label: 'Automações de processo', href: '/servicos/automacoes' },
      { label: 'Organização operacional', href: '/servicos/erp' },
    ];

    expect(triggers).toHaveLength(4);
    expect(panels).toHaveLength(4);
    expect(cards).toHaveLength(4);

    const expectSelection = (selected: number) => {
      solutions.forEach((solution, index) => {
        expect(triggers[index].getAttribute('aria-expanded')).toBe(String(index === selected));
        expect(triggers[index].getAttribute('aria-disabled')).toBe(String(index === selected));
        expect(triggers[index].getAttribute('aria-controls')).toBe(panels[index].id);
        expect(panels[index].getAttribute('aria-labelledby')).toBe(triggers[index].id);
        expect(panels[index].hidden).toBe(index !== selected);
        expect(panels[index].querySelector('a')?.getAttribute('href')).toBe(solution.href);
        expect(triggers[index].textContent).toContain(solution.label);
        expect(cards[index].classList.contains('hidden')).toBe(Math.abs(index - selected) > 1);
        expect(cards[index].classList.contains('col-start-1')).toBe(index === selected - 1);
        expect(cards[index].classList.contains('col-start-3')).toBe(index === selected);
        expect(cards[index].classList.contains('col-start-11')).toBe(index === selected + 1);
      });
    };

    expectSelection(0);
    for (let index = 1; index < triggers.length; index++) {
      triggers[index].click();
      await fixture.whenStable();
      expectSelection(index);
    }
    triggers[triggers.length - 1].click();
    await fixture.whenStable();
    expectSelection(triggers.length - 1);
    for (let index = triggers.length - 2; index >= 0; index--) {
      triggers[index].click();
      await fixture.whenStable();
      expectSelection(index);
    }

    triggers[1].click();
    triggers[2].click();
    triggers[3].click();
    await fixture.whenStable();
    expectSelection(3);
  });
});
