import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  private baseUrl = 'https://api.example.com/inventario';

  constructor(private http: HttpClient) {}

  getInventario(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createInventario(item: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, item);
  }

  updateInventario(id: number, item: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, item);
  }
}
