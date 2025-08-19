import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../interfaces/clientes.interface';

@Injectable({ providedIn: 'root' })
export class ClientesService {
  private apiUrl = 'http://localhost:3000/api/clientes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Clientes[]> { return this.http.get<Clientes[]>(this.apiUrl); }

  getById(id: number): Observable<Clientes> { return this.http.get<Clientes>(`${this.apiUrl}/${id}`); }

  create(data: Clientes): Observable<Clientes> { return this.http.post<Clientes>(this.apiUrl, data); }

  update(id: number, data: Clientes): Observable<Clientes> { return this.http.put<Clientes>(`${this.apiUrl}/${id}`, data); }

  delete(id: number) { return this.http.delete(`${this.apiUrl}/${id}`); }
}
