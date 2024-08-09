import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLojaComponent } from './formulario-loja.component';

describe('FormularioLojaComponent', () => {
  let component: FormularioLojaComponent;
  let fixture: ComponentFixture<FormularioLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioLojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
