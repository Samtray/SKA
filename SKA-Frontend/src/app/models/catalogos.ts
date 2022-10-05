interface catalogo {
  id: any
  descripcion: any
}

export interface ICatalogos {
  municipios: catalogo[],
  generos: catalogo[],
  estadosCiviles: catalogo[],
  razonesTrabaja: catalogo[],
  viveCon: catalogo[],
  viviendas: catalogo[],
  transportes: catalogo[],
  apoyosEconomicos: catalogo[],
  ingresosFamiliares: catalogo[],
  tiposBachilleratos: catalogo[],
  entidadesFederativas: catalogo[],
}


export const CatalogosPlaceholder: ICatalogos = {
  municipios: [
    {
      id: "MN-RST",
      descripcion: "Rosarito"
    },
    {
      id: "MN-TC",
      descripcion: "Tecate"
    },
    {
      id: "MN-TJ",
      descripcion: "Tijuana"
    }
  ],
  generos: [
    {
      id: "GN-F",
      descripcion: "Femenino"
    },
    {
      id: "GN-M",
      descripcion: "Masculino"
    },
    {
      id: "GN-OND",
      descripcion: "Otro/No definido"
    }
  ],
  estadosCiviles: [
    {
      id: "EC-CSD",
      descripcion: "Casado(a)"
    },
    {
      id: "EC-DVR",
      descripcion: "Divorciado(a)"
    },
    {
      id: "EC-SLT",
      descripcion: "Soltero(a)"
    },
    {
      id: "EC-UL",
      descripcion: "Unión Libre"
    }
  ],
  razonesTrabaja: [
    {
      id: "RT-AEF",
      descripcion: "Apoyar Económicamente a la Familia"
    },
    {
      id: "RT-ATF",
      descripcion: "Apoyar Totalmente a la Familia"
    },
    {
      id: "RT-SGI",
      descripcion: "Solventar Algunos Gastos Personales"
    },
    {
      id: "RT-ST",
      descripcion: "Sostenerme Totalmente"
    }
  ],
  viveCon: [
    {
      id: "VC-AP",
      descripcion: "Ambos Padres"
    },
    {
      id: "VC-UP",
      descripcion: "Uno de los Padres"
    },
    {
      id: "VC-PRJ",
      descripcion: "Pareja"
    },
    {
      id: "VC-SL",
      descripcion: "Solo(a)"
    },
    {
      id: "VC-OF",
      descripcion: "Otro Familiar"
    },
    {
      id: "VC-AMG",
      descripcion: "Amigos"
    }
  ],
  viviendas: [
    {
      id: "VD-PRP",
      descripcion: "Propia"
    },
    {
      id: "VD-RNT",
      descripcion: "Rentada"
    },
    {
      id: "VD-PRS",
      descripcion: "Prestada"
    }
  ],
  transportes: [
    {
      id: "TR-PRP",
      descripcion: "Propio"
    },
    {
      id: "TR-PBL",
      descripcion: "Público"
    }
  ],
  apoyosEconomicos: [
    {
      id: "AE-PDR",
      descripcion: "Padre"
    },
    {
      id: "AE-MDR",
      descripcion: "Madre"
    },
    {
      id: "AE-HRM",
      descripcion: "Hermano(a)"
    },
    {
      id: "AE-CNY",
      descripcion: "Cónyuge"
    },
    {
      id: "AE-OF",
      descripcion: "Otro Familiar"
    },
    {
      id: "AE-YO",
      descripcion: "Yo"
    }
  ],
  ingresosFamiliares: [
    {
      id: "IF-ME5",
      descripcion: "Menos de $5,000"
    },
    {
      id: "IF-510",
      descripcion: "$5,000 A $10,000"
    },
    {
      id: "IF-1015",
      descripcion: "$10,000 A $15,000"
    },
    {
      id: "IF-MA15",
      descripcion: "Más de $15,000"
    }
  ],
  tiposBachilleratos: [
    {
      id: "TB-PBL",
      descripcion: "Escuela Pública (Oficial de Gobierno)"
    },
    {
      id: "TB-PRV",
      descripcion: "Privada o Particular"
    }
  ],
  entidadesFederativas: [
    {
      id: "AGC",
      descripcion: "Aguascalientes"
    },
    {
      id: "BC",
      descripcion: "Baja California"
    }
  ]
}
