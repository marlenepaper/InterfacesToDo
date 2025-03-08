import { TestBed } from '@angular/core/testing';

import { EnviarEstadoService } from './enviar-estado.service';

describe('EnviarEstadoService', () => {
  let service: EnviarEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
