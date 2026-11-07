import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ServicesHubPageComponent } from './services-hub-page-component';

describe('ServicesHubPageComponent', () => {
  it('renders the migrated sections and service links', async () => {
    await TestBed.configureTestingModule({ imports: [ServicesHubPageComponent], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(ServicesHubPageComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('h1')).toHaveLength(1);
    expect(el.querySelector('#servicos')).not.toBeNull();
    expect(el.querySelectorAll('#servicos article')).toHaveLength(5);
    expect(el.querySelectorAll('.media-card')).toHaveLength(4);
    expect(el.querySelector('#contato a')?.getAttribute('href')).toContain('wa.me/');
    expect(TestBed.inject(Title).getTitle()).toContain('Serviços');
  });
});
