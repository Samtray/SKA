package com.example.skaapi.Services;

import com.example.skaapi.Projections.GrupoReflection;
import com.example.skaapi.Repositories.GrupoRepository;
import org.springframework.stereotype.Service;

@Service
public class GrupoService {
    GrupoRepository grupoRepository;

    public GrupoService(GrupoRepository grupoRepository) {
        this.grupoRepository = grupoRepository;
    }

    public GrupoReflection getById(String id){
        return grupoRepository.findGrupoById(id);
    }
}
