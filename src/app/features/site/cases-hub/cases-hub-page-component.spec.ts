import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CASES } from '../cases/case-content';
import { CasesHubPageComponent } from './cases-hub-page-component';

describe('CasesHubPageComponent', () => {
  it('lists every published case and leads with Paulo Carvalho and Símtese', async () => {
    await TestBed.configureTestingModule({ imports: [CasesHubPageComponent], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(CasesHubPageComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const articles = Array.from(el.querySelectorAll('#cases article'));
    expect(el.querySelectorAll('h1')).toHaveLength(1);
    expect(articles).toHaveLength(CASES.length);
    expect(articles[0].querySelector('h3')?.textContent).toContain('Paulo Carvalho');
    expect(articles[1].querySelector('h3')?.textContent).toContain('Símtese');
    expect(articles.map(article => article.querySelector('a')?.getAttribute('href')).sort()).toEqual(CASES.map(item => `/cases/${item.slug}`).sort());
    expect(articles.every(article => article.querySelector('img')?.getAttribute('src')?.startsWith('/home-img/'))).toBe(true);
    expect(el.querySelector('#contato a')?.getAttribute('href')).toContain('wa.me/');
    expect(TestBed.inject(Title).getTitle()).toContain('Cases');
  });
});
