import { Component } from '@angular/core';
import { FormularioCategoriaComponent } from '../formulario-categoria/formulario-categoria.component';
import { CategoriaService } from '../../../Services/categoria.service';
import { Categoria } from '../../../Models/categoria';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-categoria',
  standalone: true,
  imports: [FormularioCategoriaComponent],
  templateUrl: './cadastro-categoria.component.html',
  styleUrl: './cadastro-categoria.component.scss'
})
export class CadastroCategoriaComponent {

  btnTitulo = "Cadastrar Categoria";
  btnAcao = 'Confirmar cadastro'
  constructor(private categoriaService: CategoriaService, private route: Router){}

  //Cadastra uma nova categoria
  cadastroNovaCategoria(categoria: Categoria)
  {
    this.categoriaService.postCategoria(categoria).subscribe(data => categoria = data);
    this.route.navigateByUrl('categoria')
  }
}
