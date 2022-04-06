import { TestBed } from '@angular/core/testing';

import { HomeapiService } from './homeapi.service';

describe('HomeapiService', () => {
  let service: HomeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
