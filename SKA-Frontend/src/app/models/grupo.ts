export interface IGrupo {
    status: number;
    grupo: Grupo;
    alumnos: Alumno[];
    estadisticas: Estadisticas;
}

export interface Alumno {
    matricula: string;
    nombreCompleto: string;
    foto: string;
}

export interface Estadisticas {
    alumnos: number;
    datosPersonales: DatosPersonales;
    datosLaborales: DatosLaborales;
    datosEscolares: DatosEscolares;
    promedios: Promedios;
}

export interface DatosEscolares {
    tipoBachilleraro: Bachillerato[];
    bachilleratos: Bachillerato[];
}

export interface Bachillerato {
    descripcion: string;
    cantidad: number;
}

export interface DatosLaborales {
    trabajan: Trabaj;
    trabajoRelacionadoEstudios: Trabaj;
    razonTrabaja: Bachillerato[];
}

export interface Trabaj {
    si: number;
    no: number;
}

export interface DatosPersonales {
    genero: Bachillerato[];
    estadoCivil: Bachillerato[];
    viveCon: Bachillerato[];
    ingresosFamiliares: Bachillerato[];
}

export interface Promedios {
    bachillerato: number;
    tsu: Ingenieria;
    ingenieria: Ingenieria;
}

export interface Ingenieria {
    porCuatrimestre: number[];
    promedio: number;
}

export interface Grupo {
    id: string;
    cuatrimestre: number;
    grupo: string;
    descripcion: string;
    carrera: Carrera;
    especialidad: Especialidad;
    periodo: Especialidad;
}

export interface Carrera {
    id: string;
    nombre: string;
    nivel: Especialidad;
}

export interface Especialidad {
    id: string;
    nombre: string;
}
