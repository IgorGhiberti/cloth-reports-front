import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { VendasService } from '../../Services/vendas.service';
import { VendasVisualizacao } from '../../Models/Vendas';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  vendas: VendasVisualizacao[] = [];
  constructor(private vendaSerivce: VendasService, private router: Router){
    this.getVendasRealizadas();
  }

  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }

  getVendasRealizadas()
  {
    this.vendaSerivce.getVendas().subscribe(vendas => this.vendas = vendas)
    console.log('Dados da venda: ', this.vendas)
  }
}
