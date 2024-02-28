import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AeroportoDialogComponent } from '../aeroporto-dialog/aeroporto-dialog.component';
import { VoloService } from '../services/volo.service';

@Component({
  selector: 'app-inserimento-volo',
  templateUrl: './inserimento-volo.component.html',
  styleUrls: ['./inserimento-volo.component.css']
})
export class InserimentoVoloComponent implements OnInit {
  nuovoVolo: any = {
  
  };
  tipiVolo = ['Volo Nazionale', 'Volo Internazionale', 'Volo Diretto', 'Volo con Scalo', 'Volo a Lungo Raggio', 'Volo Regionale', 'Volo Charter', 'Volo Cargo', 'Volo Privato', 'Volo di Trasferimento'];
  dettagliTrasporto = ['Merci', 'Passeggeri'];

  constructor(private dialog: MatDialog, private voloService: VoloService) { }

  ngOnInit(): void {
  }

  inserisciVolo(): void {
    if (this.isValidInput()) {
      if (!this.nuovoVolo.scaliIntermedi) {
        delete this.nuovoVolo.scaliIntermedi;
      }

      this.voloService.inserisciVolo(this.nuovoVolo).subscribe(
        (response) => {
          console.log('Volo inserito con successo:', response);
          this.resetForm();
        },
        (error) => {
          console.error('Errore durante l\'inserimento del volo:', error);
        }
      );
    } else {
      console.warn('Impossibile inserire il volo perché non sono stati selezionati tutti i campi necessari.');
    }
  }

  isValidInput(): boolean {
    return !!this.nuovoVolo.terminalOrigine && 
           !!this.nuovoVolo.terminalDestinazione && 
           (!!this.nuovoVolo.scaliIntermedi || this.nuovoVolo.scaliIntermedi === null) &&
           !!this.nuovoVolo.postiPrenotati &&
           !!this.nuovoVolo.postiDisponibili &&
           !!this.nuovoVolo.costoBase &&
           !!this.nuovoVolo.tipoVolo &&
           !!this.nuovoVolo.codiceVolo &&
           !!this.nuovoVolo.dettagliTrasporto &&
           !!this.nuovoVolo.oraPartenza &&
           !!this.nuovoVolo.oraArrivo;
  }
  

  apriDialogAeroporti(campo: string): void {
    const dialogRef = this.dialog.open(AeroportoDialogComponent, {
      width: '800px',
      data: { titolo: 'Seleziona Aeroporto', tipo: campo }
    });
  
    dialogRef.afterClosed().subscribe((aeroportoSelezionato: any) => {
      if (aeroportoSelezionato && aeroportoSelezionato.nomeAeroporto) {
        this.nuovoVolo[campo] = aeroportoSelezionato.nomeAeroporto;
      }
      this.isValidInput();
    });
  }

  resetForm(): void {
    this.nuovoVolo = {};
  }
}
