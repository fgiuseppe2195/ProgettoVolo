import { Component, OnInit } from '@angular/core';
import { UtentiService } from '../home/services/utente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private utentiService: UtentiService) { }

  ngOnInit(): void {
  }
  getNomeUtente(): string {
    return this.utentiService.getNomeUtente();
  }
  logout(): void {
    this.utentiService.logout();
  }
}

