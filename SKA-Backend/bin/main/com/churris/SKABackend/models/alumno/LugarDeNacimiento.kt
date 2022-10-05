package com.churris.SKABackend.models.alumno

import com.churris.SKABackend.models.alumno.CatalogoGenerico

data class LugarDeNacimiento (
    val ciudad: String,
    val entidadFederativa: CatalogoGenerico
)