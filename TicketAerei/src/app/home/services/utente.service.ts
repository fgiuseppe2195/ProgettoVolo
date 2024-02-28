import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'

})
export class UtentiService {
  
  private apiUrl = 'http://localhost:8081/api/utenti';

  constructor(private http: HttpClient, private router: Router) { }

  registerUtente(utente: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, utente)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }

  loginUtente(utente: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email: utente.email, password: utente.password }).pipe(
        tap(response => {
            const nomeUtente = `${response.firstName} ${response.lastName}`;
            localStorage.setItem('nomeUtente', nomeUtente); 
            console.log('Login successful:', response);
            this.router.navigate(['/home']);
        }),
        catchError(error => {
            console.error('Login failed:', error);
            return throwError(error);
        })
    );
  }

  logoutUtente(): void {
    localStorage.removeItem('nomeUtente');    
    this.router.navigate(['/login']);
  }

  getNomeUtente(): string {
    return localStorage.getItem('nomeUtente') || ''; 
  }

  logout(): void {
    this.logoutUtente();
  }
}
