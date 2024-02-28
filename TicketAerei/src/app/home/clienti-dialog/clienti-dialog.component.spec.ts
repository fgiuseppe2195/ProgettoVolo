import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientiDialogComponent } from './clienti-dialog.component';

describe('ClientiDialogComponent', () => {
  let component: ClientiDialogComponent;
  let fixture: ComponentFixture<ClientiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientiDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
