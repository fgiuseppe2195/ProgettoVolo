import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { CompagniaService } from '../services/compagnia.service';

@Component({
  selector: 'app-compagnia-dialog',
  templateUrl: './compagnia-dialog.component.html',
  styleUrls: ['./compagnia-dialog.component.css']
})
export class CompagniaDialogComponent {

  nuovaCompagnia: any = {};

  constructor(
    public dialogRef: MatDialogRef<CompagniaDialogComponent>,
    private compagniaService: CompagniaService,
    private snackBar: MatSnackBar 
  ) { }

  confermaInserimentoCompagnia(): void {
    console.log('Nuova compagnia:', this.nuovaCompagnia);

    this.compagniaService.createCompagnia(this.nuovaCompagnia).subscribe({
      next: () => {
        this.snackBar.open('Compagnia inserita con successo!', 'Chiudi', {
          duration: 3000, 
        });
        this.dialogRef.close({ nome: this.nuovaCompagnia.nomeCompagnia, sede: this.nuovaCompagnia.sede });
      },
      error: (error) => {
        console.error('Errore durante l\'inserimento della compagnia:', error);
      }
    });
  }

  annullaInserimentoCompagnia(): void {
    this.dialogRef.close(); 
  }
}
