package com.example.skaapi.Controllers;
import com.example.skaapi.Models.Alumno.Alumno;
import com.example.skaapi.Services.AlumnoService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class AlumnoController {

    AlumnoService alumnoService;

    AlumnoController(AlumnoService alumnoService){ this.alumnoService = alumnoService;
    }

    @GetMapping("alumnos")
    List<Alumno> getAlumnos(){
        return alumnoService.getAll();
    }

    @GetMapping("alumnos/{id}")
    Optional<Alumno> getAlumno(@PathVariable String id){
        return alumnoService.getAlumnoPerMatricula(id);
    }

    @PostMapping("alumnos")
    Alumno postAlumnos(@RequestBody Alumno alumno){
        return alumnoService.insert(alumno);
    }
}
