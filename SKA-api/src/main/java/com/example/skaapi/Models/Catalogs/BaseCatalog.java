package com.example.skaapi.Models.Catalogs;

import javax.persistence.*;

@Entity
@Table(name="base_catalog")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
abstract class BaseCatalog {
    @Id String Id;
    String descripcion;

    public  BaseCatalog(){

    }
    public BaseCatalog(String id, String descripcion) {
        Id = id;
        this.descripcion = descripcion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getId() {
        return Id;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

}
