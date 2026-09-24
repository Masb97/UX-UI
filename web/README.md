# Mi alarma — Web

Prototipo Angular 20 con componentes standalone. El inventario de vistas y los
recorridos están en el [README principal](../README.md#pantallas-web).

## Ejecutar

Requiere Node.js y npm. Entorno usado: Node.js 24.15.0 y npm 11.12.1.
Desde esta carpeta:

```bash
npm ci
npm start
```

Abrir [localhost:4200](http://localhost:4200). La raíz dirige a `/panel-arranque`.
El acceso está en `/entrar`; Entrar abre el arranque y Salir regresa al acceso.

## Rutas de revisión

| Ruta | Vista |
|---|---|
| `/entrar` | W1-2 · Entrar |
| `/panel-arranque` | W2-1 · Panel inicial |
| `/panel` | W2-2 · Destino guardado |
| `/panel-alarma-en-curso` | W2-3 · Alarma en curso |
| `/panel-alarma-terminada` | W2-4 · Alarma terminada |
| `/panel-alarma-rechazada` | W2-5 · Alarma rechazada |
| `/nuevo-destino` | W3 · Guardar destino |
| `/nuevo-destino?modo=trayecto` | W3 · Mismo formulario con Guardar trayecto |
| `/programar-alarma` | W4 · Alarma para otra persona |

Los estados se pueden visitar con los botones de prueba debajo de los paneles.
W1-1 Crear cuenta está pendiente. No hay autenticación, persistencia ni envío real.

## Compilar

```bash
npm run build -- --configuration development
```

Para producción:

```bash
npm run build
```

Salida: `dist/ux-web/browser/`. La producción necesita acceso a Google Fonts para
incrustar las fuentes. Si la descarga falla, revisar la conexión; la compilación de
desarrollo evita esa descarga durante el build.

## Comparación visual

Usar un viewport de 1440 × 1112 y zoom del navegador al 100 % como referencia.
La pantalla Entrar conserva un frame de esas dimensiones y lo escala para caber
completo en la ventana. El cuadriculado indica el área exterior al diseño.
Los botones de prueba de los paneles quedan fuera del frame de referencia.

Rutas: [app.routes.ts](src/app/app.routes.ts).
Estilos compartidos: [styles.scss](src/styles.scss).
