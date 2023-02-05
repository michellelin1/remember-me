import { TestBed } from '@angular/core/testing';

import { CockroachdbService } from './cockroachdb.service';

describe('CockroachdbService', () => {
  let service: CockroachdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CockroachdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
