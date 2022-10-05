import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICatalogos } from 'src/app/models/catalogos';

@Component({
  selector: 'app-informacion-escolar',
  templateUrl: './informacion-escolar.component.html',
  styleUrls: ['./informacion-escolar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionEscolarComponent implements OnInit {

  @Input() catalogos!: ICatalogos;
  @Input() alumno!: any;

  bachilleratoNombre: any;
  tipoBachillerato: any;
  entidadFederativa: any;

  constructor() { }

  ngOnInit(): void {
  }

}
