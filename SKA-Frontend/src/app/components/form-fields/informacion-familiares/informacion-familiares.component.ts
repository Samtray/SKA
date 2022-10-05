import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-familiares',
  templateUrl: './informacion-familiares.component.html',
  styleUrls: ['./informacion-familiares.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionFamiliaresComponent implements OnInit {

  @Input() alumno!: any;

  padreNombre: any;
  padreOcupacion: any;
  padreTelefono: any;

  madreNombre: any;
  madreOcupacion: any;
  madreTelefono: any;

  conyugeNombre: any;
  conyugeOcupacion: any;
  conyugeTelefono: any;

  emergenciaNombre: any;
  emergenciaParentezco: any;
  emergenciaTelefono: any;

  constructor() { }

  ngOnInit(): void {
  }

}
