import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoClienteComponent } from './inserimento-cliente.component';

describe('InserimentoClienteComponent', () => {
  let component: InserimentoClienteComponent;
  let fixture: ComponentFixture<InserimentoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
