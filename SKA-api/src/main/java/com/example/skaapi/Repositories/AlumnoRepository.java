package com.example.skaapi.Repositories;

import com.example.skaapi.Models.Alumno.Alumno;
import com.example.skaapi.Projections.AlumnoReflection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlumnoRepository extends JpaRepository<Alumno, String> {

}
