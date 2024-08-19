import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosLoja } from '../../../Models/produtosLoja';
import { ProdutosLojaService } from '../../../Services/produtos-loja.service';
import { Loja } from '../../../Models/loja';
import { LojaService } from '../../../Services/loja.service';
import { ProdutoService } from '../../../Services/produto.service';
import { ProdutoView } from '../../../Models/produtoview';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-produtos-loja',
  standalone: true,
  imports: [MatButtonModule, MatStepperModule],
  templateUrl: './produtos-loja.component.html',
  styleUrl: './produtos-loja.component.scss'
})
export class ProdutosLojaComponent implements OnInit {

  produtosLojaNaoVendidos: ProdutosLoja [] = [];
  produtosLojaVendidos: ProdutosLoja [] = [];
  produtoLojaEspecifico!: ProdutosLoja;
  loja!: Loja;
  idLoja!: number;

  constructor(private router: Router,
    private produtosLojaService: ProdutosLojaService,
    private route: ActivatedRoute,
    private lojaService: LojaService
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('idloja'));
    this.idLoja = id;
    this.getLojaById();
    this.getProdutosLojaVendidos();
    this.getProdutosNaoVendidos();
  }

  //Exibe os produtos vendidos da loja
  getProdutosLojaVendidos()
  {
    this.produtosLojaService.getProdutosVendidos(this.idLoja).subscribe({
      next: res => {
        this.produtosLojaVendidos = res,
        console.log('produtos loja vendidos', this.produtosLojaVendidos)
      },
      error: err => {
        alert('Não existem produtos vendidos para serem exibidos'),
        this.produtosLojaVendidos = []
      }
    })
  }

  //Exibe os produtos não vendidos da loja
  getProdutosNaoVendidos()
  {
    this.produtosLojaService.getProdutosNaoVendidos(this.idLoja).subscribe({
      next: res => {
        this.produtosLojaNaoVendidos = res
      },
      error: err => {
        alert('Não existem produtos não vendidos para serem exibidos'),
        this.produtosLojaNaoVendidos = []
      }
    })
  }

  //Capta a loja que está sendo exibida
  getLojaById()
  {
    this.lojaService.getLojaById(this.idLoja).subscribe({
      next: res => {
        this.loja = res
      },
      error: err => console.log(err)
    })
  }

  //Redirect para a rota indicada
  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }

  //Altera para não vendido
  alterarParaNaoVendido(idprodutoloja: number)
  {
    this.produtosLojaService.deleteProdutosLojaNaoVendido(idprodutoloja).subscribe({
      next: res => {
        this.produtoLojaEspecifico = res,
        this.getProdutosNaoVendidos();
        this.getProdutosLojaVendidos();
      },
      error: err => console.log(err)
    })
  }

  //Alter para vendido
  alterarParaVendido(idprodutoloja: number)
  {
    this.produtosLojaService.putProdutosLojaVendido(idprodutoloja).subscribe({
      next: res => {
        this.produtoLojaEspecifico = res,
        this.getProdutosLojaVendidos();
        this.getProdutosNaoVendidos();
      },
      error: err => console.log(err)
    })
  }

  //Exclui o produto selecionado daquela loja
  excluirProdutoLoja(idprodutoloja: number)
  {
    this.produtosLojaService.deleteProdutosLoja(idprodutoloja).subscribe({
      next: res => {
        console.log(res),
        this.getProdutosLojaVendidos(),
        this.getProdutosNaoVendidos()
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
