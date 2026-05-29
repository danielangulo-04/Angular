import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Estudiante {

  id?: string;

  nombre: string;

  carrera: string;

  edad: number;

}

@Injectable({
  providedIn: 'root'
})

export class EstudianteService {

  private apiUrl = `${environment.apiUrl}/estudiantes`;

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Estudiante[]> {

    return this.http.get<Estudiante[]>(this.apiUrl);

  }

  guardar(estudiante: Estudiante): Observable<Estudiante> {

    return this.http.post<Estudiante>(
      this.apiUrl,
      estudiante
    );

  }

  eliminar(id: string): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }

}
