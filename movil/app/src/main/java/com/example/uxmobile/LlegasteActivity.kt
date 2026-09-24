package com.example.uxmobile

import android.content.Intent
import android.os.Bundle
import androidx.activity.addCallback
import androidx.appcompat.app.AppCompatActivity
import com.example.uxmobile.databinding.ActivityLlegasteBinding

/** M1-E: llegada de ejemplo y navegación del prototipo, sin persistencia. */
class LlegasteActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val b = ActivityLlegasteBinding.inflate(layoutInflater)
        setContentView(b.root)
        val nombre = intent.getStringExtra("nombreDestino") ?: getString(R.string.trabajo)
        val direccion = intent.getStringExtra("direccionDestino") ?: getString(R.string.dir_trabajo)
        b.etiquetaDestino.text = nombre
        b.detalleGuardar.text = getString(R.string.m1e_detalle_guardar, direccion)
        b.btnGuardar.setOnClickListener { volverInicio() }
        b.btnNoGracias.setOnClickListener { volverInicio() }
        b.btnInicio.setOnClickListener { volverInicio() }
        onBackPressedDispatcher.addCallback(this) { volverInicio() }
    }

    private fun volverInicio() {
        startActivity(Intent(this, InicioActivity::class.java)
            .addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_SINGLE_TOP))
        finish()
    }
}
