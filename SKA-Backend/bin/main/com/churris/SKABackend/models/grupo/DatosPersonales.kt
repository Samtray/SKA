package com.churris.SKABackend.models.grupo

data class DatosPersonales (
    val genero: List<DescripcionCantidad>,
    val estadoCivil: List<DescripcionCantidad>,
    val viveCon: List<DescripcionCantidad>,
    val ingresosFamiliares: List<DescripcionCantidad>
)