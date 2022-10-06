import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  readonly apiURL = 'http://localhost:8080/api';
  readonly gruposURL = 'https://mocki.io/v1/6a3e9e59-233b-48e6-8e83-6d453b8c6e07';

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
