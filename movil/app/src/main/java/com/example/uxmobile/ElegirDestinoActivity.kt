package com.example.uxmobile

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.uxmobile.databinding.ActivityElegirDestinoBinding

/** M2: búsqueda sin resultados. Los destinos guardados abren M3. */
class ElegirDestinoActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val b = ActivityElegirDestinoBinding.inflate(layoutInflater)
        setContentView(b.root)
        b.btnVolver.setOnClickListener { finish() }
        b.itemTrabajo.setOnClickListener { abrirDestino(R.string.trabajo, R.string.dir_trabajo) }
        b.itemCasa.setOnClickListener { abrirDestino(R.string.casa, R.string.dir_casa) }
        val fijarPunto = { startActivity(Intent(this, PuntoFijadoActivity::class.java)) }
        b.sugerencia.setOnClickListener { fijarPunto() }
        b.mapa.setOnClickListener { fijarPunto() }
        b.mapa.isFocusable = true
    }

    private fun abrirDestino(nombre: Int, direccion: Int) {
        startActivity(Intent(this, DestinoActivity::class.java)
            .putExtra("nombreDestino", getString(nombre))
            .putExtra("direccionDestino", getString(direccion)))
    }
}
