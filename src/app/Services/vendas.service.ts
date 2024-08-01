import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VendasVisualizacao } from '../Models/Vendas';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private url = `${environment.api}/venda`

  constructor(private httpClient: HttpClient) {
  }

  //Retorna todas as vendas
  getVendas(): Observable<VendasVisualizacao[]>{
    return this.httpClient.get<VendasVisualizacao[]>(this.url);
  }


}
