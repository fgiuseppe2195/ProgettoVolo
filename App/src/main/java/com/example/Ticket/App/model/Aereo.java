package com.example.Ticket.App.model;

import javax.persistence.*;

@Entity
@Table(name = "DettagliAereo")
public class Aereo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAereo")
    private Long idAereo;

    @Column(name = "codiceCompagnia")
    private Long codiceCompagnia;

    @Column(name = "modello")
    private String modello;

    @Column(name = "stato")
    private String stato;

    @Column(name = "note")
    private String note;

    public Long getIdAereo() {
        return idAereo;
    }

    public void setIdAereo(Long idAereo) {
        this.idAereo = idAereo;
    }

    public Long getCodiceCompagnia() {
        return codiceCompagnia;
    }

    public void setCodiceCompagnia(Long codiceCompagnia) {
        this.codiceCompagnia = codiceCompagnia;
    }

    public String getModello() {
        return modello;
    }

    public void setModello(String modello) {
        this.modello = modello;
    }

    public String getStato() {
        return stato;
    }

    public void setStato(String stato) {
        this.stato = stato;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}