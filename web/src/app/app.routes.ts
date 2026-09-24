import { Routes } from '@angular/router';
import { Entrar } from './entrar/entrar';
import { Panel } from './panel/panel';
import { NuevoDestino } from './nuevo-destino/nuevo-destino';
import { ProgramarAlarma } from './programar-alarma/programar-alarma';
import { PanelArranque } from './panel-arranque/panel-arranque';

// El panel de arranque permite revisar el estado inicial del prototipo.
// /panel conserva el estado con un destino guardado.
export const routes: Routes = [
  { path: 'entrar', component: Entrar, title: 'Mi alarma — entrar' },
  { path: '', pathMatch: 'full', redirectTo: 'panel-arranque' },
  { path: 'panel-arranque', component: PanelArranque, title: 'Mi alarma — empieza aquí' },
  { path: 'panel', component: Panel, title: 'Mi alarma — tu panel' },
  { path: 'panel-alarma-en-curso', component: Panel, data: { estado: 'en-curso' }, title: 'Mi alarma — alarma en curso' },
  { path: 'panel-alarma-terminada', component: Panel, data: { estado: 'terminada' }, title: 'Mi alarma — alarma terminada' },
  { path: 'panel-alarma-rechazada', component: Panel, data: { estado: 'rechazada' }, title: 'Mi alarma — alarma rechazada' },
  { path: 'nuevo-destino', component: NuevoDestino, title: 'Mi alarma — nuevo destino' },
  { path: 'programar-alarma', component: ProgramarAlarma, title: 'Mi alarma — programar una alarma' },
  { path: '**', redirectTo: 'panel' },
];
