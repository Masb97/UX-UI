import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Mapa } from '../compartido/mapa';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterLink, Mapa],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  private readonly ruta = inject(ActivatedRoute);
  private readonly datos = toSignal(this.ruta.data, { initialValue: this.ruta.snapshot.data });
  readonly alarmaEnCurso = computed(() => this.datos()['estado'] === 'en-curso');

  destinos = [
    { nombre: 'Trabajo', direccion: 'Carrera 30 con Calle 13', icono: 'work' },
    { nombre: 'Casa', direccion: 'Calle 45 con Carrera 24', icono: 'home' },
  ];
}
