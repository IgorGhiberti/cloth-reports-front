import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosLoja } from '../../../Models/produtosLoja';
import { ProdutosLojaService } from '../../../Services/produtos-loja.service';
import { Loja } from '../../../Models/loja';
import { LojaService } from '../../../Services/loja.service';
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

  produtosLoja: ProdutosLoja [] = [];
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
    this.getProdutosNaoVendidos();
  }

  //Exibe os produtos vendidos da loja


  //Exibe os produtos não vendidos da loja
  getProdutosNaoVendidos()
  {
    this.produtosLojaService.getProdutosLojas(this.idLoja).subscribe({
      next: res => {
        this.produtosLoja = res
      },
      error: err => {
        alert(err.message + 'Não existem produtos não vendidos para serem exibidos')
        this.produtosLoja = []
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

  //Aumenta a quantidade
  quantidadeMais(idprodutoloja: number)
  {
    this.produtosLojaService.putQuantidadeMaisProdutosLoja(idprodutoloja).subscribe({
      next: res => {
        this.produtoLojaEspecifico = res,
        this.getProdutosNaoVendidos()
      },
      error: err => console.log(err)
    })
  }

  //Alter para vendido
  quantidadeMenos(idprodutoloja: number)
  {
    this.produtosLojaService.putQuantidadeMenosProdutosLoja(idprodutoloja).subscribe({
      next: res => {
        this.produtoLojaEspecifico = res,
        this.getProdutosNaoVendidos()
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
        this.getProdutosNaoVendidos()
      },
      error: err => {
        console.log(err),
        this.getProdutosNaoVendidos()
      }
    })
  }

}
