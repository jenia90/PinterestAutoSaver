import { TestBed } from '@angular/core/testing';

import { PinApiService } from './pin-api.service';

describe('PinApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinApiService = TestBed.get(PinApiService);
    expect(service).toBeTruthy();
  });
});
