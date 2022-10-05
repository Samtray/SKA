package com.example.skaapi.Models.Grupo;

import com.example.skaapi.Models.Alumno.Alumno;
import com.example.skaapi.Models.Catalogs.Carrera;
import com.example.skaapi.Models.Catalogs.Especialidad;
import com.example.skaapi.Models.Catalogs.Genero;
import com.example.skaapi.Models.Catalogs.Periodo;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "grupo")
public class Grupo {
    @Id private String id;
    private int cuatrimestre;
    private char grupo;
    private String descripcion;
    @OneToOne private Carrera carrera;
    @OneToOne private Especialidad especialidad;
    @OneToOne private Periodo periodo;
    @OneToMany(fetch = FetchType.EAGER) List<Alumno> alumnos;

    public void setId(String id) {
        this.id = id;
    }
    public String getId() {
        return id;
    }

    public int getCuatrimestre() {
        return cuatrimestre;
    }

    public void setCuatrimestre(int cuatrimestre) {
        this.cuatrimestre = cuatrimestre;
    }

    public char getGrupo() {
        return grupo;
    }

    public void setGrupo(char grupo) {
        this.grupo = grupo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Carrera getCarrera() {
        return carrera;
    }

    public void setCarrera(Carrera carrera) {
        this.carrera = carrera;
    }

    public Especialidad getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(Especialidad especialidad) {
        this.especialidad = especialidad;
    }

    public Periodo getPeriodo() {
        return periodo;
    }

    public void setPeriodo(Periodo periodo) {
        this.periodo = periodo;
    }

    public List<Alumno> getAlumnos() {
        return alumnos;
    }

    public void setAlumnos(List<Alumno> alumnos) {
        this.alumnos = alumnos;
    }
}
