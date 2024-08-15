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

  //Retorna todos os produtos vendidos
  getProdutosVendidos(idloja: number): Observable<ProdutosLoja[]>
  {
    return this.httpCLient.get<ProdutosLoja[]>(`${this.url}/produtoLoja/loja/${idloja}/vendido`);
  }

  //Retorna todos os produtos não vendidos
  getProdutosNaoVendidos(idloja: number): Observable<ProdutosLoja[]>
  {
    return this.httpCLient.get<ProdutosLoja[]>(`${this.url}/produtoLoja/loja/${idloja}/nao-vendido`);
  }

  //Cria uma nova relação entre produto e loja
  postProdutosLoja(idloja: number, produtosLoja: ProdutosLoja): Observable<ProdutosLoja>
  {
    return this.httpCLient.post<ProdutosLoja>(`${this.url}/loja/${idloja}`, produtosLoja)
  }

  //Edita de vendido para não vendido
  putProdutosLojaVendido(idprodutoloja: number, produtosLoja: ProdutosLoja): Observable<ProdutosLoja>
  {
    return this.httpCLient.put<ProdutosLoja>(`${this.url}/${idprodutoloja}/nao-vendido`, produtosLoja)
  }

  //Edita de vendido para vendido
  putProdutosLojaNaoVendido(idprodutoloja: number, produtosLoja: ProdutosLoja): Observable<ProdutosLoja>
  {
    return this.httpCLient.put<ProdutosLoja>(`${this.url}/${idprodutoloja}/vendido`, produtosLoja)
  }

  //Exclui a relação entre um produto e uma loja
  deleteProdutosLoja(idprodutoloja: number): Observable<ProdutosLoja>
  {
    return this.httpCLient.delete<ProdutosLoja>(`produtoLoja/${idprodutoloja}`)
  }
}
