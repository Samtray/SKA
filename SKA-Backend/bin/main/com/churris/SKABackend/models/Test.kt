package com.churris.SKABackend.models
import javax.persistence.*

@Entity
@Table(name = "test")
data class Test(
    @Id @GeneratedValue(strategy = GenerationType.AUTO) var id: Long,
    var descripcion: String,
)
