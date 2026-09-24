package com.example.uxmobile

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.uxmobile.databinding.ActivityAlarmaArmadaBinding

/** M1-B: estado armado del prototipo; sin seguimiento ni alarma real. */
class AlarmaArmadaActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val b = ActivityAlarmaArmadaBinding.inflate(layoutInflater)
        setContentView(b.root)
        val nombre = intent.getStringExtra("nombreDestino") ?: getString(R.string.trabajo)
        val direccion = intent.getStringExtra("direccionDestino") ?: getString(R.string.dir_trabajo)
        val paradas = intent.getBooleanExtra("avisoParadas", true)
        b.resumenAviso.text = getString(if (paradas) R.string.m1b_resumen_paradas else R.string.m1b_resumen_minutos, nombre)
        b.etiquetaDestino.text = nombre
        b.btnProbar.setOnClickListener {
            startActivity(Intent(this, AvisoActivity::class.java)
                .putExtra("nombreDestino", nombre)
                .putExtra("direccionDestino", direccion)
                .putExtra("avisoParadas", paradas))
        }
        b.btnDesarmar.setOnClickListener {
            startActivity(Intent(this, InicioActivity::class.java)
                .addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_SINGLE_TOP))
            finish()
        }
    }
}
