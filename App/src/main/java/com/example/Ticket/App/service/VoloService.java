package com.example.Ticket.App.service;

import com.example.Ticket.App.model.Volo;
import com.example.Ticket.App.repository.VoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoloService {

    @Autowired
    private VoloRepository voloRepository;

    public Volo inserisciVolo(Volo volo) {
        try {
            return voloRepository.save(volo);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Errore durante l'inserimento del volo nel database");
        }
    }
}
