package com.example.skaapi.Models.Alumno;

import com.example.skaapi.Models.Catalogs.EntidadFederativa;

import javax.persistence.*;

@Entity
@Table(name="lugar_nacimiento")
public class LugarDeNacimiento {
    @Id @GeneratedValue long id;

    String ciudad;
    @OneToOne
    EntidadFederativa entidadFederativa;

    public String getCiudad(){return this.ciudad; }
    public EntidadFederativa getEntidadFederativa() {
        return entidadFederativa;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setEntidadFederativa(EntidadFederativa entidadFederativa) {
        this.entidadFederativa = entidadFederativa;
    }
}
