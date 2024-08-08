import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormularioMarcaComponent } from "../formulario-marca/formulario-marca.component";
import { Marca } from '../../../Models/marca';
import { MarcaService } from '../../../Services/marca.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-marca',
  standalone: true,
  imports: [FormularioMarcaComponent, CommonModule],
  templateUrl: './excluir-marca.component.html',
  styleUrl: './excluir-marca.component.scss'
})
export class ExcluirMarcaComponent {

  btnTitle = 'Excluir Marca';
  marca!: Marca;
  idNumber!: number;
  btnAcao = 'Confirmar exclusão';

  constructor(private marcaService: MarcaService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.marcaService.getMarcaById(id).subscribe(data => {
      this.marca = data
    });
    this.idNumber = id;
  }

  excluirMarca(Marca: Marca)
  {
    this.marcaService.deleteMarca(this.idNumber).subscribe(() => {
      this.router.navigateByUrl('marca');
    })
  }
}
