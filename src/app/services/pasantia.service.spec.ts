import { TestBed } from '@angular/core/testing';

import { PasantiaService } from './pasantia.service';

describe('PasantiaService', () => {
  let service: PasantiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasantiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
