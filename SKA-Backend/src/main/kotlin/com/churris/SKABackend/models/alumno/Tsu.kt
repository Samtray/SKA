package com.churris.SKABackend.models.alumno

data class Tsu (
    val bachillerato: Double,
    val nivelIngles: String,
    val puntosExamenIngreso: Long,
    val porCuatrimestre: List<Double>,
    val promedio: Long
)