import { TestBed } from '@angular/core/testing';

import { DetalleUsuarioGuard } from './detalle-usuario.guard';

describe('DetalleUsuarioGuard', () => {
  let guard: DetalleUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetalleUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
