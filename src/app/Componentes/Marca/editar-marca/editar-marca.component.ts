import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormularioMarcaComponent } from "../formulario-marca/formulario-marca.component";
import { Marca } from '../../../Models/marca';
import { MarcaService } from '../../../Services/marca.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-marca',
  standalone: true,
  imports: [FormularioMarcaComponent, CommonModule],
  templateUrl: './editar-marca.component.html',
  styleUrl: './editar-marca.component.scss'
})
export class EditarMarcaComponent {

  btnTitle = 'Editar marca';
  btnAcao = 'Confirmar edição';
  marca!: Marca;
  idNumber!: number;
  constructor(private marcaService: MarcaService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.idNumber = id;
    this.marcaService.getMarcaById(id).subscribe(data => {
      this.marca = data
    });
  }

  editarMarca(marca: Marca)
  {
    this.marcaService.putMarca(marca, this.idNumber).subscribe((data) => {
      this.marca = data
      this.router.navigateByUrl('marca');
    })
  }
}
