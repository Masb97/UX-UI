import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { Router, NavigationEnd, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly router = inject(Router);
  readonly esAcceso = toSignal(this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map(event => event.urlAfterRedirects.split(/[?#]/)[0] === '/entrar'),
  ), { initialValue: this.router.url.split(/[?#]/)[0] === '/entrar' });
}
