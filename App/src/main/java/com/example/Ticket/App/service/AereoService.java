package com.example.Ticket.App.service;

import com.example.Ticket.App.model.Aereo;
import com.example.Ticket.App.repository.AereoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AereoService {

    @Autowired
    private AereoRepository aereoRepository;

    public List<Aereo> getAllAerei() {
        return aereoRepository.findAll();
    }

    public Aereo getAereoById(Long id) {
        return aereoRepository.findById(id).orElse(null);
    }

    public Aereo createAereo(Aereo aereo) {
        return aereoRepository.save(aereo);
    }

    public Aereo updateAereo(Long id, Aereo aereo) {
        if (aereoRepository.existsById(id)) {
            aereo.setIdAereo(id);
            return aereoRepository.save(aereo);
        } else {
            return null;
        }
    }

    public void deleteAereo(Long id) {
        aereoRepository.deleteById(id);
    }
}
