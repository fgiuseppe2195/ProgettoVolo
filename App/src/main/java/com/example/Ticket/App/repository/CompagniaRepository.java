package com.example.Ticket.App.repository;


import com.example.Ticket.App.model.CompagniaAerea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompagniaRepository extends JpaRepository<CompagniaAerea, Long> {
}

