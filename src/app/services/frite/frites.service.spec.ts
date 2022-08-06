import { TestBed } from '@angular/core/testing';

import { FritesService } from './frites.service';

describe('FritesService', () => {
  let service: FritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
