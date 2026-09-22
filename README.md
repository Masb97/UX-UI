# UX

Maquetación en código de las interfaces de **Mi alarma**, la aplicación que avisa al
pasajero antes de llegar a su destino para que pueda descansar en el bus.

Es un **prototipo no funcional**: no hay lógica de negocio, ni back end, ni persistencia,
ni captura de datos. El código reproduce el diseño de UI y permite navegar entre las
pantallas entregadas.

- `web/`: aplicación Angular standalone.
- `movil/`: aplicación Android en Kotlin.

## Pantallas

**Web** — flujo de programarle una alarma a otra persona, que es lo que vive en el
computador:

| Ruta | Pantalla |
|---|---|
| `/panel` | Tu panel — destinos, trayectos y alarmas programadas |
| `/nuevo-destino` | Nuevo destino — mapa, etiqueta, días, franja horaria y aviso |
| `/programar-alarma` | Programar una alarma para otra persona, con vista previa en vivo |

**Móvil** — flujo principal del producto:

| Activity | Pantalla |
|---|---|
| `InicioActivity` | Mi alarma — ¿A dónde vas hoy? |
| `DestinoActivity` | Tu destino — ¿Cuándo te aviso? |
| `AvisoActivity` | «Bájate en 2 paradas» — la alarma sonando |

> **No hay pantallas de login ni de registro.** El curso las excluyó desde los wireframes,
> así que tampoco aparecen en los mockups ni aquí, aunque el diseño de UI sí las tiene.

## Para quien siga trabajando aquí

El repositorio trae **tres pantallas web y tres móviles**, que son las de un integrante.
Las del otro se suman encima; el sistema de diseño ya está en código y no hay que
repetirlo.

Dos cosas que conviene acordar antes de seguir:

- **La `MainActivity` del esqueleto se retiró.** Era un marcador de posición y no puede
  haber dos actividades de lanzamiento. Hoy el punto de entrada es `InicioActivity`. Al
  añadir el segundo grupo de pantallas hay que decidir cuál lanza la aplicación.
- **El `namespace` sigue siendo `com.example.uxmobile`**, como estaba.

Dónde tocar para añadir una pantalla:

| | Web | Móvil |
|---|---|---|
| Pantalla | `src/app/<nombre>/` + ruta en `app.routes.ts` | `Activity` + `res/layout/` + `AndroidManifest.xml` |
| Tokens | `src/styles.scss` | `res/values/` |
| Iconos | `material-symbols-rounded` | `res/drawable/ic_*.xml` |

## Cómo ejecutarlo

### Web

```bash
cd web
npm install
npm start          # http://localhost:4200
```

### Móvil

Abrir `movil/` en Android Studio y ejecutar, o desde la terminal:

```bash
cd movil
./gradlew assembleRelease
adb install -r app/build/outputs/apk/release/app-release.apk
```

El APK de release se firma con la clave de depuración para que se pueda instalar
directamente. Requiere el SDK de Android (compileSdk 35, minSdk 24); `local.properties`
no está versionado, lo genera Android Studio al abrir el proyecto.

## El sistema de diseño está en el código

Los tokens no son valores sueltos repetidos: son los del Design System, con los mismos
nombres de rol. Ningún componente escoge un color, escoge un rol.

| | Web | Móvil |
|---|---|---|
| Color | variables CSS en `web/src/styles.scss` | `movil/…/res/values/colors.xml` |
| Tipografía | clases `.t-*` (Display L → Mono S) | estilos `Texto*` en `themes.xml` |
| Espaciado | `--sp-*`, múltiplos de 4 | `dimens.xml` |
| Radios | `--r-label`, `--r-field`, `--r-card`, `--r-full` | `radio_campo`, `radio_tarjeta` |

Los mapas están dibujados como **SVG** (web) y **vector drawable** (móvil). No son
imágenes de fondo.

Los fundamentos del sistema se respetan en ambas plataformas: una sola acción principal
por pantalla, ningún texto por debajo de 14, área táctil mínima de 48×48, la acción en
móvil dentro de los últimos 96 dp, y el estado de conexión siempre declarado.

## Adaptable, no responsive

Las pantallas se adaptan a un ancho mayor o menor sin romperse: en web las columnas se
apilan por debajo de 1100 px y los campos tienen ancho máximo y mínimo; en móvil el
contenido va en `ScrollView` con la acción anclada abajo.
