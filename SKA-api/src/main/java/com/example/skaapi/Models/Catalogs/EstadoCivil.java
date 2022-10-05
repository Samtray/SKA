package com.example.skaapi.Models.Catalogs;

        /*
        Enum. Values:

        EC_CS("Casado (a)"),
        EC_DVR("Divorciado(a)"),
        EC_SLT("Soltero(a)"),
        EC_UL("Union Libre");*/


import com.example.skaapi.Models.Catalogs.BaseCatalog;

import javax.persistence.Entity;

@Entity
public class EstadoCivil extends BaseCatalog {
}