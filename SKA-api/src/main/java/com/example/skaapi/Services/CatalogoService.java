package com.example.skaapi.Services;

import com.example.skaapi.Models.Catalogs.Catalogo;
import com.example.skaapi.Repositories.CatalogoRepository;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
@Lazy
@Service
public class CatalogoService {
    CatalogoRepository catalogoRepository;

    CatalogoService(CatalogoRepository catalogoRepository){
        this.catalogoRepository = catalogoRepository;
    }

    public List<Catalogo> getAll(){
        return catalogoRepository.findAll();
    }

    public Catalogo save(Catalogo catalogo){
        return catalogoRepository.save(catalogo);
    }
}
