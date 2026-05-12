import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Mentor {
  id?: string;
  nombre: string;
  especialidad: string;
  experiencia: string;
  email: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  private url = `${environment.apiUrl}/mentores`;

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(this.url);
  }

  guardar(mentor: Mentor): Observable<Mentor> {
    return this.http.post<Mentor>(this.url, mentor);
  }

  buscarPorId(id: string): Observable<Mentor> {
    return this.http.get<Mentor>(`${this.url}/${id}`);
  }

  eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
