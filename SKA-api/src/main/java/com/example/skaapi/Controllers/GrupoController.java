package com.example.skaapi.Controllers;

import com.example.skaapi.Projections.GrupoReflection;
import com.example.skaapi.Services.GrupoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GrupoController {
    GrupoService grupoService;

    GrupoController(GrupoService grupoService) {
        this.grupoService = grupoService;
    }

    @GetMapping("grupos/{id}")
    GrupoReflection getGrupobyId(@PathVariable String id){
        return grupoService.getById(id);
    }
}
