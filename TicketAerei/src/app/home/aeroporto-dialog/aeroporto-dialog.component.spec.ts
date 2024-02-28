import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroportoDialogComponent } from './aeroporto-dialog.component';

describe('AeroportoDialogComponent', () => {
  let component: AeroportoDialogComponent;
  let fixture: ComponentFixture<AeroportoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeroportoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroportoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
