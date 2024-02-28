import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {
  private baseUrl = 'http://localhost:8081/api/prenotazioni';

  constructor(private http: HttpClient) { }

  getPrenotazione(id: number): Observable<any> { 
    return this.http.get<any>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  cercaPrenotazioneCliente(nome: string, cognome: string, telefono: string): Observable<any[]> {
    const url = `${this.baseUrl}/cliente?nome=${nome}&cognome=${cognome}&telefono=${telefono}`;
    return this.http.get<any[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  modificaPrenotazione(id: number, prenotazione: any): Observable<any> { 
    return this.http.put(`${this.baseUrl}/${id}`, prenotazione)
      .pipe(
        catchError(this.handleError)
      );
  }

  inserisciPrenotazione(prenotazione: any): Observable<any> {
    return this.http.post(this.baseUrl, prenotazione)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Errore lato client:', error.error.message);
    } else {
      console.error(
        `Errore lato server ${error.status}, ` +
        `dettagli dell'errore:`, error.error);
    }
    return throwError('Qualcosa è andato storto; riprova più tardi.');
  }
}
