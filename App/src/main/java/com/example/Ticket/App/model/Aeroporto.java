package com.example.Ticket.App.model;

import javax.persistence.*;

@Entity
@Table(name = "DettaglioAeroporto")
public class Aeroporto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAeroporto")
    private long idAeroporto;

    @Column(name = "citta")
    private String citta;

    @Column(name = "nomeAeroporto")
    private String nomeAeroporto;

    @Column(name = "nazione")
    private String nazione;

    @Column(name = "numeroPiste")
    private int numeroPiste;

    public long getIdAeroporto() {
        return idAeroporto;
    }

    public void setIdAeroporto(long idAeroporto) {
        this.idAeroporto = idAeroporto;
    }

    public String getCitta() {
        return citta;
    }

    public void setCitta(String citta) {
        this.citta = citta;
    }

    public String getNomeAeroporto() {
        return nomeAeroporto;
    }

    public void setNomeAeroporto(String nomeAeroporto) {
        this.nomeAeroporto = nomeAeroporto;
    }

    public String getNazione() {
        return nazione;
    }

    public void setNazione(String nazione) {
        this.nazione = nazione;
    }

    public int getNumeroPiste() {
        return numeroPiste;
    }

    public void setNumeroPiste(int numeroPiste) {
        this.numeroPiste = numeroPiste;
    }
}
