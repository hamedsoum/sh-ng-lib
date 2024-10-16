import { TestBed } from '@angular/core/testing';

import { ShBaseService } from './sh-base.service';

describe('ShBaseService', () => {
  let service: ShBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
