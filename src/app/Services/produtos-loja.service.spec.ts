import { TestBed } from '@angular/core/testing';

import { ProdutosLojaService } from './produtos-loja.service';

describe('ProdutosLojaService', () => {
  let service: ProdutosLojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosLojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
