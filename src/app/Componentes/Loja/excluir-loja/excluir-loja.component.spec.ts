import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirLojaComponent } from './excluir-loja.component';

describe('ExcluirLojaComponent', () => {
  let component: ExcluirLojaComponent;
  let fixture: ComponentFixture<ExcluirLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirLojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
