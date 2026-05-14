import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Pasantia {
  id?: string;
  empresa: string;
  area: string;
  descripcion: string;
  modalidad: string;
  ciudad: string;
}

@Injectable({
  providedIn: 'root',
})
export class PasantiaService {
  private url = `${environment.apiUrl}/pasantias`;

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Pasantia[]> {
    return this.http.get<Pasantia[]>(this.url);
  }

  guardar(pasantia: Pasantia): Observable<Pasantia> {
    return this.http.post<Pasantia>(this.url, pasantia);
  }

  buscarPorId(id: string): Observable<Pasantia> {
    return this.http.get<Pasantia>(`${this.url}/${id}`);
  }

  eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
