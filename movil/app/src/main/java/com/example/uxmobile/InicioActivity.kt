package com.example.uxmobile

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.uxmobile.databinding.ActivityInicioBinding

/**
 * Pantalla 1 — ¿A dónde vas hoy?
 *
 * Es maquetación: no hay lógica de negocio, ni persistencia, ni captura de
 * datos. Lo único que hace el código es permitir la navegación entre las
 * tres pantallas entregadas, que es lo que se evalúa.
 */
class InicioActivity : AppCompatActivity() {

    private lateinit var b: ActivityInicioBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        b = ActivityInicioBinding.inflate(layoutInflater)
        setContentView(b.root)

        val irADestino = { startActivity(Intent(this, DestinoActivity::class.java)) }

        b.btnArmar.setOnClickListener { startActivity(Intent(this, AlarmaArmadaActivity::class.java)) }
        b.itemTrabajo.setOnClickListener { irADestino() }
        b.itemCasa.setOnClickListener { irADestino() }
        b.btnOtro.setOnClickListener { startActivity(Intent(this, ElegirDestinoActivity::class.java)) }
    }
}
