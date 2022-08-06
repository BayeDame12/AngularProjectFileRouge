import { TestBed } from '@angular/core/testing';

import { TailleboissonService } from './tailleboisson.service';

describe('TailleboissonService', () => {
  let service: TailleboissonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailleboissonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
