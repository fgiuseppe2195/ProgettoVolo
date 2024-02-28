import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompagniaService {
  private apiUrl = 'http://localhost:8081/compagnie-aeree';


  constructor(private http: HttpClient) {}

  getCompagniaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createCompagnia(compagnia: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, compagnia);
  }

  updateCompagnia(id: number, compagnia: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, compagnia);
  }
}
