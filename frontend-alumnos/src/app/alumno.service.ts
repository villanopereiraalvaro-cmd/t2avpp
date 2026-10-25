
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private url = 'https://shiny-space-cod-wrq75w5xrp75cg77x-8080.app.github.dev/api/alumnos';

  constructor(private http: HttpClient) { }

  listarAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url);
  }

  eliminarAlumno(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }
}
