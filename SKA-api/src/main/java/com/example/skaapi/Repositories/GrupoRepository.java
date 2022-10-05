package com.example.skaapi.Repositories;

import com.example.skaapi.Models.Grupo.Grupo;
import com.example.skaapi.Projections.GrupoReflection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GrupoRepository extends JpaRepository<Grupo, Long>{
    GrupoReflection findGrupoById(String id);
}


