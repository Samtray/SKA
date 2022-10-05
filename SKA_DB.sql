use SKA;

insert into catalogs(id) values(1);

/* Municpio */
insert into base_catalog values('Municipio', 'MN_RST','Rosarito',null);
insert into base_catalog values('Municipio', 'MN_TC','Tecate',null);
insert into base_catalog values('Municipio', 'MN_TJ','Tijuana',null);

insert into dbo.catalogs_municipios values(1, 'MN_RST');
insert into dbo.catalogs_municipios values(1, 'MN_TC');
insert into dbo.catalogs_municipios values(1, 'MN_TJ');


/* Genero */
insert into base_catalog values('Genero', 'GN_F','Femenino',null);
insert into base_catalog values('Genero', 'GN_M','Masculino',null);
insert into base_catalog values('Genero', 'GN_OND','Otro/No definido',null);

insert into dbo.catalogs_generos values(1, 'GN_F');
insert into dbo.catalogs_generos values(1, 'GN_M');
insert into dbo.catalogs_generos values(1, 'GN_OND');

/* Estados civiles */
insert into base_catalog values('EstadoCivil', 'EC_CS','Casado (a)',null);
insert into base_catalog values('EstadoCivil', 'EC_DVR','Divorciado (a)',null);
insert into base_catalog values('EstadoCivil', 'EC_SLT','Soltero (a)',null);
insert into base_catalog values('EstadoCivil', 'EC_UL','Union Libre',null);

insert into dbo.catalogs_estados_civiles values(1, 'EC_CS');
insert into dbo.catalogs_estados_civiles values(1, 'EC_DVR');
insert into dbo.catalogs_estados_civiles values(1, 'EC_SLT');
insert into dbo.catalogs_estados_civiles values(1, 'EC_UL');

/* Razon Trabaja*/
insert into base_catalog values('RazonTrabaja', 'RT_ATF','Apoyar Totalmente a la Familia',null);
insert into base_catalog values('RazonTrabaja', 'RT_SGI','Solventar Algunos Gastos Personales',null);
insert into base_catalog values('RazonTrabaja', 'RT_ST','Sostenerme Totalmente',null);

insert into dbo.catalogs_razones_trabaja values(1, 'RT_ATF');
insert into dbo.catalogs_razones_trabaja values(1, 'RT_SGI');
insert into dbo.catalogs_razones_trabaja values(1, 'RT_ST');

/* Vive Con*/
insert into base_catalog values('ViveCon', 'VC_AP','Ambos Padres',null);
insert into base_catalog values('ViveCon', 'VC_UP','Uno de los Padres',null);
insert into base_catalog values('ViveCon', 'VC_PRJ','Pareja',null);
insert into base_catalog values('ViveCon', 'VC_SL','Solo(a)',null);
insert into base_catalog values('ViveCon', 'VC_OF','Otro Familiar',null);
insert into base_catalog values('ViveCon', 'VC_A','Amigos',null);


insert into dbo.catalogs_vive_con values(1, 'VC_AP');
insert into dbo.catalogs_vive_con values(1, 'VC_UP');
insert into dbo.catalogs_vive_con values(1, 'VC_PRJ');
insert into dbo.catalogs_vive_con values(1, 'VC_SL');
insert into dbo.catalogs_vive_con values(1, 'VC_OF');
insert into dbo.catalogs_vive_con values(1, 'VC_A');

/* Vivienda */
insert into base_catalog values('Vivienda', 'VD_PRP','Propia',null);
insert into base_catalog values('Vivienda', 'VD_RNT','Rentada',null);
insert into base_catalog values('Vivienda', 'VD_PRS','Prestada',null);

insert into dbo.catalogs_viviendas values(1, 'VD_PRP');
insert into dbo.catalogs_viviendas values(1, 'VD_RNT');
insert into dbo.catalogs_viviendas values(1, 'VD_PRS');

/* Transporte */
insert into base_catalog values('Transporte', 'TR_PRP','Propip',null);
insert into base_catalog values('Transporte', 'TR_PBL','Publico',null);

insert into dbo.catalogs_transportes values(1, 'TR_PRP');
insert into dbo.catalogs_transportes values(1, 'TR_PBL');

/* Apoyo Economico */
insert into base_catalog values('ApoyoEconomico', 'AE_PDR','Padre',null);
insert into base_catalog values('ApoyoEconomico', 'AE_MDR','Madre',null);
insert into base_catalog values('ApoyoEconomico', 'AE_HRM','Hermano(a)',null);
insert into base_catalog values('ApoyoEconomico', 'AE_CNY','Conyugue',null);
insert into base_catalog values('ApoyoEconomico', 'AE_OF','Otro Familiar',null);
insert into base_catalog values('ApoyoEconomico', 'AE_YO','Yo',null);

insert into dbo.catalogs_apoyos_economicos values(1, 'AE_PDR');
insert into dbo.catalogs_apoyos_economicos values(1, 'AE_MDR');
insert into dbo.catalogs_apoyos_economicos values(1, 'AE_HRM');
insert into dbo.catalogs_apoyos_economicos values(1, 'AE_CNY');
insert into dbo.catalogs_apoyos_economicos values(1, 'AE_OF');
insert into dbo.catalogs_apoyos_economicos values(1, 'AE_YO');

/* Ingresos Familiares */

insert into base_catalog values('IngresosFamiliares', 'IF_ME5','Menos de $5,000',null);
insert into base_catalog values('ingresosFamiliares', 'IF_510','$5,000 A $10,000',null);
insert into base_catalog values('IngresosFamiliares', 'IF_1015','$10,000 A $15,000',null);
insert into base_catalog values('IngresosFamiliares', 'IF_MA15','Mas de $15,000',null);

insert into dbo.catalogs_ingresos_familiares values(1, 'IF_ME5');
insert into dbo.catalogs_ingresos_familiares values(1, 'IF_510');
insert into dbo.catalogs_ingresos_familiares values(1, 'IF_1015');
insert into dbo.catalogs_ingresos_familiares values(1, 'IF_MA15');


/* Tipo Bachillerato*/
insert into base_catalog values('TipoBachillerato', 'TB_PBL','Escuela Publica (Oficial de Gobierno)',null);
insert into base_catalog values('TipoBachillerato', 'TB_PRV','Privata o Particular',null);

insert into dbo.catalogs_tipos_bachilleratos values(1, 'TB_PBL');
insert into dbo.catalogs_tipos_bachilleratos values(1, 'TB_PRV');

/* Entidad Federativa */
insert into base_catalog values('EntidadFederativa', 'AGC','Aguascalientes',null);
insert into base_catalog values('EntidadFederativa', 'BC','Baja California',null);
insert into base_catalog values('EntidadFederativa', 'SIN','Sinaloa',null);

insert into dbo.catalogs_entidades_federativas values(1, 'AGC');
insert into dbo.catalogs_entidades_federativas values(1, 'BC');
insert into dbo.catalogs_entidades_federativas values(1, 'SIN');


/* ESTUDIANTE */
	/* Promedios */

	select * from base_career;

insert into dbo.base_career(id,dtype,promedio,nivel_ingles,puntos_examen_ingreso) values(1, 'Tsu', 8.0,'B2', 872);
insert into dbo.base_career(id,dtype,promedio) values(2, 'Ingenieria', 9.1);

insert into base_career_por_cuatrimestre(base_career_id, por_cuatrimestre) values(1, 8.9);
insert into base_career_por_cuatrimestre(base_career_id, por_cuatrimestre) values(1, 9.2);
insert into base_career_por_cuatrimestre(base_career_id, por_cuatrimestre) values(1, 9.1);
insert into base_career_por_cuatrimestre(base_career_id, por_cuatrimestre) values(1, 9.3);

insert into base_career_por_cuatrimestre(base_career_id, por_cuatrimestre) values(2, 9.4);
insert into base_career_por_cuatrimestre(base_career_id, por_cuatrimestre) values(1, 8.8);

insert into dbo.promedios(id, bachillerato, ingenieria_id, tsu_id) values(1,8.9,2,1);

	/* Datos Escolares */ 
insert into dbo.datos_escolares(id, nombreBachillerato, tipo_bachillerato_id, entidad_federativa_id) values(1, 'PFLC', 'TB_PBL','BC');
	/* Datos Economicos */
insert into dbo.datos_economicos(
		id, 
		apoyo_economico_id, 
		ingresos_familiares_id, 
		transporte_id, 
		vive_con_id, 
		vivienda_id
) values(1, 'AE_PDR','IF_1015','TR_PBL','VC_AP','VD_RNT');

	/* Datos Laborales */

insert into dbo.empresa(
		id,
		departamento,
		domicilio,
		nombre,
		puesto,
		telefono
) values (
		1, 
		'Sistemas',
		'Parque Industrial el Florido 1234-A',
		'ACME S.A. DE C.V',
		'Desarrollador Junior',
		'6648271627'
);


insert into dbo.datos_laborales(
		id, 
		trabaja,
		esta_relacionado_estudios,
		empresa_id
) values (1,1,1,1);

	/* Datos familiares */
insert into dbo.base_contact(
		id,
		dtype,
		ocupacion,
		nombre,
		telefono
) 
values(1, 'Padre', 'Carlos Armenta López', 'Empleado', '6649584723');
insert into dbo.base_contact values('Madre', 2, 'Ama de casa', 'Gabriela Beltran', '6641628372');
insert into dbo.base_contact values('', 3, '', '', '');
insert into dbo.base_contact values('emergencia', 4, 'Madre', 'Gabriela Beltran', '6641628372');

insert into dbo.datos_familiares(id, padre_id, madre_id, conyugue_id, emergencia_id) values(1,1,2,3,4);

	/* Contacto */
insert into dbo.correo_electronico(id, personal, institucional) values(1, 'carlos.armenta@gmail.com', '0319100123@uttijuana.edu.mx');
insert into dbo.telefono(id, casa, movil) values(1, '6649374859', '6649692607');

insert into dbo.contacto(id, correo_electronico_id, telefono_id) values (1,1,1);

	/* Domicilio */
select * from base_catalog;

insert into dbo.domicilio(id, calle, colonia, numero, municipio_id)
		values(1, 'Privada Los Robles', 'Jardines del Lago', '1234-A', 'MN_TJ')

	/* Datos Personales  */
insert into dbo.lugar_nacimiento(id, ciudad, entidad_federativa_id) values(1,'Mazatlan','SIN');

insert into dbo.datos_personales(
		id,
		edad,
		fecha_nacimiento,
		contacto_id,
		domicilio_id,
		estado_civil_id,
		genero_id,
		lugar_de_nacimiento_id
) values(
		1,
		19,
		'2003-04-23',
		1,
		1,
		'EC_SLT',
		'GN_M',
		1
);

		/* ALUMNO */
insert into alumno(
		matricula,
		foto,
		nombre_completo,
		contacto_id,
		datos_economicos_id,
		datos_escolares_id,
		datos_familiares_id,
		datos_laborales_id,
		datos_personales_id,
		promedio_id
) values(
		'0319100123',
		'https://i1.sndcdn.com/avatars-zxyWtNoHP4m391wt-z0mnTA-t500x500.jpg',
		'Armenta Beltrán Carlos David',
		1,1,1,1,1,1,1
)




/* GRUPO */ 

	/* especialidad */
	select * from dbo.base_catalog;

insert into dbo.base_catalog(dtype, id, descripcion) values('Nivel', 'ING', 'Ingenieria');
insert into dbo.base_catalog(dtype, id, descripcion, nivel_id) values('Carrera', 'INGTI', 'Ingenieria en tecnologias de la informacion', 'ING');
insert into dbo.base_catalog(dtype, id, descripcion) values('Especialidad', 'TIDGS', 'Desarrollo y Gestion de Software');
insert into dbo.base_catalog(dtype, id, descripcion) values('Periodo', '202203', 'Septiembre - Diciembre 2022');

insert into dbo.grupo(
		id,
		cuatrimestre,
		descripcion,
		grupo,
		carrera_id,
		especialidad_id,
		periodo_id
) values (
		'TI-IDGS-9A-202203',
		9,
		'9-A Ingeniería en Tecnologías de la Información Área Desarrollo y Gestión de Software',
		'A',
		'INGTI',
		'TIDGS',
		'202203'
);

insert into dbo.grupo_alumnos(grupo_id, alumnos_matricula) values('TI-IDGS-9A-202203', '0319100123');