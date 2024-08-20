import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntregaService {
  private baseUrl = 'https://api.example.com/entregas';

  constructor(private http: HttpClient) {}

  getEntregas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createEntrega(entrega: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, entrega);
  }

  updateEntrega(id: number, entrega: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, entrega);
  }
}
