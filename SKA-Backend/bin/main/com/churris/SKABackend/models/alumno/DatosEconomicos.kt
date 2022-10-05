package com.churris.SKABackend.models.alumno

import com.churris.SKABackend.models.alumno.CatalogoGenerico

data class DatosEconomicos (
    val viveCon: CatalogoGenerico,
    val vivienda: CatalogoGenerico,
    val transporte: CatalogoGenerico,
    val apoyoEconomico: CatalogoGenerico,
    val ingresosFamiliares: CatalogoGenerico
)