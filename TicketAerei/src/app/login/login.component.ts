import { Component, OnInit } from '@angular/core';

import { UtentiService } from '../home/services/utente.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utente = {
    email: '',
    password: '',
    nome: ''
  };

  activeForm: string = 'login';

  constructor(private utenteService: UtentiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.utenteService.loginUtente(this.utente).subscribe(
      (response: any) => { 
        this.utente.nome = response.nome; 
        console.log('Login effettuato con successo!');
      },
      (error) => {
        console.error('Errore durante il login:', error);
      }
    );
  }

  register() {
  
  }

  toggleForm(formType: string) {
    this.activeForm = formType;
  }
}


