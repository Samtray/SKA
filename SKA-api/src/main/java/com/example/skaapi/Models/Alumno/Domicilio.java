package com.example.skaapi.Models.Alumno;

import com.example.skaapi.Models.Catalogs.Municipio;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.OneToOne;

@Entity
@Table(name = "domicilio")
public class Domicilio{
    @Id @GeneratedValue Long id;
    String calle;
    String numero;
    String colonia;

    @OneToOne
    Municipio municipio;

    public String getCalle() {
        return calle;
    }

    public String getNumero() {
        return numero;
    }

    public String getColonia() {
        return colonia;
    }

    public Municipio getMunicipio() {
        return municipio;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public void setColonia(String colonia) {
        this.colonia = colonia;
    }

    public void setMunicipio(Municipio municipio) {
        this.municipio = municipio;
    }
}
