package com.example.skaapi.Models.Alumno;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="telefono")
public class Telefono {
    @Id @GeneratedValue long id;
    String casa;
    String movil;

    public String getCasa() {
        return casa;
    }

    public String getMovil() {
        return movil;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setCasa(String casa) {
        this.casa = casa;
    }

    public void setMovil(String movil) {
        this.movil = movil;
    }
}
