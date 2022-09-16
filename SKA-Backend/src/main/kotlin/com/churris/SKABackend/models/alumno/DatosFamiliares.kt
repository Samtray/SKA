package com.churris.SKABackend.models.alumno

data class DatosFamiliares (
    val padre: Conyuge,
    val madre: Conyuge,
    val conyuge: Conyuge,
    val emergencia: Emergencia
)
