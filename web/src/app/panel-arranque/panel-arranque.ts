import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavegacionPanel } from '../compartido/navegacion-panel';

@Component({
  selector: 'app-panel-arranque',
  standalone: true,
  imports: [RouterLink, NavegacionPanel],
  templateUrl: './panel-arranque.html',
  styleUrl: './panel-arranque.scss',
})
export class PanelArranque {}
