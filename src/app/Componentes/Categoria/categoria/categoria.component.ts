import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../Models/categoria';
import { CategoriaService } from '../../../Services/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private router: Router){

  }
  ngOnInit(): void {
    this.getCategorias();
  }

  //Lista todas as categorias
  getCategorias()
  {
    this.categoriaService.getCategorias().subscribe(data => this.categorias = data)
    console.log('resposta: ', this.categorias)
  }

  //Redirect para a rota indicada
  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }

  //Filtra a categoria por nome
  filtroCategoria(event: Event)
  {
    var valorFiltro = (event.target as HTMLInputElement).value.toLowerCase();
    if(valorFiltro == '')
    {
      this.getCategorias();
    }
    else
    {
      var listaData = this.categorias;
      var listaFiltrada = listaData.filter(element => element.nome.toLowerCase().includes(valorFiltro));
      this.categorias = listaFiltrada;
    }
  }


}
