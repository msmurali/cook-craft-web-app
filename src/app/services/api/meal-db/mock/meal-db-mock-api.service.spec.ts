import { TestBed } from '@angular/core/testing';

import { MealDbMockApi } from './meal-db-mock-api.service';

describe('MealDbMockApiService', () => {
  let service: MealDbMockApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealDbMockApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
