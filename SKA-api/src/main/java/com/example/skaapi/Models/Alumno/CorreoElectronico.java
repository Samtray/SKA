package com.example.skaapi.Models.Alumno;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "correo_electronico")
public class CorreoElectronico {
    @Id @GeneratedValue long id;
    String personal;
    String institucional;

    public String getPersonal() {
        return personal;
    }

    public String getInstitucional() {
        return institucional;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setPersonal(String personal) {
        this.personal = personal;
    }

    public void setInstitucional(String institucional) {
        this.institucional = institucional;
    }
}
