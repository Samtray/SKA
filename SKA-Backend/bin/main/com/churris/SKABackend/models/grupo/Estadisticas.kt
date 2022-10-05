package com.churris.SKABackend.models.grupo

data class Estadisticas (
    val alumnos: Long,
    val datosPersonales: DatosPersonales,
    val datosLaborales: DatosLaborales,
    val datosEscolares: DatosEscolares,
    val promedios: Promedios
)