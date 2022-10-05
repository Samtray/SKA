package com.example.skaapi.Repositories;

import com.example.skaapi.Models.Catalogs.Catalogo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CatalogoRepository extends JpaRepository<Catalogo, Long> {
}
