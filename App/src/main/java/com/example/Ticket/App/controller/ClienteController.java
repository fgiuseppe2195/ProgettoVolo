package com.example.Ticket.App.controller;

import com.example.Ticket.App.model.Cliente;
import com.example.Ticket.App.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/clienti")
@CrossOrigin(origins = "http://localhost:4200")

public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public ResponseEntity<List<Cliente>> getListaClienti() {
        List<Cliente> clienti = clienteService.getAllClienti();
        return new ResponseEntity<>(clienti, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getCliente(@PathVariable Long id) {
        Cliente cliente = clienteService.getClienteDetails(id);
        if (cliente != null) {
            return ResponseEntity.ok(cliente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Cliente> inserisciCliente(@RequestBody Cliente cliente) {
        Cliente clienteInserito = clienteService.saveOrUpdateCliente(cliente);
        return new ResponseEntity<>(clienteInserito, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> modificaCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        cliente.setIdCliente(id);
        clienteService.saveOrUpdateCliente(cliente);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}