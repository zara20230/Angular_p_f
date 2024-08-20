import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private baseUrl = '';

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createPedido(pedido: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, pedido);
  }

  updatePedido(id: number, pedido: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, pedido);
  }
}
