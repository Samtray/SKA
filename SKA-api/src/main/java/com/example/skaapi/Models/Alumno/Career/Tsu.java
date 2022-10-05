package com.example.skaapi.Models.Alumno.Career;

import javax.persistence.Entity;

@Entity
public class Tsu extends BaseCareer {
    String nivelIngles;
    int puntosExamenIngreso;

    public String getNivelIngles() {
        return nivelIngles;
    }

    public int getPuntosExamenIngreso() {
        return puntosExamenIngreso;
    }

    public void setNivelIngles(String nivelIngles) {
        this.nivelIngles = nivelIngles;
    }

    public void setPuntosExamenIngreso(int puntosExamenIngreso) {
        this.puntosExamenIngreso = puntosExamenIngreso;
    }
}
