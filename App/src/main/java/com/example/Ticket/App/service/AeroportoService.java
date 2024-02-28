package com.example.Ticket.App.service;

import com.example.Ticket.App.model.Aeroporto;
import com.example.Ticket.App.repository.AeroportoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AeroportoService {

    @Autowired
    private AeroportoRepository aeroportoRepository;

    public List<Aeroporto> getAllAeroporti() {
        return aeroportoRepository.findAll();
    }

    public Aeroporto getAeroportoById(long id) {
        Optional<Aeroporto> aeroportoOptional = aeroportoRepository.findById(id);
        return aeroportoOptional.orElse(null);
    }

    public Aeroporto createOrUpdateAeroporto(Aeroporto aeroporto) {
        return aeroportoRepository.save(aeroporto);
    }

    public void deleteAeroporto(long id) {
        aeroportoRepository.deleteById(id);
    }
}

