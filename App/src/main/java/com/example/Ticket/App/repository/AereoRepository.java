package com.example.Ticket.App.repository;

import com.example.Ticket.App.model.Aereo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AereoRepository extends JpaRepository<Aereo, Long> {

}
