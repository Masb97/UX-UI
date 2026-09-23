import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Mapa } from '../compartido/mapa';

@Component({
  selector: 'app-nuevo-destino',
  standalone: true,
  imports: [RouterLink, Mapa],
  templateUrl: './nuevo-destino.html',
  styleUrl: './nuevo-destino.scss',
})
export class NuevoDestino {
  private readonly ruta = inject(ActivatedRoute);
  private readonly parametros = toSignal(this.ruta.queryParamMap, {
    initialValue: this.ruta.snapshot.queryParamMap,
  });
  readonly textoGuardar = computed(() =>
    this.parametros().get('modo') === 'trayecto' ? 'Guardar trayecto' : 'Guardar destino'
  );

  // Estado de interfaz, no de negocio: es un prototipo no funcional.
  // No persiste nada ni captura datos — es el techo de esta entrega.
  etiqueta = signal('Trabajo');
  etiquetas = ['Casa', 'Trabajo', 'Universidad', 'Otro'];

  dias = signal<string[]>(['L', 'M', 'X', 'J', 'V']);
  diasSemana = [
    { id: 'L', letra: 'L' }, { id: 'M', letra: 'M' }, { id: 'X', letra: 'M' },
    { id: 'J', letra: 'J' }, { id: 'V', letra: 'V' }, { id: 'S', letra: 'S' },
    { id: 'D', letra: 'D' },
  ];

  aviso = signal<'paradas' | 'minutos'>('paradas');

  alternarDia(id: string) {
    const actuales = this.dias();
    this.dias.set(actuales.includes(id) ? actuales.filter(d => d !== id) : [...actuales, id]);
  }

  get resumenDias(): string {
    const d = this.dias();
    if (d.length === 0) return 'Ningún día seleccionado';
    if (d.length === 7) return 'Todos los días';
    if (d.length === 5 && !d.includes('S') && !d.includes('D')) return 'Lunes a viernes';
    return `${d.length} días seleccionados`;
  }
}
