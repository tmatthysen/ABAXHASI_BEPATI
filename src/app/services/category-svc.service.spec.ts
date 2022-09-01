import { TestBed } from '@angular/core/testing';

import { CategorySvcService } from './category-svc.service';

describe('CategorySvcService', () => {
  let service: CategorySvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
