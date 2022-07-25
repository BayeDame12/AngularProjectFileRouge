import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagolueComponent } from './catagolue.component';

describe('CatagolueComponent', () => {
  let component: CatagolueComponent;
  let fixture: ComponentFixture<CatagolueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagolueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagolueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
