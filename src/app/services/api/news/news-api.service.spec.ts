import { TestBed } from '@angular/core/testing';

import { NewsApi } from './news-api.service';

describe('NewsApiService', () => {
  let service: NewsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
