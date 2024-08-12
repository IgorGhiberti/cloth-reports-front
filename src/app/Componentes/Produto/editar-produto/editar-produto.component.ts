import { Component, OnInit } from '@angular/core';
import { FormularioProdutoComponent } from "../formulario-produto/formulario-produto.component";
import { ProdutoService } from '../../../Services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoView } from '../../../Models/produtoview';
import { Produto } from '../../../Models/produto';

@Component({
  selector: 'app-editar-produto',
  standalone: true,
  imports: [FormularioProdutoComponent],
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.scss'
})
export class EditarProdutoComponent implements OnInit {

  btnAcao = 'Confirmar edição';
  btnTitulo = 'Editar produto';
  produto!: ProdutoView;
  idNumber!: number;

  constructor(private produtoService: ProdutoService, private router: ActivatedRoute, private route: Router){}

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.idNumber = id;
    this.getProdutoById();
  }

  getProdutoById()
  {
    this.produtoService.getProdutoById(this.idNumber).subscribe({
      next: res => {
        this.produto = res,
        console.log(this.produto)
      },
      error: err => console.log(err)
    })
  }

  editarProduto(produto: Produto)
  {
    this.produtoService.putProduto(produto, this.idNumber).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
    this.route.navigateByUrl('produto');
  }
}
