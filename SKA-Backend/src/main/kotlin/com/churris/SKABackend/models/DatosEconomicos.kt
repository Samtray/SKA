package com.churris.SKABackend.models

data class DatosEconomicos (
    val viveCon: ApoyoEconomico,
    val vivienda: ApoyoEconomico,
    val transporte: ApoyoEconomico,
    val apoyoEconomico: ApoyoEconomico,
    val ingresosFamiliares: ApoyoEconomico
)