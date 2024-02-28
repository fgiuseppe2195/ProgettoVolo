package com.example.Ticket.App.repository;

import com.example.Ticket.App.model.Volo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoloRepository extends JpaRepository<Volo, Long> {

}
