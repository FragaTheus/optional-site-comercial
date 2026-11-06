import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SERVICE_LINKS } from '../../../core/site.config';
import { CASES } from '../../../features/site/cases/case-content';
import { SiteNavigationComponent } from './site-navigation-component';

describe('SiteNavigationComponent', () => {
  it('renders home and all service and case routes in separate disclosures', async () => {
    await TestBed.configureTestingModule({
      imports: [SiteNavigationComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(SiteNavigationComponent);
    await fixture.whenStable();
    const nav = (fixture.nativeElement as HTMLElement).querySelector('nav')!;
    const details = nav.querySelectorAll('details');
    expect(nav.getAttribute('aria-label')).toBe('Navegação');
    expect(nav.querySelector('a[href="/"]')?.textContent).toContain('Home');
    expect(details).toHaveLength(2);
    expect(details[0].querySelector('summary')?.textContent).toContain('Serviços');
    expect(details[1].querySelector('summary')?.textContent).toContain('Cases');
    expect(Array.from(details[0].querySelectorAll('a')).map(a => a.getAttribute('href')))
      .toEqual(['/servicos', ...SERVICE_LINKS.map(item => `/servicos/${item.slug}`)]);
    expect(Array.from(details[1].querySelectorAll('a')).map(a => a.getAttribute('href')))
      .toEqual(['/cases', ...CASES.map(item => `/cases/${item.slug}`)]);
  });

  it('emits only for ordinary link selection, not modified clicks', async () => {
    await TestBed.configureTestingModule({
      imports: [SiteNavigationComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(SiteNavigationComponent);
    await fixture.whenStable();
    let selections = 0;
    fixture.componentInstance.linkSelected.subscribe(() => selections++);
    const link = (fixture.nativeElement as HTMLElement).querySelector('a')!;
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, ctrlKey: true }));
    expect(selections).toBe(0);
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    expect(selections).toBe(1);
  });
});
