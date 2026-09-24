# Mi alarma — Android

Prototipo nativo en Kotlin con View Binding y layouts XML. Incluye las ocho
vistas M0, M1-A, M2, M2-B, M3, M1-B, M4-A y M1-E.

## Abrir y ejecutar

1. Abrir esta carpeta en Android Studio.
2. Instalar Android SDK Platform 35 y los componentes requeridos por Gradle.
3. Seleccionar el JDK incluido con Android Studio en **Settings → Build,
   Execution, Deployment → Build Tools → Gradle → Gradle JDK**.
4. Completar la sincronización del proyecto.
5. Seleccionar **app** y un emulador o teléfono autorizado mediante depuración USB.
6. Pulsar **Run**. La aplicación abre M0 Así funciona.

Configuración del proyecto: Android Gradle Plugin 8.7.3, Gradle Wrapper 8.11.1,
Kotlin 2.0.21, compilación Java/Kotlin con destino 17, SDK 35 y mínimo API 24.
Usar el wrapper incluido, sin instalar otra versión de Gradle por separado.

## Navegación

```text
M0 Así funciona
 └─ Empezar / Saltar → M1-A Inicio
     ├─ Sí, armar la alarma → M1-B Alarma armada
     ├─ Destino guardado → M3 Tu destino
     └─ Elegir otro destino → M2 Sin resultados
         ├─ Trabajo / Casa → M3 Tu destino
         └─ Sugerencia / Mapa → M2-B Punto fijado
             └─ Guardar y usar → M3 Tu destino
                 └─ Armar → M1-B Alarma armada
                     ├─ Desarmar → M1-A Inicio
                     └─ Probar el aviso → M4-A Alarma sonando
                         └─ Deslizar para apagar → M1-E Llegaste
                             └─ Guardar / No, gracias / Volver → M1-A Inicio
```

M2-B permite seleccionar Casa, Trabajo, Universidad u Otro. M3 permite elegir
aviso por paradas o minutos. El destino y el aviso se pasan entre las pantallas
correspondientes mediante extras de los intents.

Los mapas, tiempos y distancias son datos de demostración. No hay GPS, sonido,
backend, sincronización ni persistencia. Guardar solo recorre el prototipo.
Los botones de ajustes no tienen una pantalla asociada.

## Archivos relevantes

- [AndroidManifest.xml](app/src/main/AndroidManifest.xml): actividades; M0 es el launcher.
- [Actividades Kotlin](app/src/main/java/com/example/uxmobile/).
- [Layouts XML](app/src/main/res/layout/).
- [Colores, textos y dimensiones](app/src/main/res/values/).
- [Configuración del módulo](app/build.gradle.kts).

`local.properties` contiene la ubicación local del SDK y lo genera Android Studio.

Para revisar la fidelidad, comparar con el frame móvil de 375 × 812 teniendo en
cuenta la densidad, las barras del sistema y la escala de fuente del dispositivo.
