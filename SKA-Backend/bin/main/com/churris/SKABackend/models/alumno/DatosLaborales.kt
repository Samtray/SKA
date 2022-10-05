package com.churris.SKABackend.models.alumno

data class DatosLaborales (
    val trabaja: Boolean,
    val estaRelacionadoEstudios: Boolean,
    val empresa: Empresa
)