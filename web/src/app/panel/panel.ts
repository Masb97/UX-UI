import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Mapa } from '../compartido/mapa';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterLink, Mapa],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  destinos = [
    { nombre: 'Trabajo', direccion: 'Carrera 30 con Calle 13', icono: 'work' },
    { nombre: 'Casa', direccion: 'Calle 45 con Carrera 24', icono: 'home' },
  ];
}
