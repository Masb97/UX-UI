package com.example.uxmobile

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.uxmobile.databinding.ActivityIntroduccionBinding

class IntroduccionActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val binding = ActivityIntroduccionBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.btnEmpezar.setOnClickListener { abrirInicio() }
        binding.btnSaltar.setOnClickListener { abrirInicio() }
    }

    private fun abrirInicio() {
        startActivity(Intent(this, InicioActivity::class.java))
        finish()
    }
}
