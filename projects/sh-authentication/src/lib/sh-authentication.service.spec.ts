import { TestBed } from '@angular/core/testing';

import { ShAuthenticationService } from './sh-authentication.service';

describe('ShAuthenticationService', () => {
  let service: ShAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
