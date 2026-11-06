import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { MenuDrawerComponent } from './menu-drawer-component';

describe('MenuDrawerComponent', () => {
  it('keeps the drawer open when expanding sections and closes for links or backdrop', async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDrawerComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(MenuDrawerComponent);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;
    const dialog = host.querySelector('dialog')!;
    dialog.close = vi.fn();
    dialog.showModal = vi.fn();

    host.querySelector<HTMLButtonElement>('button[aria-haspopup]')!.click();
    expect(dialog.showModal).toHaveBeenCalledOnce();
    dialog.querySelector('summary')!.click();
    expect(dialog.close).not.toHaveBeenCalled();
    dialog.querySelector<HTMLAnchorElement>('nav a')!.click();
    expect(dialog.close).toHaveBeenCalledOnce();
    dialog.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(dialog.close).toHaveBeenCalledTimes(2);
    dialog.querySelector<HTMLButtonElement>('button[aria-label="Fechar menu"]')!.click();
    expect(dialog.close).toHaveBeenCalledTimes(3);
  });
});
