# UX Web

Aplicacion Angular standalone para construir la interfaz web del proyecto.

## Desarrollo

```bash
npm install
npm start
```

Abrir `http://localhost:4200/panel-arranque` para revisar el panel inicial
W2-1. La raíz `/` también abre esta vista. Para comparar con Figma, usar
un ancho de ventana de 1440 px y zoom del navegador al 100 %.

El panel con datos de ejemplo sigue en `/panel`. En el panel inicial,
«Agregar destino» abre `/nuevo-destino`; las acciones de programar están
deshabilitadas. «Guardar destino» en el formulario vuelve al panel con
datos de ejemplo: el prototipo todavía no persiste los destinos.

## Produccion

```bash
npm run build
```
