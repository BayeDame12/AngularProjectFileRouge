import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommandeClientsComponent } from './detail-commande-clients.component';

describe('DetailCommandeClientsComponent', () => {
  let component: DetailCommandeClientsComponent;
  let fixture: ComponentFixture<DetailCommandeClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCommandeClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCommandeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
