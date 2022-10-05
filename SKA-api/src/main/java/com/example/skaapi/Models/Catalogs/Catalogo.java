package com.example.skaapi.Models.Catalogs;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.context.annotation.Lazy;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "catalogs")
public class Catalogo {
    @Id @GeneratedValue Long id;
    @OneToMany(fetch=FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<Municipio> municipios;
    @OneToMany(fetch = FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<Genero> generos;
    @OneToMany(fetch = FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<EstadoCivil> estadosCiviles;
    @OneToMany(fetch = FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<RazonTrabaja> razonesTrabaja;
    @OneToMany(fetch = FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<ViveCon> viveCon;
    @OneToMany(fetch = FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<Vivienda> viviendas;
    @OneToMany(fetch = FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<Transporte> transportes;
    @OneToMany(fetch = FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<ApoyoEconomico> apoyosEconomicos;
    @OneToMany(fetch = FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<IngresosFamiliares> ingresosFamiliares;
    @OneToMany(fetch = FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<TipoBachillerato> tiposBachilleratos;
    @OneToMany(fetch = FetchType.EAGER) @Fetch(value = FetchMode.SUBSELECT) List<EntidadFederativa> entidadesFederativas;

    public List<Municipio> getMunicipios() {
        return municipios;
    }

    public List<Genero> getGeneros() {
        return generos;
    }

    public List<EstadoCivil> getEstadosCiviles() {
        return estadosCiviles;
    }

    public List<RazonTrabaja> getRazonesTrabaja() {
        return razonesTrabaja;
    }

    public List<ViveCon> getViveCon() {
        return viveCon;
    }


    public List<Vivienda> getViviendas() {
        return viviendas;
    }

    public List<Transporte> getTransportes() {
        return transportes;
    }

    public List<ApoyoEconomico> getApoyosEconomicos() {
        return apoyosEconomicos;
    }

    public List<IngresosFamiliares> getIngresosFamiliares() {
        return ingresosFamiliares;
    }

    public List<TipoBachillerato> getTiposBachilleratos() {
        return tiposBachilleratos;
    }

    public List<EntidadFederativa> getEntidadesFederativas() {
        return entidadesFederativas;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setMunicipios(List<Municipio> municipios) {
        this.municipios = municipios;
    }

    public void setGeneros(List<Genero> generos) {
        this.generos = generos;
    }

    public void setEstadosCiviles(List<EstadoCivil> estadosCiviles) {
        this.estadosCiviles = estadosCiviles;
    }

    public void setRazonesTrabaja(List<RazonTrabaja> razonesTrabaja) {
        this.razonesTrabaja = razonesTrabaja;
    }

    public void setViveCon(List<ViveCon> viveCon) {
        this.viveCon = viveCon;
    }

    public void setViviendas(List<Vivienda> viviendas) {
        this.viviendas = viviendas;
    }

    public void setTransportes(List<Transporte> transportes) {
        this.transportes = transportes;
    }

    public void setApoyosEconomicos(List<ApoyoEconomico> apoyosEconomicos) {
        this.apoyosEconomicos = apoyosEconomicos;
    }

    public void setIngresosFamiliares(List<IngresosFamiliares> ingresosFamiliares) {
        this.ingresosFamiliares = ingresosFamiliares;
    }

    public void setTiposBachilleratos(List<TipoBachillerato> tiposBachilleratos) {
        this.tiposBachilleratos = tiposBachilleratos;
    }

    public void setEntidadesFederativas(List<EntidadFederativa> entidadesFederativas) {
        this.entidadesFederativas = entidadesFederativas;
    }
}
