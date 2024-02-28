import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrenotazioneService } from '../services/prenotazione.service';

@Component({
  selector: 'app-dettaglio-prenotazione',
  templateUrl: './dettaglio-prenotazione.component.html',
  styleUrls: ['./dettaglio-prenotazione.component.css']
})
export class DettaglioPrenotazioneComponent implements OnInit {
  prenotazione: any;
  idPrenotazione: number = 0; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prenotazioneService: PrenotazioneService
  ) { }

  ngOnInit(): void {
    const id: number = parseInt(this.route.snapshot.params['id']); 
    if (!isNaN(id)) { 
      this.loadPrenotazione(id);
    }
  }

  loadPrenotazione(id: number): void {
    this.prenotazioneService.getPrenotazione(id).subscribe((data: any) => {
      this.prenotazione = data;
    }, error => {
      console.error('Errore nel caricamento della prenotazione:', error);
    });
  }

  cercaPrenotazione(): void {
    if (this.idPrenotazione !== 0) {
      this.loadPrenotazione(this.idPrenotazione);
    } else {
      console.log('Inserisci un ID valido per la ricerca.');
    }
  }

  modificaPrenotazione(id: number): void {
    this.router.navigate(['/modifica', id]);
  }
}
