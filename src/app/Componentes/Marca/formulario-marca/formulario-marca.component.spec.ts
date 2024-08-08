import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMarcaComponent } from './formulario-marca.component';

describe('FormularioMarcaComponent', () => {
  let component: FormularioMarcaComponent;
  let fixture: ComponentFixture<FormularioMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMarcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
