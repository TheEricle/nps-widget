import { TestBed, inject } from '@angular/core/testing';

import { NetPromoterService } from './netpromoter.service';

describe('NetPromoterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetPromoterService]
    });
  });

  it('should be created', inject([NetPromoterService], (service: NetPromoterService) => {
    expect(service).toBeTruthy();
  }));
});
