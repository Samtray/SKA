import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import {  } from './components/carrousel/carrousel.component';
import { CatalogoGenerico } from './models/alumno';
import { ICatalogos } from './models/catalogos';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SKA-Frontend';

  esconderTarjetas: boolean = true;
  loading = false;
  catalogos!: ICatalogos;

  constructor(private apiService: ApiService){}

  ngOnInit(){
    combineLatest({
      catalogos: this.apiService.getCatalogos(),
      alumno: this.apiService.getAlumno('0319100123'),
    })
    .pipe(
      map(response => {
        const catalogos = <Array<CatalogoGenerico>>response.catalogos;
        const grupo = <Array<any>>[response.alumno];
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
    });
  }

  hideCards(event: boolean){
    this.esconderTarjetas = event;
  }

}
