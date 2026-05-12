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
  private url = `${environment.apiUrl}/estudiantes`;

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.url);
  }

  guardar(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.url, estudiante);
  }

  buscarPorId(id: string): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.url}/${id}`);
  }

  eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
