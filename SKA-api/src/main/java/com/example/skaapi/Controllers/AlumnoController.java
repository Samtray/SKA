package com.example.skaapi.Controllers;
import com.example.skaapi.Models.Alumno.Alumno;
import com.example.skaapi.Services.AlumnoService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @PostMapping("alumnos")
    Alumno postAlumnos(@RequestBody Alumno alumno){
        return alumnoService.insert(alumno);
    }
}
