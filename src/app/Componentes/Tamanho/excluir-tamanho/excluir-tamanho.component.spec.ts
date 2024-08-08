import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirTamanhoComponent } from './excluir-tamanho.component';

describe('ExcluirTamanhoComponent', () => {
  let component: ExcluirTamanhoComponent;
  let fixture: ComponentFixture<ExcluirTamanhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirTamanhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirTamanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
