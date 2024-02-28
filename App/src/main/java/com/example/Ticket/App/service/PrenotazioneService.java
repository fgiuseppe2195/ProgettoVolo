package com.example.Ticket.App.service;

import com.example.Ticket.App.model.Prenotazione;
import com.example.Ticket.App.repository.PrenotazioneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@Service
public class PrenotazioneService {

    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    public Prenotazione getPrenotazioneDetails(Long id) {
        Optional<Prenotazione> optionalPrenotazione = prenotazioneRepository.findById(id);
        return optionalPrenotazione.orElse(null);
    }

    public void saveOrUpdatePrenotazione(Prenotazione prenotazione) {
        prenotazioneRepository.save(prenotazione);
    }

    public double calcolaCostoBiglietto(Prenotazione prenotazione, double costoBase, int postiTotali) {
        int postiPrenotati = getPrenotazioniPrenotate(prenotazione.getNumeroVolo());
        double costo = costoBase;

        // Calcola lo scaglione corrente in base al numero di posti prenotati
        int scaglione = (postiPrenotati / 10) + 1;

        // Applica l'aumento del 10% per ogni scaglione superato
        for (int i = 1; i < scaglione; i++) {
            costo *= 1.1;
        }

        // Verifica se la data della prenotazione è un giorno festivo
        if (isGiornoFestivo(prenotazione.getDataViaggio())) {
            costo *= 1.1; // Applica ulteriore aumento del 10% per giorno festivo
        }

        return costo;
    }

    private int getPrenotazioniPrenotate(Long numeroVolo) {
        // Implementa la logica per recuperare il numero di posti prenotati per un determinato volo
        // Puoi utilizzare il repository per recuperare le prenotazioni relative a un volo specifico
        // e contare il numero di prenotazioni.
        // Questo metodo dipende dalla tua implementazione specifica.
        return 0; // Sostituisci con la logica reale
    }

    private boolean isGiornoFestivo(Date data) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(data);
        int giornoSettimana = cal.get(Calendar.DAY_OF_WEEK);
        // Verifica se il giorno della settimana è domenica (1) o un giorno festivo aggiuntivo
        return giornoSettimana == Calendar.SUNDAY; // Aggiungi ulteriori verifiche per altri giorni festivi se necessario
    }
}
