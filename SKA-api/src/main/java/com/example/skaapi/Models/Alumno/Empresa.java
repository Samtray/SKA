package com.example.skaapi.Models.Alumno;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "empresa")
public class Empresa {
    @Id @GeneratedValue long id;
    String nombre;
    String domicilio;
    String telefono;
    String puesto;
    String departamento;

    public String getNombre() {
        return nombre;
    }

    public String getDomicilio() {
        return domicilio;
    }

    public String getTelefono() {
        return telefono;
    }

    public String getPuesto() {
        return puesto;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }
}
