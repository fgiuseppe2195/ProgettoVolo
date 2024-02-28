import { Component, OnInit } from '@angular/core';
import { UtentiService } from '../services/utente.service';


@Component({
  selector: 'app-inserimento-utente',
  templateUrl: './inserimento-utente.component.html',
  styleUrls: ['./inserimento-utente.component.css']
})
export class InserimentoUtenteComponent implements OnInit {

  utente = {
    firstname: '', 
    lastname: '',  
    username: '',
    email: '',
    password: ''
  };


  constructor(private utenteService: UtentiService) { }
  ngOnInit(): void {
  }

  onSubmit() {
   
    if (!this.utente.firstname || !this.utente.lastname || !this.utente.email || !this.utente.password) {
      console.error('Compila tutti i campi obbligatori.');
      return;
    }
  

    this.utenteService.registerUtente(this.utente)
      .subscribe(response => {
        console.log('Utente registrato con successo:', response);
       
      }, error => {
        console.error('Errore durante la registrazione dell\'utente:', error);
        
      });
  }
}