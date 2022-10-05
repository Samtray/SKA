package com.example.skaapi.Models.Alumno;

import javax.persistence.*;

@Entity
@Table (name = "datos_laborales")
public class DatosLaborales {
    @Id @GeneratedValue long id;
    boolean trabaja;
    boolean estaRelacionadoEstudios;

    @OneToOne Empresa empresa;

    public boolean isTrabaja() {
        return trabaja;
    }

    public boolean isEstaRelacionadoEstudios() {
        return estaRelacionadoEstudios;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTrabaja(boolean trabaja) {
        this.trabaja = trabaja;
    }

    public void setEstaRelacionadoEstudios(boolean estaRelacionadoEstudios) {
        this.estaRelacionadoEstudios = estaRelacionadoEstudios;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }
}
