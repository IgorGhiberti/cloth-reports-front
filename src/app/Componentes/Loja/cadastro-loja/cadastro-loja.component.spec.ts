import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLojaComponent } from './cadastro-loja.component';

describe('CadastroLojaComponent', () => {
  let component: CadastroLojaComponent;
  let fixture: ComponentFixture<CadastroLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroLojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
