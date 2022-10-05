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
