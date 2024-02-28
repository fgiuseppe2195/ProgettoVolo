import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoVoloComponent } from './inserimento-volo.component';

describe('InserimentoVoloComponent', () => {
  let component: InserimentoVoloComponent;
  let fixture: ComponentFixture<InserimentoVoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoVoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentoVoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
