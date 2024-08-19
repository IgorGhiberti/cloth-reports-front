import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdutoLojaComponent } from './cadastro-produto-loja.component';

describe('CadastroProdutoLojaComponent', () => {
  let component: CadastroProdutoLojaComponent;
  let fixture: ComponentFixture<CadastroProdutoLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroProdutoLojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroProdutoLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
