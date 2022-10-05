import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-informacion-laboral',
  templateUrl: './informacion-laboral.component.html',
  styleUrls: ['./informacion-laboral.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionLaboralComponent implements OnInit {

  trabaja: boolean = false;
  trabajoRelacionado: boolean = false;

  empresaNombre!: string;
  empresaDomicilo!: string;
  empresaTelefono!: string;
  empresaPuesto!: string;
  empresaDepartamento!: string;

  @Input() set alumno(value: Alumno){
    let trabajo = value?.datosLaborales
    let empresa = value?.datosLaborales?.empresa

    this.trabaja = trabajo?.trabaja;
    this.trabajoRelacionado = trabajo?.estaRelacionadoEstudios;

    this.empresaNombre = empresa?.nombre;
    this.empresaDomicilo = empresa?.domicilio;
    this.empresaTelefono = empresa?.telefono;
    this.empresaPuesto = empresa?.puesto;
    this.empresaDepartamento = empresa?.departamento;
  };

  constructor() { }

  ngOnInit(): void {
  }

  checkCheckbox(){
    if (this.trabaja == false && this.trabajoRelacionado == true){
      this.trabajoRelacionado = false;
    }
  }

}
