package com.example.Ticket.App.model;

import javax.persistence.*;

@Entity
@Table(name = "Statistiche")
public class Statistiche {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idVolo")
    private Long idVolo;

    @Column(name = "numeroPrenotazioni")
    private int numeroPrenotazioni;

    @Column(name = "etaMediaPasseggeri")
    private double etaMediaPasseggeri;

    @Column(name = "numeroAdulti")
    private int numeroAdulti;

    @Column(name = "numeroBambini")
    private int numeroBambini;

    @Column(name = "totaleEuroFatturato")
    private double totaleEuroFatturato;

    public Long getIdVolo() {
        return idVolo;
    }

    public void setIdVolo(Long idVolo) {
        this.idVolo = idVolo;
    }

    public int getNumeroPrenotazioni() {
        return numeroPrenotazioni;
    }

    public void setNumeroPrenotazioni(int numeroPrenotazioni) {
        this.numeroPrenotazioni = numeroPrenotazioni;
    }

    public double getEtaMediaPasseggeri() {
        return etaMediaPasseggeri;
    }

    public void setEtaMediaPasseggeri(double etaMediaPasseggeri) {
        this.etaMediaPasseggeri = etaMediaPasseggeri;
    }

    public int getNumeroAdulti() {
        return numeroAdulti;
    }

    public void setNumeroAdulti(int numeroAdulti) {
        this.numeroAdulti = numeroAdulti;
    }

    public int getNumeroBambini() {
        return numeroBambini;
    }

    public void setNumeroBambini(int numeroBambini) {
        this.numeroBambini = numeroBambini;
    }

    public double getTotaleEuroFatturato() {
        return totaleEuroFatturato;
    }

    public void setTotaleEuroFatturato(double totaleEuroFatturato) {
        this.totaleEuroFatturato = totaleEuroFatturato;
    }
}