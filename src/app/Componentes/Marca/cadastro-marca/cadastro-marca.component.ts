import { Component } from '@angular/core';
import { FormularioMarcaComponent } from "../formulario-marca/formulario-marca.component";
import { MarcaService } from '../../../Services/marca.service';
import { Router } from '@angular/router';
import { Marca } from '../../../Models/marca';

@Component({
  selector: 'app-cadastro-marca',
  standalone: true,
  imports: [FormularioMarcaComponent],
  templateUrl: './cadastro-marca.component.html',
  styleUrl: './cadastro-marca.component.scss'
})
export class CadastroMarcaComponent {

  btnTitulo = "Cadastrar marca";
  btnAcao = 'Confirmar marca'
  constructor(private marcaService: MarcaService, private route: Router){}

  //Cadastra uma nova marca
  cadastroNovaMarca(marca: Marca)
  {
    this.marcaService.postMarca(marca).subscribe(data => {
      marca = data
      this.route.navigateByUrl('marca');
    });
  }
}
