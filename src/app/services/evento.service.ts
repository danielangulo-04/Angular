import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Evento {
  id?: string;
  nombre: string;
  fecha: string;
  lugar: string;
  descripcion: string;
  organizador: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private url = `${environment.apiUrl}/eventos`;

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.url);
  }

  guardar(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.url, evento);
  }

  buscarPorId(id: string): Observable<Evento> {
    return this.http.get<Evento>(`${this.url}/${id}`);
  }

  eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
