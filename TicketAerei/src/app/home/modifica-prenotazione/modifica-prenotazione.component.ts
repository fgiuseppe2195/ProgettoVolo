import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrenotazioneService } from '../services/prenotazione.service';

@Component({
  selector: 'app-modifica-prenotazione',
  templateUrl: './modifica-prenotazione.component.html',
  styleUrls: ['./modifica-prenotazione.component.css']
})
export class ModificaPrenotazioneComponent implements OnInit {
  prenotazione: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prenotazioneService: PrenotazioneService
  ) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.params['id']; // Converte l'ID in un numero
    this.prenotazioneService.getPrenotazione(id).subscribe((data: any) => {
      this.prenotazione = data;
    });
  }

  modificaPrenotazione(): void {
    this.prenotazioneService.modificaPrenotazione(this.prenotazione.idPrenotazione, this.prenotazione).subscribe(() => {
      this.router.navigate(['/dettaglio-prenotazione', this.prenotazione.idPrenotazione]);
    });
  }
}
