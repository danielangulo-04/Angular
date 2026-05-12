import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Usuario {
  id?: string;
  nombre: string;
  email: string;
  password: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  guardar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  buscarPorId(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
