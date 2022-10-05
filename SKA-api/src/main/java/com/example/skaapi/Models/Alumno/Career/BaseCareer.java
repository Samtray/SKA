package com.example.skaapi.Models.Alumno.Career;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="base_career")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
abstract class BaseCareer {
    @Id @GeneratedValue long id;
    @ElementCollection(fetch = FetchType.EAGER) List<Float> porCuatrimestre;

    float promedio;

    public List<Float> getPorCuatrimestre() {
        return porCuatrimestre;
    }

    public float getPromedio() {
        return promedio;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setPorCuatrimestre(List<Float> porCuatrimestre) {
        this.porCuatrimestre = porCuatrimestre;
    }

    public void setPromedio(float promedio) {
        this.promedio = promedio;
    }
}
