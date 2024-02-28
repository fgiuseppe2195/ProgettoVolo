package com.example.Ticket.App.service;

import com.example.Ticket.App.model.CompagniaAerea;
import com.example.Ticket.App.repository.CompagniaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompagniaService {

    @Autowired
    private CompagniaRepository compagniaAereaRepository;

    public CompagniaAerea getDetails(Long id) {
        Optional<CompagniaAerea> optionalCompagniaAerea = compagniaAereaRepository.findById(id);
        return optionalCompagniaAerea.orElse(null);
    }

    public void saveOrUpdateCompagniaAerea(CompagniaAerea compagniaAerea) {
        compagniaAereaRepository.save(compagniaAerea);
    }
}
