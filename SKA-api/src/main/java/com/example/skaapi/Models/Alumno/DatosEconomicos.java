package com.example.skaapi.Models.Alumno;

import com.example.skaapi.Models.Catalogs.*;

import javax.persistence.*;
import com.example.skaapi.Models.Catalogs.*;

@Entity
@Table(name="datos_economicos")
public class DatosEconomicos {
    @Id @GeneratedValue long id;

    @OneToOne ViveCon viveCon;
    @OneToOne Vivienda vivienda;
    @OneToOne Transporte transporte;
    @OneToOne ApoyoEconomico apoyoEconomico;
    @OneToOne IngresosFamiliares ingresosFamiliares;

    public ViveCon getViveCon() {
        return viveCon;
    }

    public Vivienda getVivienda() {
        return vivienda;
    }

    public Transporte getTransporte() {
        return transporte;
    }

    public ApoyoEconomico getApoyoEconomico() {
        return apoyoEconomico;
    }

    public IngresosFamiliares getIngresosFamiliares() {
        return ingresosFamiliares;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setViveCon(ViveCon viveCon) {
        this.viveCon = viveCon;
    }

    public void setVivienda(Vivienda vivienda) {
        this.vivienda = vivienda;
    }

    public void setTransporte(Transporte transporte) {
        this.transporte = transporte;
    }

    public void setApoyoEconomico(ApoyoEconomico apoyoEconomico) {
        this.apoyoEconomico = apoyoEconomico;
    }

    public void setIngresosFamiliares(IngresosFamiliares ingresosFamiliares) {
        this.ingresosFamiliares = ingresosFamiliares;
    }
}
