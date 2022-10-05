package com.churris.SKABackend.models.grupo

data class DatosLaborales (
    val trabajan: Trabajan,
    val trabajoRelacionadoEstudios: Trabajan,
    val razonTrabaja: List<DescripcionCantidad>
)
