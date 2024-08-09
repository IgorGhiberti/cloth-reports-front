import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormularioLojaComponent } from "../formulario-loja/formulario-loja.component";
import { Loja } from '../../../Models/loja';
import { LojaService } from '../../../Services/loja.service';

@Component({
  selector: 'app-excluir-loja',
  standalone: true,
  imports: [FormularioLojaComponent, CommonModule],
  templateUrl: './excluir-loja.component.html',
  styleUrl: './excluir-loja.component.scss'
})
export class ExcluirLojaComponent implements OnInit {

  btnAcao: string = 'Confirmar exclusão';
  btnTitulo: string = 'Excluir loja';
  loja!: Loja;
  idNumber!: number;

  constructor(private lojaService: LojaService, private route: Router, private router: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.idNumber = id;
    this.getLojaById();
  }

  getLojaById()
  {
    this.lojaService.getLojaById(this.idNumber).subscribe({
      next: res => this.loja = res,
      error: err => console.log(err)
    })
  }

  excluirLoja(loja: Loja)
  {
    this.lojaService.deleteLoja(this.idNumber).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
    this.route.navigateByUrl('loja');
  }
}
