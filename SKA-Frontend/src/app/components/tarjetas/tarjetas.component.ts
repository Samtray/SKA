import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarjetasComponent implements OnInit {
  tarjetaList = TarjetaList;
  displayMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  abrirMenu(){
    this.displayMenu = true;
  }
}


const TarjetaList = [
  { icon: 'person', title: '29', subTitle: 'Alumnos' },
  { icon: 'group', title: '9°A', subTitle: 'Grupo' },
  { icon: 'book', title: 'Ingeniería en Tecnologías de la Información', subTitle: 'Carrera' },
  { icon: 'school', title: 'Desarrollo y Gestión de Software', subTitle: 'Especialidad' },
  { icon: 'timelapse', title: 'Septiembre - Diciembre 2022', subTitle: 'Periodo' }
]
