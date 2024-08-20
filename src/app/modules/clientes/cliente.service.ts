import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private baseUrl = '';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, cliente);
  }

  updateCliente(id: number, cliente: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, cliente);
  }
}
