import { Component, OnInit } from '@angular/core';
import { FormularioLojaComponent } from "../formulario-loja/formulario-loja.component";
import { CommonModule } from '@angular/common';
import { Loja } from '../../../Models/loja';
import { ActivatedRoute, Router } from '@angular/router';
import { LojaService } from '../../../Services/loja.service';

@Component({
  selector: 'app-editar-loja',
  standalone: true,
  imports: [FormularioLojaComponent, CommonModule],
  templateUrl: './editar-loja.component.html',
  styleUrl: './editar-loja.component.scss'
})
export class EditarLojaComponent implements OnInit{

  btnAcao: string = 'Confirmar edição'
  btnTitulo: string = 'Editar loja'
  loja!: Loja;
  idNumber!: number;

  constructor(private route: ActivatedRoute, private lojaService: LojaService, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.idNumber = id;
    this.getLojaById()
  }

  getLojaById()
  {
    this.lojaService.getLojaById(this.idNumber).subscribe({
      next: res => this.loja = res,
      error: err => console.log(err)
    })
  }

  editarLoja(loja: Loja)
  {
    this.lojaService.putLoja(loja, this.idNumber).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
    this.router.navigateByUrl('loja')
  }
}
