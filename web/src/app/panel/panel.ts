import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Mapa } from '../compartido/mapa';
import { NavegacionPanel } from '../compartido/navegacion-panel';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterLink, Mapa, NavegacionPanel],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  private readonly ruta = inject(ActivatedRoute);
  private readonly datos = toSignal(this.ruta.data, { initialValue: this.ruta.snapshot.data });
  readonly alarmaEnCurso = computed(() => this.datos()['estado'] === 'en-curso');
  readonly alarmaTerminada = computed(() => this.datos()['estado'] === 'terminada');
  readonly alarmaRechazada = computed(() => this.datos()['estado'] === 'rechazada');
  readonly subtitulo = computed(() => {
    if (this.alarmaRechazada()) return 'Andrés no aceptó la alarma. Sin su permiso no se arma nada en su teléfono.';
    if (this.alarmaEnCurso()) return 'Andrés va en camino. Le aviso dos paradas antes de que llegue.';
    if (this.alarmaTerminada()) return 'Andrés llegó. La alarma se cerró y quedó en el historial.';
    return 'Guardaste un destino. Si quieres, ahora puedes programarle una alarma a alguien más.';
  });

  destinos = [
    { nombre: 'Trabajo', direccion: 'Carrera 30 con Calle 13', icono: 'work' },
    { nombre: 'Casa', direccion: 'Calle 45 con Carrera 24', icono: 'home' },
  ];
}
