import { Component, OnInit } from '@angular/core';
import { Loja } from '../../../Models/loja';
import { LojaService } from '../../../Services/loja.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [],
  templateUrl: './loja.component.html',
  styleUrl: './loja.component.scss'
})
export class LojaComponent implements OnInit {

  lojas: Loja[] = [];

  constructor(private lojaService: LojaService, private router: Router){}

  ngOnInit(): void {
    this.getLojas();
  }

  //Lista todas as categorias
  getLojas()
  {
    this.lojaService.getLojas().subscribe(data => this.lojas = data)
  }

  //Redirect para a rota indicada
  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }

  //Filtra a loja por nome e cnpj
  filtroLoja(event: Event)
  {
    var valorFiltro = (event.target as HTMLInputElement).value.toLowerCase();
    if(valorFiltro == '')
    {
      this.getLojas();
    }
    else
    {
      var listaData = this.lojas;
      var listaFiltrada = listaData.filter(element => element.nome.toLowerCase().includes(valorFiltro));
      this.lojas = listaFiltrada;
    }
  }
}
