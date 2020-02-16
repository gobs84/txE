import { TestBed } from '@angular/core/testing';

import { ItunesAPIService } from './itunes-api.service';

describe('ItunesAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItunesAPIService = TestBed.get(ItunesAPIService);
    expect(service).toBeTruthy();
  });
});
