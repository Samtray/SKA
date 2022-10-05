package com.churris.SKABackend.models.alumno

data class Alumno (
    val matricula: String,
    val nombreCompleto: String,
    val foto: String,
    val datosPersonales: DatosPersonales,
    val datosFamiliares: DatosFamiliares,
    val datosLaborales: DatosLaborales,
    val datosEconomicos: DatosEconomicos,
    val datosEscolares: DatosEscolares,
    val promedios: Promedios
)
