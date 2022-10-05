import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-informacion-familiares',
  templateUrl: './informacion-familiares.component.html',
  styleUrls: ['./informacion-familiares.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionFamiliaresComponent implements OnInit {

  padreNombre: any;
  padreOcupacion: any;
  padreTelefono: any;

  madreNombre: any;
  madreOcupacion: any;
  madreTelefono: any;

  conyugeNombre: any;
  conyugeOcupacion: any;
  conyugeTelefono: any;

  emergenciaNombre: any;
  emergenciaParentezco: any;
  emergenciaTelefono: any;


  @Input() set alumno(value: Alumno){
    let familiares = value?.datosFamiliares

    this.padreNombre = familiares?.padre.nombre
    this.padreOcupacion = familiares?.padre.ocupacion
    this.padreTelefono = familiares?.padre.telefono

    this.madreNombre = familiares?.madre.nombre
    this.madreOcupacion = familiares?.madre.ocupacion
    this.madreTelefono = familiares?.madre.telefono

    this.conyugeNombre = familiares?.conyugue.nombre
    this.conyugeOcupacion = familiares?.conyugue.ocupacion
    this.conyugeTelefono = familiares?.conyugue.telefono

    this.emergenciaNombre = familiares?.emergencia.nombre
    this.emergenciaParentezco = familiares?.emergencia.ocupacion
    this.emergenciaTelefono = familiares?.emergencia.telefono
  };

  constructor() { }

  ngOnInit(): void {
  }

}
