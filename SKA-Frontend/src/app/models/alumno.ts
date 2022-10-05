export interface Welcome {
  matricula: string;
  nombreCompleto: string;
  foto: string;
  contacto: Contacto;
  datosPersonales: DatosPersonales;
  datosFamiliares: DatosFamiliares;
  datosLaborales: DatosLaborales;
  datosEconomicos: DatosEconomicos;
  datosEscolares: DatosEscolares;
  promedio: Promedio;
}

export interface Contacto {
  correoElectronico: CorreoElectronico;
  telefono: Telefono;
}

export interface CorreoElectronico {
  personal: string;
  institucional: string;
}

export interface Telefono {
  casa: string;
  movil: string;
}

export interface DatosEconomicos {
  viveCon: ApoyoEconomico;
  vivienda: ApoyoEconomico;
  transporte: ApoyoEconomico;
  apoyoEconomico: ApoyoEconomico;
  ingresosFamiliares: ApoyoEconomico;
}

export interface ApoyoEconomico {
  descripcion: string;
  id: string;
}

export interface DatosEscolares {
  tipoBachillerato: ApoyoEconomico;
  entidadFederativa: ApoyoEconomico;
}

export interface DatosFamiliares {
  emergencia: Conyugue;
  madre: Conyugue;
  padre: Conyugue;
  conyugue: Conyugue;
}

export interface Conyugue {
  nombre: string;
  telefono: string;
  ocupacion: string;
}

export interface DatosLaborales {
  trabaja: boolean;
  estaRelacionadoEstudios: boolean;
  empresa: Empresa;
}

export interface Empresa {
  nombre: string;
  domicilio: string;
  telefono: string;
  puesto: string;
  departamento: string;
}

export interface DatosPersonales {
  fechaNacimiento: Date;
  edad: number;
  lugarDeNacimiento: LugarDeNacimiento;
  genero: ApoyoEconomico;
  estadoCivil: ApoyoEconomico;
  domicilio: Domicilio;
  contacto: Contacto;
}

export interface Domicilio {
  calle: string;
  numero: string;
  colonia: string;
  municipio: ApoyoEconomico;
}

export interface LugarDeNacimiento {
  ciudad: string;
  entidadFederativa: ApoyoEconomico;
}

export interface Promedio {
  bachillerato: number;
  tsu: Tsu;
  ingenieria: Ingenieria;
}

export interface Ingenieria {
  porCuatrimestre: number[];
  promedio: number;
}

export interface Tsu {
  porCuatrimestre: number[];
  promedio: number;
  nivelIngles: string;
  puntosExamenIngreso: number;
}
