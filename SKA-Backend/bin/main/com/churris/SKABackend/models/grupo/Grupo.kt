package com.churris.SKABackend.models.grupo

data class Grupo (
    val id: String,
    val cuatrimestre: Long,
    val grupo: String,
    val descripcion: String,
    val carrera: Carrera,
    val especialidad: CatalogoGenerico,
    val periodo: CatalogoGenerico
)
