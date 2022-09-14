package com.churris.SKABackend.models

data class DatosPersonales (
    val fechaDeNacimiento: String,
    val edad: Long,
    val lugarDeNacimiento: LugarDeNacimiento,
    val genero: Genero,
    val estadoCivil: EstadoCivil,
    val domicilio: Domicilio,
    val contacto: Contacto
)