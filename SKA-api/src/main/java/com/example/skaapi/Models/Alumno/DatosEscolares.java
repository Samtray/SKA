package com.example.skaapi.Models.Alumno;

import com.example.skaapi.Models.Catalogs.EntidadFederativa;
import com.example.skaapi.Models.Catalogs.TipoBachillerato;

import javax.persistence.*;

@Entity
@Table(name="datos_escolares")
public class DatosEscolares {
    @Id @GeneratedValue Long id;
    @OneToOne TipoBachillerato tipoBachillerato;
    @OneToOne EntidadFederativa entidadFederativa;

    public TipoBachillerato getTipoBachillerato() {
        return tipoBachillerato;
    }

    public EntidadFederativa getEntidadFederativa() {
        return entidadFederativa;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTipoBachillerato(TipoBachillerato tipoBachillerato) {
        this.tipoBachillerato = tipoBachillerato;
    }

    public void setEntidadFederativa(EntidadFederativa entidadFederativa) {
        this.entidadFederativa = entidadFederativa;
    }

}
