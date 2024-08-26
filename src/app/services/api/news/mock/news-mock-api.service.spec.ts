import { TestBed } from '@angular/core/testing';

import { NewsMockApi } from './news-mock-api.service';

describe('NewsMockApiService', () => {
  let service: NewsMockApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsMockApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
