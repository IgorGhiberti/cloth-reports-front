import { Component, OnInit } from '@angular/core';
import { FormularioCategoriaComponent } from "../formulario-categoria/formulario-categoria.component";
import { Categoria } from '../../../Models/categoria';
import { CategoriaService } from '../../../Services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-categoria',
  standalone: true,
  imports: [FormularioCategoriaComponent],
  templateUrl: './excluir-categoria.component.html',
  styleUrl: './excluir-categoria.component.scss'
})
export class ExcluirCategoriaComponent implements OnInit {

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

  excluirCategoria(categoria: Categoria)
  {
    this.categoriaService.deleteCategoria(this.idNumber).subscribe((data) => {
      this.router.navigateByUrl('categoria');
    })
  }
}
