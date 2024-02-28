package com.example.Ticket.App.controller;

import com.example.Ticket.App.model.Aereo;
import com.example.Ticket.App.service.AereoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/aerei")
public class AereoController {

    @Autowired
    private AereoService aereoService;

    @GetMapping
    public List<Aereo> getAllAerei() {
        return aereoService.getAllAerei();
    }

    @GetMapping("/{id}")
    public Aereo getAereoById(@PathVariable Long id) {
        return aereoService.getAereoById(id);
    }

    @PostMapping
    public Aereo createAereo(@RequestBody Aereo aereo) {
        return aereoService.createAereo(aereo);
    }

    @PutMapping("/{id}")
    public Aereo updateAereo(@PathVariable Long id, @RequestBody Aereo aereo) {
        return aereoService.updateAereo(id, aereo);
    }

    @DeleteMapping("/{id}")
    public void deleteAereo(@PathVariable Long id) {
        aereoService.deleteAereo(id);
    }
}
