import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo_Venda } from '../Models/grupoVenda';

@Injectable({
  providedIn: 'root'
})
export class GrupoVendaService {

  private url = `${environment.api}/grupo_venda`

  constructor(private httpClient: HttpClient) { }

  //Exibe todas as vendas
  getGrupoVenda(): Observable<Grupo_Venda[]>
  {
    return this.httpClient.get<Grupo_Venda[]>(this.url)
  }

  //Cadastra um novo grupo venda
  postGrupoVenda(grupoVenda: Grupo_Venda): Observable<Grupo_Venda>
  {
    return this.httpClient.post<Grupo_Venda>(`${this.url}`, grupoVenda)
  }

  //Aumenta a quantidade de produtos vendidos
  putGrupoVendaMais(id: number): Observable<Grupo_Venda>
  {
    return this.httpClient.put<Grupo_Venda>(`${this.url}/${id}/aumentar`, [])
  }

  //Diminuir a quantidade de produtos vendidos
  putGrupoVendaMenos(id: number): Observable<Grupo_Venda>
  {
    return this.httpClient.put<Grupo_Venda>(`${this.url}/${id}/diminuir`, [])
  }

  //Exclui o grupo venda
  deleteGrupoVenda(id: number): Observable<Grupo_Venda>
  {
    return this.httpClient.delete<Grupo_Venda>(`${this.url}/${id}`)
  }
}
