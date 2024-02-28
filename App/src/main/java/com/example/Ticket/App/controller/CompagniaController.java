package com.example.Ticket.App.controller;

import com.example.Ticket.App.model.CompagniaAerea;
import com.example.Ticket.App.service.CompagniaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/compagnie-aeree")
@CrossOrigin(origins ="http://localhost:4200")
public class CompagniaController {

    @Autowired
    private CompagniaService compagniaAereaService;

    @GetMapping("/{id}")
    public ResponseEntity<CompagniaAerea> getCompagniaAerea(@PathVariable Long id) {
        Optional<CompagniaAerea> optionalCompagniaAerea = Optional.ofNullable(compagniaAereaService.getDetails(id));
        if (optionalCompagniaAerea.isPresent()) {
            return ResponseEntity.ok(optionalCompagniaAerea.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Void> inserisciCompagniaAerea(@RequestBody CompagniaAerea compagniaAerea) {
        compagniaAereaService.saveOrUpdateCompagniaAerea(compagniaAerea);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> modificaCompagniaAerea(@PathVariable Long id, @RequestBody CompagniaAerea compagniaAerea) {
        compagniaAerea.setIdCompagnia(id);
        compagniaAereaService.saveOrUpdateCompagniaAerea(compagniaAerea);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
