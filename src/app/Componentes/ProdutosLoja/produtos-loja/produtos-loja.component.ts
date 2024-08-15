import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosLoja } from '../../../Models/produtosLoja';
import { ProdutosLojaService } from '../../../Services/produtos-loja.service';

@Component({
  selector: 'app-produtos-loja',
  standalone: true,
  imports: [],
  templateUrl: './produtos-loja.component.html',
  styleUrl: './produtos-loja.component.scss'
})
export class ProdutosLojaComponent implements OnInit {

  produtosLoja: ProdutosLoja [] = [];
  constructor(private router: Router, private produtosLojaService: ProdutosLojaService, private route: ActivatedRoute){}
  idLoja!: number;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('idloja'));
    this.idLoja = id;
    this.getProdutosLojaVendidos();
  }

  getProdutosLojaVendidos()
  {
    this.produtosLojaService.getProdutosVendidos(this.idLoja).subscribe({
      next: res => {
        this.produtosLoja = res,
        console.log(this.produtosLoja)
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
}
