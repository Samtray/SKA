import { Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { } from './components/carrousel/carrousel.component';
import { CatalogoGenerico } from './models/alumno';
import { ICatalogos } from './models/catalogos';
import { IGrupo } from './models/grupo';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SKA-Frontend';

  esconderTarjetas: boolean = true;
  loading = false;
  catalogos!: ICatalogos;
  grupo!: IGrupo;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loading = true;
    combineLatest({
      catalogos: this.apiService.getCatalogos(),
      grupo: this.apiService.getGrupo(),
    })
      .pipe(
        map(response => {
          const catalogos = <Array<CatalogoGenerico>>response.catalogos;
          const grupo = <Array<IGrupo>>[response.grupo];
          const result: any[] = [];

          grupo.map((grupo: any) => {
            result.push({
              ...grupo,
            })
          });

          catalogos.map((catalogo: any) => {
            result.push({
              ...catalogo,
            })
          });

          return result;
        })
      )
      .subscribe((data) => {
        this.catalogos = data[1]
        this.grupo = data[0]
        this.loading = false;
      });
  }

  hideCards(event: boolean) {
    this.esconderTarjetas = event;
  }

}
