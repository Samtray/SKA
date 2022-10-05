import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { ICatalogos } from 'src/app/models/catalogos';

@Component({
  selector: 'app-informacion-domicilio',
  templateUrl: './informacion-domicilio.component.html',
  styleUrls: ['./informacion-domicilio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionDomicilioComponent implements OnInit {

  calle: any;
  numero: any;
  colonia: any;
  municipio: any;

  @Input() catalogos!: ICatalogos;
  @Input() set alumno(value: Alumno){
    let domicilio = value?.datosPersonales.domicilio;

    this.calle = domicilio?.calle;
    this.numero = domicilio?.numero;
    this.colonia = domicilio?.colonia;
    this.municipio = domicilio?.municipio;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
