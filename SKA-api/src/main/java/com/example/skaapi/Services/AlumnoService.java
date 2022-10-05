package com.example.skaapi.Services;

import com.example.skaapi.Models.Alumno.Alumno;
import com.example.skaapi.Repositories.AlumnoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlumnoService {
    AlumnoRepository alumnoRepository;

    AlumnoService(AlumnoRepository alumnoRepository){
        this.alumnoRepository = alumnoRepository;
    }
    public List<Alumno> getAll(){
        return alumnoRepository.findAll();
    }
    public Optional<Alumno> getAlumnoPerMatricula(String id){ return alumnoRepository.findById(id);}

    public Alumno insert(Alumno alumno){
        return alumnoRepository.save(alumno);
    }
}
