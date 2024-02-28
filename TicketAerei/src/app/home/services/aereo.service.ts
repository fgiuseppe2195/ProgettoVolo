import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AereoService {

  private apiUrl = 'http://localhost:8081/api/aerei';

  constructor(private http: HttpClient) { }

  createAereo(aereo: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, aereo);
  }

  updateAereo(codiceAereo: string, aereo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${codiceAereo}`, aereo);
  }
}
