package com.example.skaapi.Models.Alumno;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "alumno")
public class Alumno {
    @Id String matricula;
    String nombreCompleto;
    String foto;

    @OneToOne Contacto contacto;
    @OneToOne DatosPersonales datosPersonales;
    @OneToOne DatosFamiliares datosFamiliares;
    @OneToOne DatosLaborales datosLaborales;
    @OneToOne DatosEconomicos datosEconomicos;
    @OneToOne DatosEscolares datosEscolares;
    @OneToOne Promedio promedio;

    public String getMatricula() {
        return matricula;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public String getFoto() {
        return foto;
    }

    public Contacto getContacto() {
        return contacto;
    }

    public DatosPersonales getDatosPersonales() {
        return datosPersonales;
    }

    public DatosFamiliares getDatosFamiliares() {
        return datosFamiliares;
    }

    public DatosLaborales getDatosLaborales() {
        return datosLaborales;
    }

    public DatosEconomicos getDatosEconomicos() {
        return datosEconomicos;
    }

    public DatosEscolares getDatosEscolares() {
        return datosEscolares;
    }

    public Promedio getPromedio() {
        return promedio;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public void setContacto(Contacto contacto) {
        this.contacto = contacto;
    }

    public void setDatosPersonales(DatosPersonales datosPersonales) {
        this.datosPersonales = datosPersonales;
    }

    public void setDatosFamiliares(DatosFamiliares datosFamiliares) {
        this.datosFamiliares = datosFamiliares;
    }

    public void setDatosLaborales(DatosLaborales datosLaborales) {
        this.datosLaborales = datosLaborales;
    }

    public void setDatosEconomicos(DatosEconomicos datosEconomicos) {
        this.datosEconomicos = datosEconomicos;
    }

    public void setDatosEscolares(DatosEscolares datosEscolares) {
        this.datosEscolares = datosEscolares;
    }

    public void setPromedio(Promedio promedio) {
        this.promedio = promedio;
    }
}
