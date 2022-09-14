package com.churris.SKABackend.models

data class DatosEconomicos (
    val viveCon: CatalogoGenerico,
    val vivienda: CatalogoGenerico,
    val transporte: CatalogoGenerico,
    val apoyoEconomico: CatalogoGenerico,
    val ingresosFamiliares: CatalogoGenerico
)