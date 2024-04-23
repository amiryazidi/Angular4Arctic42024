import { TestBed } from '@angular/core/testing';

import { ConsumerProService } from './consumer-pro.service';

describe('ConsumerProService', () => {
  let service: ConsumerProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
