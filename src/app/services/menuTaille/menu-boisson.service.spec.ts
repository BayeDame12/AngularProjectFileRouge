import { TestBed } from '@angular/core/testing';

import { MenuBoissonService } from './menu-taille.service';

describe('MenuBoissonService', () => {
  let service: MenuBoissonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuBoissonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
