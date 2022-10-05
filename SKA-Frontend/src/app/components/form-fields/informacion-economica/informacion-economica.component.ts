import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { catalogosInterface } from '../../carrousel/carrousel.component';

@Component({
  selector: 'app-informacion-economica',
  templateUrl: './informacion-economica.component.html',
  styleUrls: ['./informacion-economica.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionEconomicaComponent implements OnInit {

  @Input() catalogos!: catalogosInterface;
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
