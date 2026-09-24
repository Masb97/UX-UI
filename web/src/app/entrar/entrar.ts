import { Component, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  standalone: true,
  templateUrl: './entrar.html',
  styleUrl: './entrar.scss',
})
export class Entrar {
  private readonly router = inject(Router);
  readonly mostrarClave = signal(false);
  readonly escala = signal(this.calcularEscala());

  @HostListener('window:resize')
  ajustarEscala() {
    this.escala.set(this.calcularEscala());
  }

  private calcularEscala(): number {
    return Math.floor(Math.min(document.documentElement.clientWidth / 1440, window.innerHeight / 1112) * 10000) / 10000;
  }

  entrar(event: Event) {
    event.preventDefault();
    // Navegación del prototipo; no autentica ni almacena credenciales.
    void this.router.navigateByUrl('/panel-arranque');
  }
}
