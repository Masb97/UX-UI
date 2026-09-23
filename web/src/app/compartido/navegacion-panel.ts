import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navegacion-panel',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav aria-label="Estados del panel">
      <a class="btn-secundario" routerLink="/panel-alarma-en-curso"
         routerLinkActive="actual" ariaCurrentWhenActive="page">Ver pantalla alarma en curso</a>
      <a class="btn-secundario" routerLink="/panel-alarma-terminada"
         routerLinkActive="actual" ariaCurrentWhenActive="page">Ver panel alarma terminada</a>
      <button type="button" class="btn-secundario">Ver panel alarma rechazada</button>
    </nav>
  `,
  styles: [`
    :host { display: block; background: var(--surface); border-top: 1px solid var(--outline-variant); }
    nav {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: var(--gutter);
      max-width: var(--page-max);
      margin: 0 auto;
      padding: var(--sp-6) var(--page-margin);
    }
    nav > * { min-height: 48px; text-align: center; }
    @media (max-width: 800px) {
      nav { grid-template-columns: 1fr; padding: var(--sp-6); }
    }
    .actual { background: var(--primary-container); border-color: var(--primary); }
  `],
})
export class NavegacionPanel {}
