import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CASES } from '../../../cases/case-content';
import { ServicesSectionComponent } from './services-section-component';

describe('ServicesSectionComponent', () => {
  it('links each service and only published cases', async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(ServicesSectionComponent);
    await fixture.whenStable();
    const articles = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('article'));
    expect(articles).toHaveLength(5);
    expect(articles.flatMap(article => Array.from(article.querySelectorAll('a[href^="/servicos/"]')))).toHaveLength(5);
    const caseHrefs = articles.flatMap(article => Array.from(article.querySelectorAll('a[href^="/cases/"]')).map(a => a.getAttribute('href')));
    expect(caseHrefs.sort()).toEqual(CASES.map(item => `/cases/${item.slug}`).sort());
    expect(articles.find(article => article.textContent?.includes('Automações e integrações'))?.querySelector('a[href^="/cases/"]')).toBeNull();
    expect(fixture.nativeElement.querySelector('img[src*="crm-appointments-print"]')).toBeNull();
  });
});
