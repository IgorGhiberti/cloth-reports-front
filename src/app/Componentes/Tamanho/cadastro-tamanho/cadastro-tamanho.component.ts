import { Component } from '@angular/core';
import { TamanhoService } from '../../../Services/tamanho.service';
import { Tamanho } from '../../../Models/tamanho';
import { FormularioTamanhoComponent } from "../formulario-tamanho/formulario-tamanho.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-tamanho',
  standalone: true,
  imports: [FormularioTamanhoComponent],
  templateUrl: './cadastro-tamanho.component.html',
  styleUrl: './cadastro-tamanho.component.scss'
})
export class CadastroTamanhoComponent {

  btnTitulo = "Cadastrar Tamanho";
  btnAcao = 'Confirmar cadastro'
  constructor(private tamanhoService: TamanhoService, private route: Router){}

  //Cadastra uma nova categoria
  cadastroNovaCategoria(tamanho: Tamanho)
  {
    this.tamanhoService.postTamanho(tamanho).subscribe(data => {
      tamanho = data
      this.route.navigateByUrl('tamanho');
    });
  }
}
