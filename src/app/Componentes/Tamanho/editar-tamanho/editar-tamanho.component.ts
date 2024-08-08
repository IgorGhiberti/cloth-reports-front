import { Component } from '@angular/core';
import { FormularioTamanhoComponent } from "../formulario-tamanho/formulario-tamanho.component";
import { Tamanho } from '../../../Models/tamanho';
import { TamanhoService } from '../../../Services/tamanho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-tamanho',
  standalone: true,
  imports: [FormularioTamanhoComponent, CommonModule],
  templateUrl: './editar-tamanho.component.html',
  styleUrl: './editar-tamanho.component.scss'
})
export class EditarTamanhoComponent {

  btnTitle = 'Editar tamanho';
  btnAcao = 'Confirmar edição';
  tamanho!: Tamanho;
  idNumber!: number;
  constructor(private tamanhoService: TamanhoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.idNumber = id;
    this.tamanhoService.getTamanhoById(id).subscribe(data => {
      this.tamanho = data
    });
  }

  editarTamanho(tamanho: Tamanho)
  {
    this.tamanhoService.putTamanho(tamanho, this.idNumber).subscribe((data) => {
      this.tamanho = data
      this.router.navigateByUrl('tamanho');
    })
  }
}
