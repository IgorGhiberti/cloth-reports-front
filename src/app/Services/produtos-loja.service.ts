import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ProdutosLoja } from '../Models/produtosLoja';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosLojaService {

  private url = `${environment.api}`

  constructor(private httpCLient : HttpClient) { }

  //Retorna todos os produtos daquela loja
  getProdutosLojas(idloja: number): Observable<ProdutosLoja[]>
  {
    return this.httpCLient.get<ProdutosLoja[]>(`${this.url}/produtoLoja/loja/${idloja}`);
  }

  //Cria uma nova relação entre produto e loja
  postProdutosLoja(idloja: number, produtosLoja: ProdutosLoja): Observable<ProdutosLoja>
  {
    return this.httpCLient.post<ProdutosLoja>(`${this.url}/produtoLoja/loja/${idloja}`, produtosLoja)
  }

  //Quantidade ++
  putQuantidadeMaisProdutosLoja(idprodutoloja: number): Observable<ProdutosLoja>
  {
    return this.httpCLient.put<ProdutosLoja>(`${this.url}/${idprodutoloja}/aumentar`, [])
  }

  //Quantidade --
  putQuantidadeMenosProdutosLoja(idprodutoloja: number): Observable<ProdutosLoja>
  {
    return this.httpCLient.put<ProdutosLoja>(`${this.url}/${idprodutoloja}/diminuir`, [])
  }

  //Exclui a relação entre um produto e uma loja
  deleteProdutosLoja(idprodutoloja: number): Observable<ProdutosLoja>
  {
    return this.httpCLient.delete<ProdutosLoja>(`${this.url}/produtoLoja/${idprodutoloja}`)
  }
}
