import { Component } from '@angular/core';
import { FormularioLojaComponent } from "../formulario-loja/formulario-loja.component";
import { Loja } from '../../../Models/loja';
import { LojaService } from '../../../Services/loja.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-loja',
  standalone: true,
  imports: [FormularioLojaComponent],
  templateUrl: './cadastro-loja.component.html',
  styleUrl: './cadastro-loja.component.scss'
})
export class CadastroLojaComponent {

  btnAcao: string = 'Cadastrar nova loja';
  btnTitulo: string = 'Cadastro nova loja';

  constructor(private lojaService: LojaService, private route: Router){}

  cadastrarLoja(loja: Loja)
  {
    this.lojaService.postLoja(loja).subscribe({
      next: res => loja = res,
      error: err => console.log(err)
    })
    this.route.navigateByUrl('loja');
  }
}
