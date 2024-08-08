import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirMarcaComponent } from './excluir-marca.component';

describe('ExcluirMarcaComponent', () => {
  let component: ExcluirMarcaComponent;
  let fixture: ComponentFixture<ExcluirMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirMarcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
