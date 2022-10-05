import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { ICatalogos } from 'src/app/models/catalogos';

@Component({
  selector: 'app-informacion-escolar',
  templateUrl: './informacion-escolar.component.html',
  styleUrls: ['./informacion-escolar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionEscolarComponent implements OnInit {

  bachilleratoNombre: any;
  tipoBachillerato: any;
  entidadFederativa: any;

  @Input() catalogos!: ICatalogos;
  @Input() set alumno(value: Alumno){
<<<<<<< HEAD
    let escolar = value?.datosEscolares;
=======
    let escolar = value.datosEscolares;
>>>>>>> parent of a3efd0b (Revert "Merge branch 'master' into charts2")

    this.bachilleratoNombre = escolar?.nombreBachillerato
    this.tipoBachillerato = escolar?.tipoBachillerato
    this.entidadFederativa = escolar?.entidadFederativa
  };

  constructor() { }

  ngOnInit(): void {
  }

}