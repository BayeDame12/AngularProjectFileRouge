import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdComandeComponent } from './id-comande.component';

describe('IdComandeComponent', () => {
  let component: IdComandeComponent;
  let fixture: ComponentFixture<IdComandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdComandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdComandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
