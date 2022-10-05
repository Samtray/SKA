package com.example.skaapi.Models.Alumno;

import com.example.skaapi.Models.Alumno.Career.Ingenieria;
import com.example.skaapi.Models.Alumno.Career.Tsu;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.OneToOne;

@Entity
@Table(name = "promedios")
public class Promedio {
    @Id @GeneratedValue long id;
    float bachillerato;

    @OneToOne
    Tsu tsu;
    @OneToOne
    Ingenieria ingenieria;

    public float getBachillerato() {
        return bachillerato;
    }

    public Tsu getTsu() {
        return tsu;
    }

    public Ingenieria getIngenieria() {
        return ingenieria;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setBachillerato(float bachillerato) {
        this.bachillerato = bachillerato;
    }

    public void setTsu(Tsu tsu) {
        this.tsu = tsu;
    }

    public void setIngenieria(Ingenieria ingenieria) {
        this.ingenieria = ingenieria;
    }
}
