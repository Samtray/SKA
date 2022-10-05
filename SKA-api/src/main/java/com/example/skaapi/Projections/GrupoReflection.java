package com.example.skaapi.Projections;

import com.example.skaapi.Models.Catalogs.Carrera;
import com.example.skaapi.Models.Catalogs.Especialidad;
import com.example.skaapi.Models.Catalogs.Periodo;

import java.util.List;

public interface GrupoReflection {
    String getid();
    int getCuatrimestre();
    char getGrupo();
    String getDescripcion();
    Carrera getCarrera();
    Especialidad getEspecialidad();
    Periodo getPeriodo();

    List<AlumnoReflection> getAlumnos();
}
