import { TestBed } from '@angular/core/testing';

import { BoissonsService } from './boissons.service';

describe('BoissonsService', () => {
  let service: BoissonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoissonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
