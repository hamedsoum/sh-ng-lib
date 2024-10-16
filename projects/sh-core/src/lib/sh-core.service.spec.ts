import { TestBed } from '@angular/core/testing';

import { ShCoreService } from './sh-core.service';

describe('ShCoreService', () => {
  let service: ShCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
