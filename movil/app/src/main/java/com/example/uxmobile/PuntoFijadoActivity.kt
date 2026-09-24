package com.example.uxmobile

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.uxmobile.databinding.ActivityPuntoFijadoBinding

/** M2-B: punto de ejemplo y selección de etiqueta del prototipo. */
class PuntoFijadoActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val b = ActivityPuntoFijadoBinding.inflate(layoutInflater)
        setContentView(b.root)
        if (savedInstanceState == null) b.etiquetas.check(R.id.etiqueta_otro)
        b.btnVolver.setOnClickListener { finish() }
        b.btnGuardarUsar.setOnClickListener {
            val nombre = when (b.etiquetas.checkedChipId) {
                R.id.etiqueta_casa -> getString(R.string.casa)
                R.id.etiqueta_trabajo -> getString(R.string.trabajo)
                R.id.etiqueta_universidad -> getString(R.string.m2b_universidad)
                else -> getString(R.string.m2b_lugar)
            }
            startActivity(Intent(this, DestinoActivity::class.java)
                .putExtra("nombreDestino", nombre)
                .putExtra("direccionDestino", getString(R.string.m2b_direccion)))
        }
    }
}
