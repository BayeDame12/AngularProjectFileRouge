import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionaireComponent } from './gestionaire.component';

describe('GestionaireComponent', () => {
  let component: GestionaireComponent;
  let fixture: ComponentFixture<GestionaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
