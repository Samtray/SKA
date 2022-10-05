import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  readonly apiURL = 'http://localhost:8080/api';

  getAlumno(matricula: string) {
    return this.http.get(this.apiURL + '/alumnos/' + matricula);
  }

  getCatalogos() {
    return this.http.get(this.apiURL + '/catalogos');
  }

  getGrupo() {
    return this.http.get(this.apiURL + '/grupos');
  }
}
