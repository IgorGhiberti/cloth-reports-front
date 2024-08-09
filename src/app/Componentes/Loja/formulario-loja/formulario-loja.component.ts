import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Loja } from '../../../Models/loja';
import { Router } from '@angular/router';
import { LojaService } from '../../../Services/loja.service';

@Component({
  selector: 'app-formulario-loja',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-loja.component.html',
  styleUrl: './formulario-loja.component.scss'
})
export class FormularioLojaComponent {

  @Output() onSubmitFunction = new EventEmitter<Loja>();
  @Input() btnTitulo!: string;
  @Input() btnAcao!: string;
  @Input() isDisabled: boolean = false;
  @Input() dadosloja: Loja | null = null;
  lojaForm!: FormGroup;

  loja!: Loja;
  constructor(private router: Router, private lojaService: LojaService){}

  ngOnInit(): void {

    this.lojaForm = new FormGroup({
      idloja: new FormControl(this.dadosloja ? this.dadosloja.idloja: 0),
      nome: new FormControl({value: this.dadosloja ? this.dadosloja.nome: '', disabled: this.isDisabled}, [Validators.required]),
      cnpj: new FormControl(this.dadosloja ? this.dadosloja.cnpj : '')
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
    this.onSubmitFunction.emit(this.lojaForm.value);
  }
}
