package com.example.Ticket.App.controller;

import com.example.Ticket.App.model.Aeroporto;
import com.example.Ticket.App.service.AeroportoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/aeroporti")
@CrossOrigin(origins = "http://localhost:4200")
public class AeroportoController {

    @Autowired
    private AeroportoService aeroportoService;

    @GetMapping
    public List<Aeroporto> getAllAeroporti() {
        return aeroportoService.getAllAeroporti();
    }

    @GetMapping("/{id}")
    public Aeroporto getAeroportoById(@PathVariable("id") long id) {
        return aeroportoService.getAeroportoById(id);
    }

    @PostMapping
    public Aeroporto createAeroporto(@RequestBody Aeroporto aeroporto) {
        return aeroportoService.createOrUpdateAeroporto(aeroporto);
    }

    @PutMapping("/{id}")
    public Aeroporto updateAeroporto(@PathVariable("id") long id, @RequestBody Aeroporto aeroporto) {
        aeroporto.setIdAeroporto(id);
        return aeroportoService.createOrUpdateAeroporto(aeroporto);
    }

    @DeleteMapping("/{id}")
    public void deleteAeroporto(@PathVariable("id") long id) {
        aeroportoService.deleteAeroporto(id);
    }
}
