package com.churris.SKABackend.models

data class DatosEscolares (
    val nombreBachillerato: String,
    val tipoBachillerato: CatalogoGenerico,
    val entidadFederativa: CatalogoGenerico
)