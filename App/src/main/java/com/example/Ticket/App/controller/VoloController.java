package com.example.Ticket.App.controller;

import com.example.Ticket.App.model.Volo;
import com.example.Ticket.App.service.VoloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/voli")
@CrossOrigin(origins = "http://localhost:4200")
public class VoloController {

    @Autowired
    private VoloService voloService;

    @PostMapping
    public ResponseEntity<?> inserisciVolo(@RequestBody Volo volo) {
        try {

            if (volo != null && isVoloValido(volo)) {
                Volo nuovoVolo = voloService.inserisciVolo(volo);
                return new ResponseEntity<>(nuovoVolo, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Il volo non è valido o alcuni campi obbligatori non sono stati forniti", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Errore durante l'inserimento del volo nel database", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private boolean isVoloValido(Volo volo) {

        return volo.getCodiceVolo() != null &&
                volo.getTerminalOrigine() != null &&
                volo.getTerminalDestinazione() != null &&
                volo.getOraPartenza() != null &&
                volo.getOraArrivo() != null &&
                volo.getTipoVolo() != null &&
                volo.getDettagliTrasporto() != null;
    }
}
