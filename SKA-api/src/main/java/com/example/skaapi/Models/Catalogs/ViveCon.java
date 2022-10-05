package com.example.skaapi.Models.Catalogs;

import com.example.skaapi.Models.Catalogs.BaseCatalog;

import javax.persistence.Entity;

/* Enum. Values
    VC_AP("Ambos Padres"),
    VC_UP("Uno de los Padres"),
    VC_PRJ("Pareja"),
    VC_SL("Solo(a)"),
    VC_OF("Otro Familiar"),
    VC_A("Amigos");
 */
@Entity
public class ViveCon extends BaseCatalog {
}
