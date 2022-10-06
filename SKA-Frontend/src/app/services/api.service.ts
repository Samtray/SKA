import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  readonly apiURL = 'http://localhost:8080/api';
  readonly gruposURL = 'https://mocki.io/v1/9c6ff20b-ce08-4305-a000-6fb5c6ce1cc5';

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
