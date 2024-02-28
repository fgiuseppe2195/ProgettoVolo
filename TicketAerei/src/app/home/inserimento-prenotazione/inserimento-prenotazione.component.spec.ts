import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoPrenotazioneComponent } from './inserimento-prenotazione.component';

describe('InserimentoPrenotazioneComponent', () => {
  let component: InserimentoPrenotazioneComponent;
  let fixture: ComponentFixture<InserimentoPrenotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoPrenotazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentoPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
