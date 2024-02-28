import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8081/api/clienti';

  constructor(private http: HttpClient) {}

  getListaClienti(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, cliente, { observe: 'response' });
  }
  

  getClienteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateCliente(id: number, cliente: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, cliente);
  }
}
