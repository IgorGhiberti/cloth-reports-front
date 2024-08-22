import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { VendasService } from '../../Services/vendas.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Grupo_Venda } from '../../Models/grupoVenda';
import { GrupoVendaService } from '../../Services/grupo-venda.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  grupo_venda: Grupo_Venda [] = [];
  grupoVenda!: Grupo_Venda;

  constructor(private grupo_vendaService: GrupoVendaService, private router: Router){}

  ngOnInit(): void {
    this.getGrupoVenda()
  }

  //Pega todos os grupos venda
  getGrupoVenda()
  {
    this.grupo_vendaService.getGrupoVenda().subscribe({
      next: res => {
        this.grupo_venda = res
      },
      error: err => {
        if(err.status == 400)
          alert(err.message + 'Não existe vendas para serem exibidas'),
        this.grupo_venda = [];
      }
    })
  }

  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }
}
