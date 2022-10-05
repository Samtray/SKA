package com.example.skaapi.Models.Alumno;

import com.example.skaapi.Models.Catalogs.EstadoCivil;
import com.example.skaapi.Models.Catalogs.Genero;

import javax.persistence.*;

@Entity
@Table(name = "datos_personales")
public class DatosPersonales {
    @Id @GeneratedValue long id;
    String fechaNacimiento;
    int edad;

    @OneToOne LugarDeNacimiento lugarDeNacimiento;
    @OneToOne Genero genero;
    @OneToOne EstadoCivil estadoCivil;
    @OneToOne Domicilio domicilio;
    @OneToOne Contacto contacto;

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public int getEdad() {
        return edad;
    }

    public LugarDeNacimiento getLugarDeNacimiento() {
        return lugarDeNacimiento;
    }

    public Genero getGenero() {
        return genero;
    }

    public EstadoCivil getEstadoCivil() {
        return estadoCivil;
    }

    public Domicilio getDomicilio() {
        return domicilio;
    }

    public Contacto getContacto() {
        return contacto;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setLugarDeNacimiento(LugarDeNacimiento lugarDeNacimiento) {
        this.lugarDeNacimiento = lugarDeNacimiento;
    }

    public void setGenero(Genero genero) {
        this.genero = genero;
    }

    public void setEstadoCivil(EstadoCivil estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    public void setDomicilio(Domicilio domicilio) {
        this.domicilio = domicilio;
    }

    public void setContacto(Contacto contacto) {
        this.contacto = contacto;
    }
}
