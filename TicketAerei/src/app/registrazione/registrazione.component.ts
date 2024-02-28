import { Component, OnInit } from '@angular/core';
import { UtentiService } from '../home/services/utente.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  activeForm: string = 'signup';
  utente = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  };
  registrationSuccess: boolean = false; 
  constructor(private utenteService: UtentiService) { }

  ngOnInit(): void {
  }
  toggleForm(formType: string) {
    this.activeForm = formType;
  }

  register() {
    this.utenteService.registerUtente(this.utente)
      .subscribe(response => {
        console.log('Registrazione effettuata con successo:', response);
        this.registrationSuccess = true; 
      }, error => {
        console.error('Errore durante la registrazione:', error);
      });
  }
}

