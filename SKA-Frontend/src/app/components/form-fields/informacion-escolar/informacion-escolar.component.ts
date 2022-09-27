import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { catalogosInterface } from '../../carrousel/carrousel.component';

@Component({
  selector: 'app-informacion-escolar',
  templateUrl: './informacion-escolar.component.html',
  styleUrls: ['./informacion-escolar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionEscolarComponent implements OnInit {

  @Input() catalogos!: catalogosInterface;
  @Input() alumno!: any;

  bachilleratoNombre: any;
  tipoBachillerato: any;
  entidadFederativa: any;

  constructor() { }

  ngOnInit(): void {
  }

}
