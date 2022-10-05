import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { ICatalogos } from 'src/app/models/catalogos';

@Component({
  selector: 'app-informacion-economica',
  templateUrl: './informacion-economica.component.html',
  styleUrls: ['./informacion-economica.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionEconomicaComponent implements OnInit {

  viveCon: any;
  vivienda: any;
  transporte: any;
  apoyoEconomico: any;
  ingresosFamiliares: any;

  @Input() catalogos!: ICatalogos;
  @Input() set alumno(value: Alumno){
    let economica = value?.datosEconomicos

    this.viveCon = economica?.viveCon
    this.vivienda = economica?.vivienda
    this.transporte = economica?.transporte
    this.apoyoEconomico = economica?.apoyoEconomico
    this.ingresosFamiliares = economica?.ingresosFamiliares
  };

  constructor() { }

  ngOnInit(): void {
  }

}
