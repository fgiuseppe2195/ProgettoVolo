import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DettaglioPrenotazioneComponent } from './home/dettaglio-prenotazione/dettaglio-prenotazione.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InserimentoAereoComponent } from './home/inserimento-aereo/inserimento-aereo.component';
import { InserimentoClienteComponent } from './home/inserimento-cliente/inserimento-cliente.component';
import { InserimentoPrenotazioneComponent } from './home/inserimento-prenotazione/inserimento-prenotazione.component';
import { InserimentoVoloComponent } from './home/inserimento-volo/inserimento-volo.component';
import { InserimentoUtenteComponent } from './home/inserimento-utente/inserimento-utente.component';
import { ModificaPrenotazioneComponent } from './home/modifica-prenotazione/modifica-prenotazione.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ClientiDialogComponent } from './home/clienti-dialog/clienti-dialog.component';
import { AeroportoDialogComponent } from './home/aeroporto-dialog/aeroporto-dialog.component';
import { CompagniaDialogComponent } from './home/compagnia-dialog/compagnia-dialog.component';



 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DettaglioPrenotazioneComponent,
    InserimentoAereoComponent,
    InserimentoClienteComponent,
    InserimentoPrenotazioneComponent,
    InserimentoVoloComponent,
    InserimentoUtenteComponent,
    ModificaPrenotazioneComponent,
    LoginComponent,
    RegistrazioneComponent,
    ClientiDialogComponent,
    AeroportoDialogComponent,
    CompagniaDialogComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule, 
    MatIconModule, 
    MatInputModule,
    MatSelectModule, 
    MatDialogModule, 
    MatPaginatorModule,
    HttpClientModule,
    CommonModule,
    MatListModule,
    MatSnackBarModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
