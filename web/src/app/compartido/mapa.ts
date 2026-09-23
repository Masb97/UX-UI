import { Component, Input, computed, signal } from '@angular/core';

/**
 * Mapa esquemático en SVG.
 *
 * Es maquetación, no un mapa real: no se carga ninguna librería de mapas
 * ni se consume ningún servicio. Se dibuja con código —no es una imagen de
 * fondo— porque la entrega exige que los componentes sean componentes.
 *
 * Colores y proporciones del componente Map/Web del archivo de Figma: el
 * fondo es la manzana (map-base) y las calles se dibujan en blanco encima.
 *
 * El trazado es paramétrico: el viewBox coincide con el tamaño de render,
 * así una unidad del SVG es un píxel y el grosor de las calles no cambia
 * aunque el mapa se use a 405 o a 660 de ancho.
 */
@Component({
  selector: 'app-mapa',
  standalone: true,
  template: `
    <div class="mapa" [style.height.px]="alto">
      <svg [attr.viewBox]="'0 0 ' + ancho + ' ' + alto" preserveAspectRatio="none" role="img"
           [attr.aria-label]="'Mapa esquemático del trayecto hacia ' + destino">
        <!-- manzana -->
        <rect [attr.width]="ancho" [attr.height]="alto" fill="#EEF1F7" />

        <!-- zonas verdes -->
        <rect [attr.x]="px(0.025)" [attr.y]="py(0.227)"
              [attr.width]="px(0.119)" [attr.height]="py(0.260)" fill="#DDEBDC" />
        <rect [attr.x]="px(0.563)" [attr.y]="py(0.592)"
              [attr.width]="px(0.222)" [attr.height]="py(0.214)" fill="#DDEBDC" />

        <!-- calles secundarias -->
        <g stroke="#FFFFFF" fill="none" stroke-width="7">
          <path [attr.d]="'M' + px(0.170) + ' 0 V' + alto" />
          <path [attr.d]="'M' + px(0.798) + ' 0 V' + alto" />
          <path [attr.d]="'M0 ' + py(0.214) + ' H' + ancho" />
          <path [attr.d]="'M0 ' + py(0.819) + ' H' + ancho" />
        </g>

        <!-- vías principales -->
        <g stroke="#FFFFFF" fill="none" stroke-width="12">
          <path [attr.d]="'M' + px(0.496) + ' 0 V' + alto" />
          <path [attr.d]="'M0 ' + py(0.534) + ' H' + ancho" />
        </g>

        <!-- borde tenue de las principales -->
        <g stroke="#D8DEEC" fill="none" stroke-width="1">
          <path [attr.d]="'M' + (px(0.496) - 6) + ' 0 V' + alto" />
          <path [attr.d]="'M' + (px(0.496) + 6) + ' 0 V' + alto" />
          <path [attr.d]="'M0 ' + (py(0.534) - 6) + ' H' + ancho" />
          <path [attr.d]="'M0 ' + (py(0.534) + 6) + ' H' + ancho" />
        </g>

        <!-- ruta -->
        <path [attr.d]="'M' + px(0.254) + ' ' + py(0.840) + ' H' + px(0.499) + ' V' + py(0.555)"
              fill="none" stroke="#1B4DB1" stroke-width="6"
              stroke-linecap="round" stroke-linejoin="round" />

        <!-- posición actual -->
        <circle [attr.cx]="px(llegada ? 0.476 : 0.254)" [attr.cy]="py(llegada ? 0.630 : 0.840)" r="13" fill="#1B4DB1" opacity=".2" />
        <circle [attr.cx]="px(llegada ? 0.476 : 0.254)" [attr.cy]="py(llegada ? 0.630 : 0.840)" r="6"  fill="#1B4DB1" />

        <!-- destino -->
        <g [attr.transform]="'translate(' + px(0.499) + ',' + py(0.555) + ')'">
          <circle cx="0" cy="0" r="13" fill="#B3261E" />
          <circle cx="0" cy="-1" r="4.5" fill="#FDFBFF" />
          <path d="M-6 7 L6 7 L0 17 Z" fill="#B3261E" />
        </g>

        <!-- rótulos de vía -->
        <g font-family="Roboto, sans-serif" font-size="9" fill="#6B6E7B">
          <text [attr.x]="px(0.536)" [attr.y]="py(0.109)">Cra 30</text>
          <text [attr.x]="px(0.032)" [attr.y]="py(0.281)">Cl 26</text>
          <text [attr.x]="px(0.032)" [attr.y]="py(0.626)">Cl 13</text>
        </g>

        <!-- etiqueta del destino, radio 8 -->
        <g [attr.transform]="'translate(' + px(0.536) + ',' + py(0.445) + ')'">
          <rect x="0" y="0" width="62" height="22" rx="8" fill="#FDFBFF" stroke="#C5C6D0" />
          <text x="31" y="15" text-anchor="middle" font-family="Roboto, sans-serif"
                font-size="10" font-weight="500" fill="#1B1B1F">{{ destino }}</text>
        </g>
      </svg>

      @if (nota) {
        <span class="nota-mapa">
          <span class="material-symbols-rounded" aria-hidden="true">{{ notaIcono }}</span>
          {{ nota }}
        </span>
      }
    </div>
  `,
  styles: [`
    .mapa {
      position: relative;
      border-radius: var(--r-card);
      overflow: hidden;
      background: #EEF1F7;
      svg { width: 100%; height: 100%; display: block; }
    }
    .nota-mapa {
      position: absolute; right: var(--sp-3); bottom: var(--sp-3);
      display: inline-flex; align-items: center; gap: var(--sp-1);
      padding: var(--sp-1) var(--sp-3);
      background: var(--surface);
      border: 1px solid var(--outline-variant);
      border-radius: var(--r-label);
      font: 500 12px/16px Roboto, sans-serif;
      color: var(--on-surface);
      .material-symbols-rounded { font-size: 14px; color: var(--on-surface-variant); }
    }
  `],
})
export class Mapa {
  @Input() destino = 'Trabajo';
  @Input() nota: string | null = null;
  @Input() notaIcono = 'directions_bus';
  @Input() llegada = false;
  /** Alto y ancho del cuadro de render, en píxeles. */
  @Input() alto = 238;
  @Input() ancho = 405;

  /** Posición horizontal a partir de una fracción del ancho. */
  px(f: number): number { return Math.round(this.ancho * f); }
  /** Posición vertical a partir de una fracción del alto. */
  py(f: number): number { return Math.round(this.alto * f); }
}
