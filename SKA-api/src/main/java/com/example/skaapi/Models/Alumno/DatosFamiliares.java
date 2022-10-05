package com.example.skaapi.Models.Alumno;

import com.example.skaapi.Models.Alumno.Contact.Conyugue;
import com.example.skaapi.Models.Alumno.Contact.Emergencia;
import com.example.skaapi.Models.Alumno.Contact.Madre;
import com.example.skaapi.Models.Alumno.Contact.Padre;

import javax.persistence.*;

@Entity
@Table(name = "datos_familiares")
public class DatosFamiliares {
    @Id @GeneratedValue long id;

    @OneToOne
    Emergencia emergencia;
    @OneToOne
    Madre madre;
    @OneToOne
    Padre padre;
    @OneToOne
    Conyugue conyugue;

    public Emergencia getEmergencia() {
        return emergencia;
    }

    public Madre getMadre() {
        return madre;
    }

    public Padre getPadre() {
        return padre;
    }

    public Conyugue getConyugue() {
        return conyugue;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setEmergencia(Emergencia emergencia) {
        this.emergencia = emergencia;
    }

    public void setMadre(Madre madre) {
        this.madre = madre;
    }

    public void setPadre(Padre padre) {
        this.padre = padre;
    }

    public void setConyugue(Conyugue conyugue) {
        this.conyugue = conyugue;
    }
}
