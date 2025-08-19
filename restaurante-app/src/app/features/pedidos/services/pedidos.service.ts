import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedidos } from '../interfaces/pedidos.interface';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private apiUrl = 'http://localhost:3000/api/pedidos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pedidos[]> { return this.http.get<Pedidos[]>(this.apiUrl); }

  getById(id: number): Observable<Pedidos> { return this.http.get<Pedidos>(`${this.apiUrl}/${id}`); }

  create(data: Pedidos): Observable<Pedidos> { return this.http.post<Pedidos>(this.apiUrl, data); }

  update(id: number, data: Pedidos): Observable<Pedidos> { return this.http.put<Pedidos>(`${this.apiUrl}/${id}`, data); }

  delete(id: number) { return this.http.delete(`${this.apiUrl}/${id}`); }
}
