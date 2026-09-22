import { Routes } from '@angular/router';
import { Panel } from './panel/panel';
import { NuevoDestino } from './nuevo-destino/nuevo-destino';

// Las pantallas se registran aquí a medida que se maquetan. No hay rutas de
// login ni de registro: quedaron excluidas desde los wireframes por
// indicación del curso.
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'panel' },
  { path: 'panel', component: Panel, title: 'Mi alarma — tu panel' },
  { path: 'nuevo-destino', component: NuevoDestino, title: 'Mi alarma — nuevo destino' },
  { path: '**', redirectTo: 'panel' },
];
