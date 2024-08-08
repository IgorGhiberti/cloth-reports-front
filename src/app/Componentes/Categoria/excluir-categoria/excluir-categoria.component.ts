import { Component, OnInit } from '@angular/core';
import { FormularioCategoriaComponent } from "../formulario-categoria/formulario-categoria.component";
import { Categoria } from '../../../Models/categoria';
import { CategoriaService } from '../../../Services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-excluir-categoria',
  standalone: true,
  imports: [FormularioCategoriaComponent, CommonModule],
  templateUrl: './excluir-categoria.component.html',
  styleUrl: './excluir-categoria.component.scss'
})
export class ExcluirCategoriaComponent implements OnInit {

  btnTitle = 'Excluir categoria';
  categoria!: Categoria;
  idNumber!: number;
  btnAcao = 'Confirmar exclusão';

  constructor(private categoriaService: CategoriaService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.categoriaService.getCategoriaById(id).subscribe(data => {
      this.categoria = data
    });
    this.idNumber = id;
  }

  excluirCategoria(categoria: Categoria)
  {
    this.categoriaService.deleteCategoria(this.idNumber).subscribe(() => {
      this.router.navigateByUrl('categoria');
    })
  }
}
