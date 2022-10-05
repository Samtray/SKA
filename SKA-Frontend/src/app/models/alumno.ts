export interface Alumno {
  matricula?:       string;
  nombreCompleto?:  string;
  foto?:            string;
  contacto?:        Contacto;
  datosPersonales?: DatosPersonales;
  datosFamiliares?: DatosFamiliares;
  datosLaborales?:  DatosLaborales;
  datosEconomicos?: DatosEconomicos;
  datosEscolares?:  DatosEscolares;
  promedio?:        Promedio;
}

interface Contacto {
  correoElectronico?: CorreoElectronico;
  telefono?:          Telefono;
}

interface CorreoElectronico {
  personal?:      string;
  institucional?: string;
}

interface Telefono {
  casa?:  string;
  movil?: string;
}

interface DatosEconomicos {
  viveCon?:            CatalogoGenerico;
  vivienda?:           CatalogoGenerico;
  transporte?:         CatalogoGenerico;
  apoyoEconomico?:     CatalogoGenerico;
  ingresosFamiliares?: CatalogoGenerico;
}

interface CatalogoGenerico {
  descripcion?: string;
  id?:          string;
}

interface DatosEscolares {
  tipoBachillerato?:  CatalogoGenerico;
  entidadFederativa?: CatalogoGenerico;
}

interface DatosFamiliares {
  emergencia?: Conyugue;
  madre?:      Conyugue;
  padre?:      Conyugue;
  conyugue?:   Conyugue;
}

interface Conyugue {
  nombre?:    string;
  telefono?:  string;
  ocupacion?: string;
}

interface DatosLaborales {
  trabaja?:                 boolean;
  estaRelacionadoEstudios?: boolean;
  empresa?:                 Empresa;
}

interface Empresa {
  nombre?:       string;
  domicilio?:    string;
  telefono?:     string;
  puesto?:       string;
  departamento?: string;
}

interface DatosPersonales {
  fechaNacimiento?:   Date;
  edad?:              number;
  lugarDeNacimiento?: LugarDeNacimiento;
  genero?:            CatalogoGenerico;
  estadoCivil?:       CatalogoGenerico;
  domicilio?:         Domicilio;
  contacto?:          Contacto;
}

interface Domicilio {
  calle?:     string;
  numero?:    string;
  colonia?:   string;
  municipio?: CatalogoGenerico;
}

interface LugarDeNacimiento {
  ciudad?:            string;
  entidadFederativa?: CatalogoGenerico;
}

interface Promedio {
  bachillerato?: number;
  tsu?:          Tsu;
  ingenieria?:   Ingenieria;
}

 interface Ingenieria {
  porCuatrimestre?: number[];
  promedio?:        number;
}

 interface Tsu {
  porCuatrimestre?:     number[];
  promedio?:            number;
  nivelIngles?:         string;
  puntosExamenIngreso?: number;
}
