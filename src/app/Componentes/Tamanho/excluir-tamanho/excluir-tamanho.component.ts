import { Component } from '@angular/core';
import { FormularioTamanhoComponent } from "../formulario-tamanho/formulario-tamanho.component";
import { Tamanho } from '../../../Models/tamanho';
import { TamanhoService } from '../../../Services/tamanho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-excluir-tamanho',
  standalone: true,
  imports: [FormularioTamanhoComponent, CommonModule],
  templateUrl: './excluir-tamanho.component.html',
  styleUrl: './excluir-tamanho.component.scss'
})
export class ExcluirTamanhoComponent {

  btnTitle = 'Excluir tamanho';
  tamanho!: Tamanho;
  idNumber!: number;
  btnAcao = 'Confirmar exclusão';

  constructor(private tamanhoService: TamanhoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.tamanhoService.getTamanhoById(id).subscribe(data => {
      this.tamanho = data
    });
    this.idNumber = id;
  }

  excluirTamanho(tamanho: Tamanho)
  {
    this.tamanhoService.deleteTamanho(this.idNumber).subscribe(() => {
      this.router.navigateByUrl('tamanho');
    })
  }
}
