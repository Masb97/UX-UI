# Mi alarma - Maquetación de Front End

Prototipo navegable de **Mi alarma**, una aplicación que avisa a los pasajeros
antes de llegar a su destino. Incluye una interfaz web para preparar destinos y
alarmas, y una aplicación Android para recorrer el flujo del viaje.

Repositorio: [Masb97/UX-UI](https://github.com/Masb97/UX-UI).

## Alcance

La entrega implementa interfaces, navegación e interacciones de demostración:
selección de días, etiquetas y avisos, formularios, vista previa y un deslizador
para apagar la alarma. Los datos son de ejemplo.

No incluye backend, autenticación real, persistencia de destinos, sincronización
entre dispositivos, búsqueda geográfica, GPS, sonido ni programación real de
alarmas. Los mensajes de conexión, distancias y horas representan estados del
mockup. Los botones de guardar recorren el prototipo sin almacenar información.

## Estructura

| Carpeta | Contenido |
|---|---|
| [web/](web/) | Angular 20, TypeScript, HTML y SCSS |
| [movil/](movil/) | Android nativo en Kotlin, layouts XML y View Binding |

Instrucciones específicas: [web](web/README.md) y [Android](movil/README.md).

## Pantallas web

Hay **8 vistas implementadas de los 9 mockups web**. Los estados del panel
comparten componente y se pueden abrir por rutas diferentes.

| Mockup | Vista | Ruta | Estado |
|---|---|---|---|
| W1-1 | Crear cuenta | — | Pendiente |
| W1-2 | Entrar | `/entrar` | Implementada |
| W2-1 | Panel de arranque | `/panel-arranque` | Implementada |
| W2-2 | Panel con destino guardado | `/panel` | Implementada |
| W2-3 | Panel con alarma en curso | `/panel-alarma-en-curso` | Implementada |
| W2-4 | Panel con alarma terminada | `/panel-alarma-terminada` | Implementada |
| W2-5 | Panel con alarma rechazada | `/panel-alarma-rechazada` | Implementada |
| W3 | Nuevo destino | `/nuevo-destino` | Implementada |
| W4 | Programar alarma para otra persona | `/programar-alarma` | Implementada |

### Ejecutar web

Desde la raíz del repositorio, con Node.js y npm instalados:

```bash
cd web
npm ci
npm start
```

Abrir [http://localhost:4200](http://localhost:4200). La raíz abre el panel de
arranque. Para comenzar por el acceso, abrir
[http://localhost:4200/entrar](http://localhost:4200/entrar).

Se ha compilado el proyecto con Node.js 24.15.0 y npm 11.12.1.

### Recorrido web

1. En **Entrar**, pulsar **Entrar** para abrir el panel de arranque.
2. Pulsar **Agregar destino**, elegir etiquetas, días y tipo de aviso, y pulsar
   **Guardar destino** para abrir el panel con datos de ejemplo.
3. Desde ese panel, **Programar un trayecto** abre el mismo formulario con
   `?modo=trayecto`; el botón cambia a **Guardar trayecto**.
4. **Programar una alarma** abre el formulario para otra persona. Sus selecciones
   actualizan la vista previa. **Enviar la alarma** vuelve al panel.
5. Los tres botones inferiores permiten visitar los estados en curso, terminado
   y rechazado. No representan transiciones automáticas de una alarma real.
6. **Mi alarma** vuelve a `/panel`; **Salir** abre `/entrar`.

En el panel de arranque, programar un trayecto o una alarma está deshabilitado,
como en el diseño. **Crear una cuenta** y **Vincular otro teléfono** todavía no
abren un flujo implementado.

## Pantallas móviles

Las **8 vistas móviles recibidas están implementadas**.

| Mockup | Vista | Activity |
|---|---|---|
| M0 | Así funciona | `IntroduccionActivity` |
| M1-A | Inicio | `InicioActivity` |
| M2 | Elegir destino — sin resultados | `ElegirDestinoActivity` |
| M2-B | Elegir destino — punto fijado | `PuntoFijadoActivity` |
| M3 | Tu destino | `DestinoActivity` |
| M1-B | Alarma armada | `AlarmaArmadaActivity` |
| M4-A | Alarma sonando | `AvisoActivity` |
| M1-E | Llegaste | `LlegasteActivity` |

### Ejecutar Android

1. Abrir la carpeta **movil/** en Android Studio.
2. Instalar Android SDK Platform 35 y los componentes que solicite el proyecto.
3. En **Settings → Build, Execution, Deployment → Build Tools → Gradle**, usar
   el JDK incluido con Android Studio (`jbr`).
4. Esperar a que termine la sincronización de Gradle.
5. Seleccionar la configuración **app**, elegir un emulador o teléfono con
   depuración USB habilitada y pulsar **Run**.

La aplicación requiere Android 7.0 / API 24 o superior. Usa `compileSdk` y
`targetSdk` 35. Android Studio crea `local.properties` con la ubicación del SDK;
ese archivo depende de cada equipo y no debe versionarse.

### Recorrido móvil

1. **M0:** Empezar o Saltar → Inicio.
2. **Inicio:** Sí, armar la alarma → Alarma armada. Los destinos guardados abren
   Tu destino. Elegir otro destino → M2.
3. **M2:** tocar la sugerencia o el mapa → M2-B. Trabajo o Casa → Tu destino.
   Usar este punto está deshabilitado en el estado sin resultados.
4. **M2-B:** elegir una etiqueta y pulsar Guardar y usar → Tu destino, con el
   nombre y la dirección del punto de ejemplo.
5. **Tu destino:** seleccionar aviso por paradas o minutos y armar → Alarma armada.
6. **Alarma armada:** Probar el aviso → Alarma sonando; Desarmar → Inicio.
7. **Alarma sonando:** completar el deslizador → Llegaste.
8. **Llegaste:** Guardar, No, gracias o Volver al inicio → Inicio.

Los iconos de ajustes todavía no abren una pantalla. La llegada se simula con el
deslizador: no se detecta mediante GPS. La introducción aparece al lanzar la app;
no se guarda una preferencia de primera ejecución.

## Compilación y revisión

Web, desde `web/`:

```bash
npm run build -- --configuration development
npm run build
```

La compilación de producción genera los archivos en `web/dist/ux-web/browser/`.
La configuración actual descarga Google Fonts durante esa compilación, por lo
que necesita acceso a Internet. La de desarrollo permite comprobar las plantillas
y el código sin incrustar esas fuentes; el navegador las solicita al mostrar la UI.

La compilación de desarrollo web y la compilación Android se han ejecutado
correctamente durante la implementación. Esto no sustituye una comparación visual
completa ni la comprobación manual de cada interacción en navegador y dispositivo.

## Diseño y comparación con Figma

- Web: colores, tipografía y espaciado en [styles.scss](web/src/styles.scss).
- Android: recursos en [res/values](movil/app/src/main/res/values/).
- Mapas: SVG en web y vector drawables en Android; son esquemas sin servicios de mapas.
- Referencia web: frame de **1440 × 1112**. El acceso se escala uniformemente para
  caber en la ventana; sus márgenes exteriores cuadriculados no pertenecen al frame.
- Los paneles web reservan la altura del frame y muestran la navegación de prueba
  debajo. Sus columnas se apilan en ventanas estrechas.
- Referencia móvil: **375 × 812**. Comparar considerando las barras del sistema,
  la densidad del dispositivo y el tamaño de fuente de Android.
