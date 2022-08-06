import { TestBed } from '@angular/core/testing';

import { MenuBurgerService } from './menu-burger.service';

describe('MenuBurgerService', () => {
  let service: MenuBurgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuBurgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
