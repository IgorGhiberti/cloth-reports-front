import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../Services/categoria.service';
import { Categoria } from '../../../Models/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioCategoriaComponent } from "../formulario-categoria/formulario-categoria.component";

@Component({
  selector: 'app-editar-categoria',
  standalone: true,
  imports: [FormularioCategoriaComponent],
  templateUrl: './editar-categoria.component.html',
  styleUrl: './editar-categoria.component.scss'
})
export class EditarCategoriaComponent implements OnInit {

  btnTitle = 'Editar categoria';
  categoria!: Categoria;
  idNumber!: number;
  constructor(private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.categoriaService.getCategoriaById(id).subscribe(data => {
      this.categoria = data
      console.log('data: ', this.categoria)
    });
    this.idNumber = id;
    console.log('id atual: ', id)
  }

  editarCategoria(categoria: Categoria)
  {
    this.categoriaService.putCategoria(categoria, this.idNumber).subscribe((data) => {
      this.categoria = data
    })
  }

}
