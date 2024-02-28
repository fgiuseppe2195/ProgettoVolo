import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoloService {

  private baseUrl = 'http://localhost:8081/api/voli';

  constructor(private http: HttpClient) { }

  inserisciVolo(voloData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, voloData);
  }
}
