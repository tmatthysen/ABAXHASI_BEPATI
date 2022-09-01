import { TestBed } from '@angular/core/testing';

import { DrinksSvcService } from './drinks-svc.service';

describe('DrinksSvcService', () => {
  let service: DrinksSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinksSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
