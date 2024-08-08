import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTamanhoComponent } from './editar-tamanho.component';

describe('EditarTamanhoComponent', () => {
  let component: EditarTamanhoComponent;
  let fixture: ComponentFixture<EditarTamanhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTamanhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTamanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
