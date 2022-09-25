import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { catalogosInterface } from '../../carrousel/carrousel.component';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionPersonalComponent implements OnInit {

  @Input() catalogos!: catalogosInterface;
  @Input() alumno!: any;

  fechaDeNacimiento: any;
  entidadFederativa: any;
  genero: any;
  estadoCivil: any;

  constructor() { }

  ngOnInit(): void {
  }



}

