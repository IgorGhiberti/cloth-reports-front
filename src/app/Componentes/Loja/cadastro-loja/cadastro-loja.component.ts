import { Component } from '@angular/core';
import { FormularioLojaComponent } from "../formulario-loja/formulario-loja.component";

@Component({
  selector: 'app-cadastro-loja',
  standalone: true,
  imports: [FormularioLojaComponent],
  templateUrl: './cadastro-loja.component.html',
  styleUrl: './cadastro-loja.component.scss'
})
export class CadastroLojaComponent {

}
