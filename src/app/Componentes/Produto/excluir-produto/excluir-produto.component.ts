import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormularioProdutoComponent } from "../formulario-produto/formulario-produto.component";
import { Produto } from '../../../Models/produto';
import { ProdutoService } from '../../../Services/produto.service';

@Component({
  selector: 'app-excluir-produto',
  standalone: true,
  imports: [FormularioProdutoComponent],
  templateUrl: './excluir-produto.component.html',
  styleUrl: './excluir-produto.component.scss'
})
export class ExcluirProdutoComponent implements OnInit {

  btnAcao: string = 'Confirmar exclusão';
  btnTitulo: string = 'Excluir produto';
  produto!: Produto;
  idNumber!: number;
  constructor(private produtoService: ProdutoService, private router: ActivatedRoute, private route: Router){}

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.idNumber = id;
    this.getProductByid()
  }

  getProductByid()
  {
    this.produtoService.getProdutoById(this.idNumber).subscribe({
      next: res => this.produto = res,
      error: err => console.log(err)
    })
  }

  excluirProduto(produto: Produto)
  {
    this.produtoService.deleteProduto(this.idNumber).subscribe({
      next: res => this.produto = res,
      error: err => console.log(err)
    })
    this.route.navigateByUrl('produto');
  }
}
