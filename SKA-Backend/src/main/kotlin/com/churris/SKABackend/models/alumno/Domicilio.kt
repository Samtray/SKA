package com.churris.SKABackend.models.alumno

data class Domicilio (
    val calle: String,
    val numero: String,
    val colonia: String,
    val municipio: Municipio
)