package com.example.Ticket.App.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "DettaglioPrenotazione")
public class Prenotazione {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idPrenotazione")
    private Long idPrenotazione;

    @Column(name = "codiceCliente")
    private Long codiceCliente;

    @Column(name = "numeroVolo")
    private Long numeroVolo;

    @Column(name = "dataPrenotazione")
    private Date dataPrenotazione;

    @Column(name = "dataViaggio")
    private Date dataViaggio;

    @Column(name = "costoFatturato")
    private double costoFatturato;

    public Long getIdPrenotazione() {
        return idPrenotazione;
    }

    public void setIdPrenotazione(Long idPrenotazione) {
        this.idPrenotazione = idPrenotazione;
    }

    public Long getCodiceCliente() {
        return codiceCliente;
    }

    public void setCodiceCliente(Long codiceCliente) {
        this.codiceCliente = codiceCliente;
    }

    public Long getNumeroVolo() {
        return numeroVolo;
    }

    public void setNumeroVolo(Long numeroVolo) {
        this.numeroVolo = numeroVolo;
    }

    public Date getDataPrenotazione() {
        return dataPrenotazione;
    }

    public void setDataPrenotazione(Date dataPrenotazione) {
        this.dataPrenotazione = dataPrenotazione;
    }

    public Date getDataViaggio() {
        return dataViaggio;
    }

    public void setDataViaggio(Date dataViaggio) {
        this.dataViaggio = dataViaggio;
    }

    public double getCostoFatturato() {
        return costoFatturato;
    }

    public void setCostoFatturato(double costoFatturato) {
        this.costoFatturato = costoFatturato;
    }
}
