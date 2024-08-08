import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTamanhoComponent } from './formulario-tamanho.component';

describe('FormularioTamanhoComponent', () => {
  let component: FormularioTamanhoComponent;
  let fixture: ComponentFixture<FormularioTamanhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioTamanhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioTamanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
