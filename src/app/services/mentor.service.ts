import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mentor {
  id?: number;
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

  private apiUrl = 'http://localhost:8080/mentores';

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(this.apiUrl);
  }

  guardar(mentor: Mentor): Observable<Mentor> {
    return this.http.post<Mentor>(this.apiUrl, mentor);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
