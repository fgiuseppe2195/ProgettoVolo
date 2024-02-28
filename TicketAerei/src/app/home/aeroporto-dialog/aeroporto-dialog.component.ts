import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AeroportoService } from '../services/aeroporto.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-aeroporto-dialog',
  templateUrl: './aeroporto-dialog.component.html',
  styleUrls: ['./aeroporto-dialog.component.css']
})
export class AeroportoDialogComponent implements OnInit, AfterViewInit {
  aeroporti: any[] = [];
  nuovoAeroporto: any = {};
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(); 
  displayedColumns: string[] = ['nomeAeroporto', 'citta', 'nazione', 'azioni'];
  aeroportoSelezionato: any; 

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    public dialogRef: MatDialogRef<AeroportoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private aeroportoService: AeroportoService
  ) { }

  ngOnInit(): void {
    this.caricaAeroporti();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  selezionaAeroporto(aeroporto: any): void {
    this.dialogRef.close(aeroporto);
  }
  
  inserisciAeroporto(): void {
    this.aeroportoService.createAeroporto(this.nuovoAeroporto).subscribe({
      next: (aeroportoInserito: any) => {
        this.dialogRef.close(aeroportoInserito);
        this.nuovoAeroporto.nomeAeroporto = '';
        this.nuovoAeroporto.citta = '';
        this.nuovoAeroporto.nazione = '';
        this.nuovoAeroporto.numeroPiste = null;
      },
      error: (error: any) => {
        console.error('Errore durante l\'inserimento dell\'aeroporto:', error);
      }
    });
  }

  caricaAeroporti(): void {
    this.aeroportoService.getAllAeroporti().subscribe((aeroporti: any[]) => {
      this.aeroporti = aeroporti;
      this.dataSource.data = aeroporti; 
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminaAeroporto(aeroporto: any): void {
    if (aeroporto && aeroporto.idAeroporto) {
      this.aeroportoService.deleteAeroporto(aeroporto.idAeroporto).subscribe(
        () => {
          this.caricaAeroporti();
        },
        (error: any) => {
          console.error('Errore durante l\'eliminazione dell\'aeroporto:', error);
        }
      );
    } else {
      console.error('ID dell\'aeroporto non valido:', aeroporto);
    }
  }

  modificaAeroporto(aeroporto: any): void {
    if (aeroporto && aeroporto.idAeroporto) {

    } else {
      console.error('ID dell\'aeroporto non valido:', aeroporto);
    }
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator; 
    }
  }  
}
