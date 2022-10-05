import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-informacion-contacto',
  templateUrl: './informacion-contacto.component.html',
  styleUrls: ['./informacion-contacto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionContactoComponent implements OnInit {

  correoPersonal: any;
  correoInstitucional: any;
  telefonoCasa: any;
  telefonoMovil: any;

  @Input() set alumno(value: Alumno){
    let contacto = value?.datosPersonales.contacto

    this.correoPersonal = contacto?.correoElectronico.personal;
    this.correoInstitucional = contacto?.correoElectronico.institucional;
    this.telefonoCasa = contacto?.telefono.casa;
    this.telefonoMovil = contacto?.telefono.movil;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
