import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ReportsVenda } from '../../../Models/reports-lojaVenda';
import { GrupoVendaService } from '../../../Services/grupo-venda.service';


@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {

  view: [number, number] = [1500, 800];
  reportsVendas: ReportsVenda [] = [];
  chartData: any[] = [];
  colorScheme: Color = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
    group: ScaleType.Ordinal,
    name: 'Custom Scheme',
    selectable: true
  };

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Lojas';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Valor vendido';
  legendTitle: string = 'Valor';


  constructor(private grupoVendaService: GrupoVendaService){}

  ngOnInit(): void {
    this.getReportsVenda()
  }

  getReportsVenda() {
    this.grupoVendaService.getReports().subscribe({
      next: res => {
        this.reportsVendas = res;
        this.chartData = res.map((item: ReportsVenda) => ({
          name: item.loja,
          series: [
            {
              name: 'Total Vendido',
              value: item.total
            }
          ]
        }),
      console.log(this.chartData));
      },
      error: err => console.error(err)
    });
  }
}
