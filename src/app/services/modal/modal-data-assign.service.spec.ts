import { TestBed } from '@angular/core/testing';

import { ModalDataAssignService } from './modal-data-assign.service';

describe('ModalDataAssignService', () => {
  let service: ModalDataAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDataAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
