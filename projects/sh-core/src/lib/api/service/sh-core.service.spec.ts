import { TestBed } from '@angular/core/testing';

import { SHCoreService } from './sh-core.service';

describe('ShCoreService', () => {
  let service: SHCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SHCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
