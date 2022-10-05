package com.churris.SKABackend.models.alumno

import com.churris.SKABackend.models.alumno.CatalogoGenerico

data class DatosEscolares (
    val nombreBachillerato: String,
    val tipoBachillerato: CatalogoGenerico,
    val entidadFederativa: CatalogoGenerico
)