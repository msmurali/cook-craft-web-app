import { TestBed } from '@angular/core/testing';

import { MealDbApiService } from './meal-db-api.service';

describe('MealDbApiService', () => {
  let service: MealDbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealDbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
