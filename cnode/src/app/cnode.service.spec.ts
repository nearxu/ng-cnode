import { TestBed } from '@angular/core/testing';

import { CnodeService } from './hero/cnode.service';

describe('CnodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CnodeService = TestBed.get(CnodeService);
    expect(service).toBeTruthy();
  });
});
