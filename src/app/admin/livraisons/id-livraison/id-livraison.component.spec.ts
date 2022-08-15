import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdLivraisonComponent } from './id-livraison.component';

describe('IdLivraisonComponent', () => {
  let component: IdLivraisonComponent;
  let fixture: ComponentFixture<IdLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
