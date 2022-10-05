import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICatalogos } from 'src/app/models/catalogos';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionPersonalComponent implements OnInit {

  @Input() catalogos!: ICatalogos;
  @Input() alumno!: any;

  fechaDeNacimiento: any;
  entidadFederativa: any;
  genero: any;
  estadoCivil: any;

  constructor() { }

  ngOnInit(): void {
  }



}

