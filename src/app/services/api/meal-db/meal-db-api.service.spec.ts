import { TestBed } from '@angular/core/testing';

import { MealDbApi } from './meal-db-api.service';

describe('MealDbApiService', () => {
  let service: MealDbApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealDbApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
