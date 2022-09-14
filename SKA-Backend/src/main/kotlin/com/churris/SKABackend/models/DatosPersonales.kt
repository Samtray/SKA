package com.churris.SKABackend.models

data class DatosPersonales (
    val fechaDeNacimiento: String,
    val edad: Long,
    val lugarDeNacimiento: LugarDeNacimiento,
    val genero: CatalogoGenerico,
    val estadoCivil: CatalogoGenerico,
    val domicilio: Domicilio,
    val contacto: Contacto
)