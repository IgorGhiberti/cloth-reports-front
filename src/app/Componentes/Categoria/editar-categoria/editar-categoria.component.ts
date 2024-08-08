import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../Services/categoria.service';
import { Categoria } from '../../../Models/categoria';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioCategoriaComponent } from "../formulario-categoria/formulario-categoria.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-categoria',
  standalone: true,
  imports: [FormularioCategoriaComponent, CommonModule],
  templateUrl: './editar-categoria.component.html',
  styleUrl: './editar-categoria.component.scss'
})
export class EditarCategoriaComponent implements OnInit {

  btnTitle = 'Editar categoria';
  btnAcao = 'Confirmar edição';
  categoria!: Categoria;
  idNumber!: number;
  constructor(private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.idNumber = id;
    this.categoriaService.getCategoriaById(id).subscribe(data => {
      this.categoria = data
    });
  }

  editarCategoria(categoria: Categoria)
  {
    this.categoriaService.putCategoria(categoria, this.idNumber).subscribe((data) => {
      this.categoria = data
      this.router.navigateByUrl('categoria');
    })
  }

}
