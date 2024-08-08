import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../Services/categoria.service';
import { Categoria } from '../../../Models/categoria';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-categoria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-categoria.component.html',
  styleUrl: './formulario-categoria.component.scss'
})
export class FormularioCategoriaComponent implements OnInit {
  @Output() onSubmitFunction = new EventEmitter<Categoria>();
  @Input() btnTitulo!: string;
  @Input() btnAcao!: string;
  @Input() dadosCategoria: Categoria | null = null;
  categoriaForm!: FormGroup;

  categoria!: Categoria;
  constructor(private router: Router, private categoriaService: CategoriaService){}

  ngOnInit(): void {

    this.categoriaForm = new FormGroup({
      idcategoria: new FormControl(this.dadosCategoria ? this.dadosCategoria.idcategoria: 0),
      nome: new FormControl(this.dadosCategoria ? this.dadosCategoria.nome: '', [Validators.required])
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
    this.onSubmitFunction.emit(this.categoriaForm.value);
  }
}
