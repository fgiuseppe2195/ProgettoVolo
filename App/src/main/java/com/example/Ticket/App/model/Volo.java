package com.example.Ticket.App.model;

import javax.persistence.*;



@Entity
@Table(name = "DettagliVolo")
public class Volo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idVolo")
    private Long idVolo;
    @Column(name = "codiceVolo")
    private String codiceVolo;

    @Column(name = "terminalOrigine")
    private String terminalOrigine;

    @Column(name = "terminalDestinazione")
    private String terminalDestinazione;

    @Column(name = "scaliIntermedi")
    private String scaliIntermedi;

    @Column(name = "postiPrenotati")
    private int postiPrenotati;

    @Column(name = "postiDisponibili")
    private int postiDisponibili;

    @Column(name = "costoBase")
    private double costoBase;

    @Column(name = "idAereo")
    private Long idAereo;

    @Column(name = "oraPartenza")
    private String oraPartenza;

    @Column(name = "oraArrivo")
    private String oraArrivo;

    @Column(name = "tipoVolo")
    private String tipoVolo;

    @Column(name = "dettagliTrasporto")
    private String dettagliTrasporto;

    public Long getIdVolo() {
        return idVolo;
    }

    public void setIdVolo(Long idVolo) {
        this.idVolo = idVolo;
    }

    public String getCodiceVolo() {
        return codiceVolo;
    }

    public void setCodiceVolo(String codiceVolo) {
        this.codiceVolo = codiceVolo;
    }

    public String getTerminalOrigine() {
        return terminalOrigine;
    }

    public void setTerminalOrigine(String terminalOrigine) {
        this.terminalOrigine = terminalOrigine;
    }

    public String getTerminalDestinazione() {
        return terminalDestinazione;
    }

    public void setTerminalDestinazione(String terminalDestinazione) {
        this.terminalDestinazione = terminalDestinazione;
    }

    public String getScaliIntermedi() {
        return scaliIntermedi;
    }

    public void setScaliIntermedi(String scaliIntermedi) {
        this.scaliIntermedi = scaliIntermedi;
    }

    public int getPostiPrenotati() {
        return postiPrenotati;
    }

    public void setPostiPrenotati(int postiPrenotati) {
        this.postiPrenotati = postiPrenotati;
    }

    public int getPostiDisponibili() {
        return postiDisponibili;
    }

    public void setPostiDisponibili(int postiDisponibili) {
        this.postiDisponibili = postiDisponibili;
    }

    public double getCostoBase() {
        return costoBase;
    }

    public void setCostoBase(double costoBase) {
        this.costoBase = costoBase;
    }

    public Long getIdAereo() {
        return idAereo;
    }

    public void setIdAereo(Long idAereo) {
        this.idAereo = idAereo;
    }

    public String getOraPartenza() {
        return oraPartenza;
    }

    public void setOraPartenza(String oraPartenza) {
        this.oraPartenza = oraPartenza;
    }

    public String getOraArrivo() {
        return oraArrivo;
    }

    public void setOraArrivo(String oraArrivo) {
        this.oraArrivo = oraArrivo;
    }

    public String getTipoVolo() {
        return tipoVolo;
    }

    public void setTipoVolo(String tipoVolo) {
        this.tipoVolo = tipoVolo;
    }

    public String getDettagliTrasporto() {
        return dettagliTrasporto;
    }

    public void setDettagliTrasporto(String dettagliTrasporto) {
        this.dettagliTrasporto = dettagliTrasporto;
    }
}