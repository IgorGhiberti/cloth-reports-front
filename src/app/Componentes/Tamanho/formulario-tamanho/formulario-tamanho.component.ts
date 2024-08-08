import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tamanho } from '../../../Models/tamanho';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TamanhoService } from '../../../Services/tamanho.service';

@Component({
  selector: 'app-formulario-tamanho',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-tamanho.component.html',
  styleUrl: './formulario-tamanho.component.scss'
})
export class FormularioTamanhoComponent {
  @Output() onSubmitFunction = new EventEmitter<Tamanho>();
  @Input() btnTitulo!: string;
  @Input() btnAcao!: string;
  @Input() isDisabled: boolean = false;
  @Input() dadosTamanho: Tamanho | null = null;
  tamanhoForm!: FormGroup;

  categoria!: Tamanho;
  constructor(private router: Router, private tamanhoService: TamanhoService){}

  ngOnInit(): void {

    this.tamanhoForm = new FormGroup({
      idtamanho: new FormControl(this.dadosTamanho ? this.dadosTamanho.idtamanho: 0),
      nome: new FormControl({value: this.dadosTamanho ? this.dadosTamanho.nome: '', disabled: this.isDisabled}, [Validators.required])
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
    this.onSubmitFunction.emit(this.tamanhoForm.value);
  }
}
