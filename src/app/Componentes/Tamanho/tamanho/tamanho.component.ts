import { Component } from '@angular/core';
import { Tamanho } from '../../../Models/tamanho';
import { TamanhoService } from '../../../Services/tamanho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tamanho',
  standalone: true,
  imports: [],
  templateUrl: './tamanho.component.html',
  styleUrl: './tamanho.component.scss'
})
export class TamanhoComponent {

  tamanhos: Tamanho[] = [];

  constructor(private tamanhoService: TamanhoService, private router: Router){
    this.getTamanhos();
  }

  //Lista todas as categorias
  getTamanhos()
  {
    this.tamanhoService.getTamanho().subscribe(data => this.tamanhos = data)
  }

  //Redirect para a rota indicada
  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }

  //Filtra a categoria por nome
  filtroTamanho(event: Event)
  {
    var valorFiltro = (event.target as HTMLInputElement).value.toLowerCase();
    if(valorFiltro == '')
    {
      this.getTamanhos();
    }
    else
    {
      var listaData = this.tamanhos;
      var listaFiltrada = listaData.filter(element => element.nome.toLowerCase().includes(valorFiltro));
      this.tamanhos = listaFiltrada;
    }
  }
}
