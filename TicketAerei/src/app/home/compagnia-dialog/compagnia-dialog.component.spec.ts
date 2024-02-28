import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagniaDialogComponent } from './compagnia-dialog.component';

describe('CompagniaDialogComponent', () => {
  let component: CompagniaDialogComponent;
  let fixture: ComponentFixture<CompagniaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagniaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagniaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
