import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Marca } from '../../../Models/marca';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarcaService } from '../../../Services/marca.service';

@Component({
  selector: 'app-formulario-marca',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-marca.component.html',
  styleUrl: './formulario-marca.component.scss'
})
export class FormularioMarcaComponent {

  @Output() onSubmitFunction = new EventEmitter<Marca>();
  @Input() btnTitulo!: string;
  @Input() btnAcao!: string;
  @Input() isDisabled: boolean = false;
  @Input() dadosmarca: Marca | null = null;
  marcaForm!: FormGroup;

  marca!: Marca;
  constructor(private router: Router, private marcaService: MarcaService){}

  ngOnInit(): void {

    this.marcaForm = new FormGroup({
      idmarca: new FormControl(this.dadosmarca ? this.dadosmarca.idmarca: 0),
      nome: new FormControl({value: this.dadosmarca ? this.dadosmarca.nome: '', disabled: this.isDisabled}, [Validators.required])
    })
  }

  //Redireciona a rota
  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }

  submitFunction()
  {
    this.onSubmitFunction.emit(this.marcaForm.value);
  }
}
