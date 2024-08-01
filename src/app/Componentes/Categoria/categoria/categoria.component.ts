import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class CategoriaComponent {

  categorias: Categoria[] = [];
  constructor(private categoriaService: CategoriaService, private router: Router){
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
}
