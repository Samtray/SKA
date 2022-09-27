import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-contacto',
  templateUrl: './informacion-contacto.component.html',
  styleUrls: ['./informacion-contacto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformacionContactoComponent implements OnInit {

  @Input() alumno!: any;

  correoPersonal: any;
  correoInstitucional: any;
  telefonoCasa: any;
  telefonoMovil: any;

  constructor() { }

  ngOnInit(): void {
  }

}
