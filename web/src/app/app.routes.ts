import { Routes } from '@angular/router';
import { Panel } from './panel/panel';
import { NuevoDestino } from './nuevo-destino/nuevo-destino';
import { ProgramarAlarma } from './programar-alarma/programar-alarma';

// Tres pantallas, navegables entre sí. No hay login ni registro: esas
// pantallas quedaron excluidas desde los wireframes por indicación del curso.
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'panel' },
  { path: 'panel', component: Panel, title: 'Mi alarma — tu panel' },
  { path: 'nuevo-destino', component: NuevoDestino, title: 'Mi alarma — nuevo destino' },
  { path: 'programar-alarma', component: ProgramarAlarma, title: 'Mi alarma — programar una alarma' },
  { path: '**', redirectTo: 'panel' },
];
