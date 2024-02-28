import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PrenotazioneService } from '../services/prenotazione.service';
import { ClienteService } from '../services/cliente.service';
import { ClientiDialogComponent } from '../clienti-dialog/clienti-dialog.component';

@Component({
  selector: 'app-inserimento-prenotazione',
  templateUrl: './inserimento-prenotazione.component.html',
  styleUrls: ['./inserimento-prenotazione.component.css']
})
export class InserimentoPrenotazioneComponent implements OnInit {
  nuovaPrenotazione: any = { cliente: null };
  clienti: any[] = [];

  constructor(
    private prenotazioneService: PrenotazioneService,
    private clienteService: ClienteService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.caricaListaClienti();
  }

  createPrenotazione(): void {
    this.prenotazioneService.inserisciPrenotazione(this.nuovaPrenotazione).subscribe(
      (response: any) => {
        console.log('Prenotazione creata con successo:', response);
        this.router.navigate(['/dettaglio-prenotazione', response.idPrenotazione]);
      },
      (error) => {
        console.error('Errore durante la creazione della prenotazione:', error);
      }
    );
  }

  caricaListaClienti(): void {
    console.log('Caricamento lista clienti...');
    this.clienteService.getListaClienti().subscribe(
      (clienti: any[]) => {
        console.log('Clienti ottenuti:', clienti);
        this.clienti = clienti;
      },
      (error) => {
        console.error('Errore nel recupero della lista clienti:', error);
      }
    );
  }

  openClientiDialog(): void {
    const dialogRef = this.dialog.open(ClientiDialogComponent, {
      width: '800px',
      data: { clienti: this.clienti }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialogo clienti chiuso', result);
      if (result) {
        console.log('Cliente selezionato:', result);
        this.nuovaPrenotazione.cliente = result;
      }
    });
  }
  annullaSelezioneCliente(): void {
    this.nuovaPrenotazione.cliente = null;
  }
}
