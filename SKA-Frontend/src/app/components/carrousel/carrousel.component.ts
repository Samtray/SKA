import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { combineLatest, map, tap } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { ICatalogos } from 'src/app/models/catalogos';
import { ApiService } from 'src/app/services/api.service';
import { Grupo, IGrupo } from '../../models/grupo';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  @Input() catalogos!: ICatalogos;
  @Output() esconderTarjetas = new EventEmitter();
  @Input() set grupo(value: IGrupo) {
    this.grupoAlumnos = value?.alumnos
  }
  grupoAlumnos: any[] = []
  selectedAlumno!: any;
  responsive = responsiveOptions;
  displayMenu: boolean = false;
  selectedIndex: any = 0;

  loading = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }

  abrirMenu(alumno: string) {
    this.loading = true;
    combineLatest({
      alumno: this.apiService.getAlumno(alumno),
    }).pipe(map(response => {
      const alumnos = <Array<Alumno>>[response.alumno];
      const result: any[] = [];

      alumnos.map((alumno: any) => {
        result.push({
          ...alumno,
        })
      });

      return result;
    })).subscribe((data) => {
      this.selectedAlumno = data[0]
      this.loading = false;
    });


    this.displayMenu = true;
    this.esconderTarjetas.emit(false);
  }

  cerrarMenu() {
    this.displayMenu = false;
    this.esconderTarjetas.emit(true);
  }

  setSelected(matricula: any) {
    this.selectedIndex = matricula;
  }
}



const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 5,
    numScroll: 5
  },
  {
    breakpoint: '768px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '560px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '375px',
    numVisible: 2,
    numScroll: 2
  }
];
