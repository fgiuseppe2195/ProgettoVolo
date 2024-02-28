import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-inserimento-cliente',
  templateUrl: './inserimento-cliente.component.html',
  styleUrls: ['./inserimento-cliente.component.css']
})
export class InserimentoClienteComponent implements OnInit {
  nuovoCliente: any = {
   
      nome: '',
      cognome: '',
      indirizzo: '',
      numeroTelefono: '',
      eta: 0 
    };
    
 
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }
  inserisciCliente(): void {
    this.clienteService.createCliente(this.nuovoCliente).subscribe(
      (response) => {
        console.log('Risposta dal server:', response);
        if (response.status === 201) {
          console.log('Cliente inserito con successo:', response.body);
          
        } else {
          console.error('Errore durante l\'inserimento del cliente:', response);
         
        }
      },
      (error) => {
        console.error('Errore durante l\'invio della richiesta al server:', error);
        
      }
    );
  }
  
}
