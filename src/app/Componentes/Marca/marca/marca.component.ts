import { Component } from '@angular/core';
import { Marca } from '../../../Models/marca';
import { MarcaService } from '../../../Services/marca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [],
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.scss'
})
export class MarcaComponent {

  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService, private router: Router){
    this.getMarcas();
  }

  //Lista todas as categorias
  getMarcas()
  {
    this.marcaService.getMarcas().subscribe(data => this.marcas = data)
  }

  //Redirect para a rota indicada
  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }

  //Filtra a categoria por nome
  filtroMarca(event: Event)
  {
    var valorFiltro = (event.target as HTMLInputElement).value.toLowerCase();
    if(valorFiltro == '')
    {
      this.getMarcas();
    }
    else
    {
      var listaData = this.marcas;
      var listaFiltrada = listaData.filter(element => element.nome.toLowerCase().includes(valorFiltro));
      this.marcas = listaFiltrada;
    }
  }
}
