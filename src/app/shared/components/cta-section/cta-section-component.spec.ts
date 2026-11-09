import { TestBed } from '@angular/core/testing';
import { CONTACT_URL } from '../../../core/site.config';
import { CtaSectionComponent } from './cta-section-component';

describe('CtaSectionComponent', () => {
  it('renders the supplied content and contact destination', async () => {
    await TestBed.configureTestingModule({ imports: [CtaSectionComponent] }).compileComponents();
    const fixture = TestBed.createComponent(CtaSectionComponent);
    fixture.componentRef.setInput('heading', { lead: 'Vamos falar da sua', key: 'operação.' });
    fixture.componentRef.setInput('text', 'Conte como sua empresa funciona.');
    fixture.componentRef.setInput('cta', { label: 'Conversar', wppMessage: 'Olá! Quero apresentar minha operação.' });
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('#contato')?.getAttribute('aria-labelledby')).toBe('contato-title');
    expect(el.querySelector('h2')?.textContent).toContain('Vamos falar da sua');
    expect(el.querySelector('h2 strong')?.textContent).toBe('operação.');
    expect(el.querySelector('p')?.textContent).toBe('Conte como sua empresa funciona.');
    const link = el.querySelector<HTMLAnchorElement>('a')!;
    expect(link.textContent).toContain('Conversar');
    expect(link.getAttribute('href')).toBe(`${CONTACT_URL}?text=${encodeURIComponent('Olá! Quero apresentar minha operação.')}`);
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener');
  });
});
