import { TestBed, inject } from '@angular/core/testing';

import { FlipsideService } from './flipside.service';

describe('FlipsideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlipsideService]
    });
  });

  it('should be created', inject([FlipsideService], (service: FlipsideService) => {
    expect(service).toBeTruthy();
  }));
});
