package com.example.skaapi.Models.Alumno.Contact;

import javax.persistence.*;

@Entity
@Table(name="base_contact")
@Inheritance (strategy = InheritanceType.SINGLE_TABLE)
abstract class BaseContact {
    @Id @GeneratedValue long id;
    String nombre;
    String Ocupacion;
    String telefono;

    public String getNombre() {
        return nombre;
    }

    public String getOcupacion() {
        return Ocupacion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setOcupacion(String ocupacion) {
        Ocupacion = ocupacion;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
