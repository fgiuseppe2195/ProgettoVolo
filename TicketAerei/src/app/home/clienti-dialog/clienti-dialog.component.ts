import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'; 

@Component({
  selector: 'app-clienti-dialog',
  templateUrl: './clienti-dialog.component.html',
  styleUrls: ['./clienti-dialog.component.css']
})
export class ClientiDialogComponent {
  displayedColumns: string[] = [ 'nome', 'cognome', 'eta', 'indirizzo', 'numeroTelefono', 'seleziona'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  constructor(
    public dialogRef: MatDialogRef<ClientiDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { clienti: any[] }
  ) { 
    this.dataSource = new MatTableDataSource<any>(data.clienti);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  selezionaCliente(cliente: any): void {
    this.dialogRef.close(cliente);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
