package com.example.uxmobile

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import com.example.uxmobile.databinding.ActivityDestinoBinding

/**
 * Pantalla 2 — ¿Cuándo te aviso?
 *
 * La selección cambia fondo, color de texto, tinte del icono y el radio
 * marcado. Nada crítico depende solo del color.
 */
class DestinoActivity : AppCompatActivity() {

    private lateinit var b: ActivityDestinoBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        b = ActivityDestinoBinding.inflate(layoutInflater)
        setContentView(b.root)

        b.btnVolver.setOnClickListener { finish() }
        b.opcionParadas.setOnClickListener { seleccionar(paradas = true) }
        b.opcionMinutos.setOnClickListener { seleccionar(paradas = false) }

        seleccionar(paradas = true)
    }

    private fun seleccionar(paradas: Boolean) {
        val activo = ContextCompat.getColor(this, R.color.on_primary)
        val inactivoTitulo = ContextCompat.getColor(this, R.color.on_surface)
        val inactivoDetalle = ContextCompat.getColor(this, R.color.on_surface_variant)
        val bordeInactivo = ContextCompat.getColor(this, R.color.outline)

        b.opcionParadas.setBackgroundResource(
            if (paradas) R.drawable.fondo_opcion_activa else R.drawable.fondo_tarjeta)
        b.opcionMinutos.setBackgroundResource(
            if (paradas) R.drawable.fondo_tarjeta else R.drawable.fondo_opcion_activa)

        b.titParadas.setTextColor(if (paradas) activo else inactivoTitulo)
        b.detParadas.setTextColor(if (paradas) activo else inactivoDetalle)
        b.titMinutos.setTextColor(if (paradas) inactivoTitulo else activo)
        b.detMinutos.setTextColor(if (paradas) inactivoDetalle else activo)

        b.icParadas.setColorFilter(if (paradas) activo else inactivoTitulo)
        b.icMinutos.setColorFilter(if (paradas) inactivoTitulo else activo)

        b.radioParadas.isChecked = paradas
        b.radioMinutos.isChecked = !paradas
        b.radioParadas.buttonTintList =
            android.content.res.ColorStateList.valueOf(if (paradas) activo else bordeInactivo)
        b.radioMinutos.buttonTintList =
            android.content.res.ColorStateList.valueOf(if (paradas) bordeInactivo else activo)
    }
}
