import { TestBed } from '@angular/core/testing';

import { NewsLetterApi } from './news-letter-api.service';

describe('NewsLetterService', () => {
  let service: NewsLetterApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsLetterApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
