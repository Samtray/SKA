import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICatalogos } from 'src/app/models/catalogos';

@Component({
  selector: 'app-informacion-economica',
  templateUrl: './informacion-economica.component.html',
  styleUrls: ['./informacion-economica.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionEconomicaComponent implements OnInit {

  @Input() catalogos!: ICatalogos;
  @Input() alumno!: any;

  viveCon: any;
  vivienda: any;
  transporte: any;
  apoyoEconomico: any;
  ingresosFamiliares: any;

  constructor() { }

  ngOnInit(): void {
  }

}
