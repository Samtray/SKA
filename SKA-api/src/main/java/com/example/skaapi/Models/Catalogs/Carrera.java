package com.example.skaapi.Models.Catalogs;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class Carrera extends BaseCatalog {
    @OneToOne Nivel nivel;
}
