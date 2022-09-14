package com.churris.SKABackend.models

data class Domicilio (
    val calle: String,
    val numero: String,
    val colonia: String,
    val municipio: Municipio
)