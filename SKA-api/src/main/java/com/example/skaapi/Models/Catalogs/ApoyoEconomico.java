package com.example.skaapi.Models.Catalogs;

        /*
        Can be implemented as enum -> Values:
        AE_PDR("Padre"),
        AE_MDR("Madre"),
        AE_HRM("Hermano(a)"),
        AE_CNY("Conyugue"),
        AE_OF("Otro Familiar"),
        AE_YO("Yo");*/

import com.example.skaapi.Models.Catalogs.BaseCatalog;
import javax.persistence.Entity;

@Entity
public class ApoyoEconomico extends BaseCatalog {
}