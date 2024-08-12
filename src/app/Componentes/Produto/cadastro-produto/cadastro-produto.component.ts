import { Component } from '@angular/core';
import { FormularioProdutoComponent } from "../formulario-produto/formulario-produto.component";
import { ProdutoService } from '../../../Services/produto.service';
import { Produto } from '../../../Models/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [FormularioProdutoComponent],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent {

  btnAcao: string = 'Confirmar cadastro';
  btnTitulo: string = 'Cadastrar produto';

  constructor(private produtoService: ProdutoService, private route: Router){}

  cadastrarProduto(produto: Produto)
  {
    this.produtoService.postProduto(produto).subscribe({
      next: res => {
        produto = res
      },
      error: err => console.log(err)
    })
    this.route.navigateByUrl('produto');
  }

}
