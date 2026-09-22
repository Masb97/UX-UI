import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-programar-alarma',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './programar-alarma.html',
  styleUrl: './programar-alarma.scss',
})
export class ProgramarAlarma {
  // El binding de datos es solo para que la vista previa refleje lo que se
  // escribe: «Andrés va a ver este motivo tal cual lo escribas». No hay
  // persistencia ni envío — la entrega es un prototipo no funcional.
  para = signal('Andrés');
  destino = signal('Trabajo');
  aviso = signal<'paradas' | 'minutos'>('paradas');
  motivo = signal('para que no te pases y llegues a mi trabajo');

  telefonos = ['Andrés (teléfono vinculado)', 'Laura (teléfono vinculado)'];
  destinos = ['Trabajo', 'Casa'];

  direccion = computed(() =>
    this.destino() === 'Trabajo' ? 'Carrera 30 con Calle 13' : 'Calle 45 con Carrera 24');

  textoAviso = computed(() =>
    this.aviso() === 'paradas' ? '2 paradas antes' : '5 minutos antes');

  onPara(v: string) { this.para.set(v.split(' ')[0]); }
}
