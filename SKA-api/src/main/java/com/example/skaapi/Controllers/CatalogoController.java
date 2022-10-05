package com.example.skaapi.Controllers;

import com.example.skaapi.Models.Alumno.Alumno;
import com.example.skaapi.Models.Catalogs.Catalogo;
import com.example.skaapi.Services.AlumnoService;
import com.example.skaapi.Services.CatalogoService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.catalog.Catalog;
import java.util.List;
@RestController
@RequestMapping("/api")
public class CatalogoController {
    CatalogoService catalogoService;

    public CatalogoController(CatalogoService catalogoService) {
        this.catalogoService = catalogoService;
    }

    @GetMapping("catalogos")
    List<Catalogo> getCatalogos() {
        return catalogoService.getAll();
    }

    @PostMapping("catalogos")
    Catalogo postCatalog(@RequestBody Catalogo catalogo){
        return catalogoService.save(catalogo);
    }
}