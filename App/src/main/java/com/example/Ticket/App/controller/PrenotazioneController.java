package com.example.Ticket.App.controller;


import com.example.Ticket.App.model.Prenotazione;
import com.example.Ticket.App.service.PrenotazioneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/prenotazioni")
@CrossOrigin(origins = "http://localhost:4200")
public class PrenotazioneController {

    @Autowired
    private PrenotazioneService prenotazioneService;

    @GetMapping("/{id}")
    public ResponseEntity<Prenotazione> getPrenotazione(@PathVariable Long id) {
        Prenotazione prenotazione = prenotazioneService.getPrenotazioneDetails(id);
        return ResponseEntity.ok(prenotazione);
    }

    @PostMapping
    public ResponseEntity<Prenotazione> inserisciPrenotazione(@RequestBody Prenotazione prenotazione) {
        prenotazioneService.saveOrUpdatePrenotazione(prenotazione);
        return new ResponseEntity<>(prenotazione, HttpStatus.CREATED);
    }



    @PutMapping("/{id}")
    public ResponseEntity<Void> modificaPrenotazione(@PathVariable Long id, @RequestBody Prenotazione prenotazione) {
        prenotazione.setIdPrenotazione(id);
        prenotazioneService.saveOrUpdatePrenotazione(prenotazione);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
