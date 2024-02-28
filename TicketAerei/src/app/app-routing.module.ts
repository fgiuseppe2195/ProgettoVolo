import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { InserimentoPrenotazioneComponent } from './home/inserimento-prenotazione/inserimento-prenotazione.component';
import { DettaglioPrenotazioneComponent } from './home/dettaglio-prenotazione/dettaglio-prenotazione.component';
import { InserimentoClienteComponent } from './home/inserimento-cliente/inserimento-cliente.component';
import { ModificaPrenotazioneComponent } from './home/modifica-prenotazione/modifica-prenotazione.component';
import { InserimentoAereoComponent } from './home/inserimento-aereo/inserimento-aereo.component';
import { InserimentoVoloComponent } from './home/inserimento-volo/inserimento-volo.component';
import {InserimentoUtenteComponent} from './home/inserimento-utente/inserimento-utente.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inserimento-prenotazione', component: InserimentoPrenotazioneComponent },
  { path: 'dettaglio-prenotazione/:id', component: DettaglioPrenotazioneComponent },
  { path: 'modifica/:id', component: ModificaPrenotazioneComponent },
  { path: 'inserimento-cliente', component: InserimentoClienteComponent },
  { path: 'inserimento-aereo', component: InserimentoAereoComponent },
  { path: 'inserimento-volo', component: InserimentoVoloComponent },
  { path: 'inserisci-utente', component: InserimentoUtenteComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
