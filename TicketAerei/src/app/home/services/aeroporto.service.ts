import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AeroportoService {
  private apiUrl = 'http://localhost:8081/aeroporti';

  constructor(private http: HttpClient) { }

  getAllAeroporti(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getAeroportoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createAeroporto(aeroporto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, aeroporto);
  }

  updateAeroporto(id: number, aeroporto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, aeroporto);
  }

  deleteAeroporto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
