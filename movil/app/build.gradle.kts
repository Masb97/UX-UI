plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.example.uxmobile"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.example.uxmobile"
        minSdk = 24
        targetSdk = 35
        versionCode = 1
        versionName = "0.0.1"
    }

    buildTypes {
        // La maqueta se entrega como instalable: se firma con la clave de
        // depuración para que el APK de release se pueda instalar sin más.
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("debug")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions { jvmTarget = "17" }

    buildFeatures { viewBinding = true }
}

dependencies {
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("com.google.android.material:material:1.12.0")
    implementation("androidx.constraintlayout:constraintlayout:2.2.1")
}
