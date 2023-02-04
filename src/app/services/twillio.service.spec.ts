import { TestBed } from '@angular/core/testing';

import { TwillioService } from './twillio.service';

describe('TwillioService', () => {
  let service: TwillioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwillioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
