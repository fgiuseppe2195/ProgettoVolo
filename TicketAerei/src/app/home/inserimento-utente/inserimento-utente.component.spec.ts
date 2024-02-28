import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoUtenteComponent } from './inserimento-utente.component';

describe('InserimentoUtenteComponent', () => {
  let component: InserimentoUtenteComponent;
  let fixture: ComponentFixture<InserimentoUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoUtenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentoUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
