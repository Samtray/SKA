import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { ICatalogos } from 'src/app/models/catalogos';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionPersonalComponent implements OnInit {

  fechaDeNacimiento: any;
  entidadFederativa: any;
  genero: any;
  estadoCivil: any;

  @Input() catalogos!: ICatalogos;

  @Input() set alumno(value: Alumno){
    let personales = value?.datosPersonales;

    let fechaNacimiento = personales?.fechaNacimiento

    fechaNacimiento = fechaNacimiento?.split("-").reverse().join("-");

    this.fechaDeNacimiento = fechaNacimiento;
    this.entidadFederativa = personales?.lugarDeNacimiento?.entidadFederativa;
    this.genero = personales?.genero;
    this.estadoCivil = personales?.estadoCivil;
  };

  constructor() { }

  ngOnInit(): void {
  }

}

