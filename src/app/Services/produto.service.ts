import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ProdutoView } from '../Models/produtoview';
import { Observable } from 'rxjs';
import { Produto } from '../Models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = `${environment.api}/produto`

  constructor(private httpClient: HttpClient) { }

  //Lista todos os produtos
  getProdutos(): Observable<ProdutoView[]>
  {
    return this.httpClient.get<ProdutoView[]>(this.url);
  }

  //Lista apenas um produto
  getProdutoById(id: number): Observable<Produto>
  {
    return this.httpClient.get<Produto>(`${this.url}/${id}`);
  }

  //Edita um produto
  putProduto(produto: Produto, id: number): Observable<Produto>
  {
    return this.httpClient.put<Produto>(`${this.url}/${id}`, produto)
  }

  //Criar novo produto
  postProduto(produto: Produto): Observable<Produto>
  {
    return this.httpClient.post<Produto>(this.url, produto)
  }

  //Deletar um produto
  deleteProduto(id: number): Observable<Produto>
  {
    return this.httpClient.delete<Produto>(`${this.url}/${id}`);
  }
}
