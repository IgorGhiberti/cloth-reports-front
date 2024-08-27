import { Component, OnInit } from '@angular/core';
import { ProdutoView } from '../../../Models/produtoview';
import { ProdutoService } from '../../../Services/produto.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent implements OnInit {

  produtos: ProdutoView[] = [];

  constructor(private produtoService: ProdutoService, private route: Router){}

  ngOnInit(): void {
    this.getProdutos()
  }

  getProdutos()
  {
    this.produtoService.getProdutos().subscribe({
      next: res => {
        this.produtos = res,
        console.log(this.produtos)
      },
      error: err => console.log(err)
    })
  }

  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.route.navigateByUrl(rota)
  }

  filtroProduto(event: Event)
  {
    var valorFiltro = (event.target as HTMLInputElement).value.toLowerCase();
    if(valorFiltro == '')
    {
      this.getProdutos();
    }
    else
    {
      var listaData = this.produtos;
      var listaFiltrada = listaData.filter(element => element.nomeproduto.toLowerCase().includes(valorFiltro));
      this.produtos = listaFiltrada;
    }
  }
}
