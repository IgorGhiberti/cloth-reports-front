import { TestBed } from '@angular/core/testing';

import { GrupoVendaService } from './grupo-venda.service';

describe('GrupoVendaService', () => {
  let service: GrupoVendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoVendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
