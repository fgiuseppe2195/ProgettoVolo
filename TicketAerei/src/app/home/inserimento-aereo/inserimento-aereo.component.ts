import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CompagniaDialogComponent } from '../compagnia-dialog/compagnia-dialog.component';
import { AereoService } from '../services/aereo.service';

@Component({
  selector: 'app-inserimento-aereo',
  templateUrl: './inserimento-aereo.component.html',
  styleUrls: ['./inserimento-aereo.component.css']
})
export class InserimentoAereoComponent {
  nuovoAereo: any = {};
  stati: string[] = ["Attivo", "Inattivo", "In riparazione"];
  compagniaInserita: boolean = false;

  constructor(
    private aereoService: AereoService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  inserisciAereo(): void {
    if (!this.compagniaInserita) {
      console.log('Inserisci prima i dati della compagnia.');
      return;
    }

    this.aereoService.createAereo(this.nuovoAereo).subscribe(
      (result) => {
        console.log('Aereo inserito con successo:', result);
        
      },
      (error) => {
        console.error('Errore durante l\'inserimento dell\'aereo:', error);
      }
    );
  }

  apriDialogoInserimentoCompagnia(): void {
    const dialogRef = this.dialog.open(CompagniaDialogComponent, {
      width: '400px',
      data: { nome: this.nuovoAereo.nomeCompagnia }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.nome && result.sede) {
        this.nuovoAereo.nomeCompagnia = result.nome;
        this.nuovoAereo.sedeCompagnia = result.sede;
        this.compagniaInserita = true;
      }
    });
  }
  
  
}  