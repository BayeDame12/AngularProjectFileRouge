import { TestBed } from '@angular/core/testing';

import { MenuFriteService } from './menu-frite.service';

describe('MenuFriteService', () => {
  let service: MenuFriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuFriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
