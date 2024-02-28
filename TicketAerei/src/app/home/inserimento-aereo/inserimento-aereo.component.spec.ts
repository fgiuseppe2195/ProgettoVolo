import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoAereoComponent } from './inserimento-aereo.component';

describe('InserimentoAereoComponent', () => {
  let component: InserimentoAereoComponent;
  let fixture: ComponentFixture<InserimentoAereoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoAereoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentoAereoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
