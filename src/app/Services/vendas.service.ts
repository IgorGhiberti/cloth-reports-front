import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venda } from '../Models/Vendas';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private url = `${environment.api}/venda`

  constructor(private httpClient: HttpClient) {}

  //Cria uma venda
  postVenda(venda: Venda) : Observable<Venda>
  {
    return this.httpClient.post<Venda>(`${this.url}`, venda)
  }

  //Edita a data da venda
  putVenda(id:number, venda:Venda): Observable<Venda>
  {
    return this.httpClient.put<Venda>(`${this.url}/${id}`, venda)
  }

  //Excluir a venda
  deleteVenda(id: number): Observable<Venda>
  {
    return this.httpClient.delete<Venda>(`${this.url}/${id}`)
  }
}
