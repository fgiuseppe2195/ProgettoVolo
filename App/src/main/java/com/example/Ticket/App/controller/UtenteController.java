package com.example.Ticket.App.controller;

import com.example.Ticket.App.model.Utente;
import com.example.Ticket.App.service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/utenti")
@CrossOrigin(origins = "http://localhost:4200")
public class UtenteController {

    private final UtenteService utenteService;

    @Autowired
    public UtenteController(UtenteService utenteService) {
        this.utenteService = utenteService;
    }

    @GetMapping
    public ResponseEntity<List<Utente>> getAllUtenti() {
        List<Utente> utenti = utenteService.findAllUtenti();
        return ResponseEntity.ok(utenti);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Utente> getUtenteById(@PathVariable Long id) {
        Utente utente = utenteService.findUtenteById(id);
        if (utente != null) {
            return ResponseEntity.ok(utente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Utente> createUtente(@RequestBody Utente utente) {
        Utente savedUtente = utenteService.saveUtente(utente);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUtente);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginUtente(@RequestBody Utente utente) {
        try {
            Utente existingUtente = utenteService.findUtenteByEmail(utente.getEmail());

            if (existingUtente != null && existingUtente.getPassword().equals(utente.getPassword())) {
                return ResponseEntity.ok(existingUtente);
            } else {
                Map<String, String> response = new HashMap<>();
                response.put("message", "Email o password non validi");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            }
        }catch (Exception e) {
                System.out.println("Errore durante il login: " + e.getMessage());
                e.printStackTrace();
                Map<String, String> response = new HashMap<>();
                response.put("message", "Si è verificato un errore durante il login");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
            }

        }




    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUtente(@PathVariable Long id) {
        utenteService.deleteUtente(id);
        return ResponseEntity.noContent().build();
    }
}


