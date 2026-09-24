package com.example.uxmobile

import android.content.Intent
import android.os.Bundle
import android.view.MotionEvent
import androidx.appcompat.app.AppCompatActivity
import com.example.uxmobile.databinding.ActivityAvisoBinding
import kotlin.math.max
import kotlin.math.min

/**
 * Pantalla 3 — «Bájate en 2 paradas».
 *
 * El gesto de deslizar está maquetado de verdad —el pomo sigue el dedo y la
 * pantalla se cierra al llegar al final— porque el hallazgo del testeo dice
 * que apagar no puede exigir leer ni apuntar. Sigue sin haber alarma real:
 * no suena nada, no hay servicio ni sensor detrás.
 */
class AvisoActivity : AppCompatActivity() {

    private lateinit var b: ActivityAvisoBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        b = ActivityAvisoBinding.inflate(layoutInflater)
        setContentView(b.root)
        intent.getStringExtra("nombreDestino")?.let { b.destino.text = it }
        intent.getStringExtra("direccionDestino")?.let { b.direccion.text = it }
        if (!intent.getBooleanExtra("avisoParadas", true)) {
            b.titulo.setText(R.string.m1b_aviso_minutos)
        }

        var inicioX = 0f
        var recorrido = 0f

        b.deslizador.setOnTouchListener { v, evento ->
            val maximo = (v.width - b.pomo.width - 16 * resources.displayMetrics.density).coerceAtLeast(1f)
            when (evento.action) {
                MotionEvent.ACTION_DOWN -> { inicioX = evento.x; recorrido = 0f; true }
                MotionEvent.ACTION_MOVE -> {
                    recorrido = min(max(evento.x - inicioX, 0f), maximo)
                    b.pomo.translationX = recorrido
                    b.textoDeslizar.alpha = 1f - (recorrido / maximo)
                    true
                }
                MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {
                    if (evento.action == MotionEvent.ACTION_UP && recorrido > maximo * 0.75f) {
                        startActivity(Intent(this, LlegasteActivity::class.java)
                            .putExtra("nombreDestino", b.destino.text.toString())
                            .putExtra("direccionDestino", b.direccion.text.toString()))
                        finish()
                    } else {
                        b.pomo.animate().translationX(0f).setDuration(150).start()
                        b.textoDeslizar.animate().alpha(1f).setDuration(150).start()
                    }
                    v.performClick()
                    true
                }
                else -> false
            }
        }
    }
}
