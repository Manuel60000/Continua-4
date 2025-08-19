import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces/productos.interface';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Productos[]> { return this.http.get<Productos[]>(this.apiUrl); }

  getById(id: number): Observable<Productos> { return this.http.get<Productos>(`${this.apiUrl}/${id}`); }

  create(data: Productos): Observable<Productos> { return this.http.post<Productos>(this.apiUrl, data); }

  update(id: number, data: Productos): Observable<Productos> { return this.http.put<Productos>(`${this.apiUrl}/${id}`, data); }

  delete(id: number) { return this.http.delete(`${this.apiUrl}/${id}`); }
}
