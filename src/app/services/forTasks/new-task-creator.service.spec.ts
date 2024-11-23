import { TestBed } from '@angular/core/testing';

import { NewTaskCreatorService } from './new-task-creator.service';

describe('NewTaskCreatorService', () => {
  let service: NewTaskCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTaskCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
