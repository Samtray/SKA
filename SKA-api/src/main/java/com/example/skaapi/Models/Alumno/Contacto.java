package com.example.skaapi.Models.Alumno;

import javax.persistence.*;

@Entity
@Table(name = "contacto")
public class Contacto {

    @Id @GeneratedValue long id;
    @OneToOne CorreoElectronico correoElectronico;
    @OneToOne Telefono telefono;

    public CorreoElectronico getCorreoElectronico() {
        return correoElectronico;
    }

    public Telefono getTelefono() {
        return telefono;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setCorreoElectronico(CorreoElectronico correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public void setTelefono(Telefono telefono) {
        this.telefono = telefono;
    }
}
