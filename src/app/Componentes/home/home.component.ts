import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { VendasService } from '../../Services/vendas.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Grupo_Venda } from '../../Models/grupoVenda';
import { GrupoVendaService } from '../../Services/grupo-venda.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  grupo_venda: Grupo_Venda [] = [];
  grupoVenda!: Grupo_Venda;
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null)
  })

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

  //Exclui a venda
  excluirVenda(idgrupovenda: number)
  {
    var r = confirm("Deseja realmente excluir a venda?")
    if(r == true)
    {
        this.grupo_vendaService.deleteGrupoVenda(idgrupovenda).subscribe({
          next: res => console.log(res),
          error: err => console.error(err)
        })
        this.getGrupoVenda()
    }
  }

  //Filtra com a data
  getVendasWithFilter()
  {
    const formValue = this.range.value;
    if(formValue.start && formValue.end)
    {
      this.grupo_vendaService.getVendasWithDateFilter(formValue.start, formValue.end).subscribe({
        next: res => {
          this.grupo_venda = res,
          console.log(this.grupo_venda)
        },
        error: err => console.error(err)
      })
    }
  }

  clearFilter()
  {
    this.range.value.start = null
    this.range.value.end = null
    this.getGrupoVenda();
  }

  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }
}
