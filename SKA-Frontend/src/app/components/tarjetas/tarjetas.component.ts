import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { IGrupo } from 'src/app/models/grupo';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit, AfterContentInit {
  tarjetaList: any;

  grupoAlumnos: any;
  grupoContador: any;

  @Input() set grupo(value: IGrupo) {
    this.grupoAlumnos = value.grupo
    this.grupoContador = value.estadisticas
  }

  constructor() { }

  ngAfterContentInit(): void {
    this.tarjetaList = [
      { icon: 'person', title: this.grupoContador.alumnos, subTitle: 'Alumnos' },
      { icon: 'group', title: this.grupoAlumnos.cuatrimestre + '°' + this.grupoAlumnos.grupo, subTitle: 'Grupo' },
      { icon: 'book', title: this.grupoAlumnos.carrera.nombre, subTitle: 'Carrera' },
      { icon: 'school', title: this.grupoAlumnos.especialidad.nombre, subTitle: 'Especialidad' },
      { icon: 'timelapse', title: this.grupoAlumnos.periodo.nombre, subTitle: 'Periodo' }
    ]
  }

  ngOnInit(): void {
  }


}

