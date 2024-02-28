package com.example.Ticket.App.repository;

import com.example.Ticket.App.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Long> {
    Utente findFirstByEmail(String email);
}
