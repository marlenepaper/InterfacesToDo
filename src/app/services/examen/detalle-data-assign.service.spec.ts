import { TestBed } from '@angular/core/testing';

import { DetalleDataAssignService } from './detalle-data-assign.service';

describe('DetalleDataAssignService', () => {
  let service: DetalleDataAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleDataAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
