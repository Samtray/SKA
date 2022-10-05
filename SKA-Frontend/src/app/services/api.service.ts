import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  readonly apiURL = 'http://localhost:8080/api';
  readonly gruposURL = 'https://mocki.io/v1/cbc2d3e2-ecbf-4699-9a59-37457745ef9c';

  getAlumno(matricula: string) {
    return this.http.get(this.apiURL + '/alumnos/' + matricula);
  }

  getCatalogos() {
    return this.http.get(this.apiURL + '/catalogos');
  }

  getGrupo() {
    // return this.http.get(this.apiURL + '/grupos');
    return this.http.get(this.gruposURL);
  }
}
