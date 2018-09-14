import { TestBed, inject } from '@angular/core/testing';

import { NetpromoterService } from './netpromoter.service';

describe('NetpromoterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetpromoterService]
    });
  });

  it('should be created', inject([NetpromoterService], (service: NetpromoterService) => {
    expect(service).toBeTruthy();
  }));
});
