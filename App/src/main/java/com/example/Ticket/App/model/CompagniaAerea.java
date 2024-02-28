package com.example.Ticket.App.model;

import javax.persistence.*;

@Entity
@Table(name = "DettagliCompagniaAerea")
public class CompagniaAerea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCompagnia")
    private Long idCompagnia;

    @Column(name = "nomeCompagnia")
    private String nomeCompagnia;

    @Column(name = "sede")
    private String sede;

    public Long getIdCompagnia() {
        return idCompagnia;
    }

    public void setIdCompagnia(Long idCompagnia) {
        this.idCompagnia = idCompagnia;
    }

    public String getNomeCompagnia() {
        return nomeCompagnia;
    }

    public void setNomeCompagnia(String nomeCompagnia) {
        this.nomeCompagnia = nomeCompagnia;
    }

    public String getSede() {
        return sede;
    }

    public void setSede(String sede) {
        this.sede = sede;
    }
}