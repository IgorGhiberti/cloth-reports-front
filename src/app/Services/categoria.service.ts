import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../Models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  private url = `${environment.api}/categoria`


  constructor(private httpClient: HttpClient) { }

  //Retorna as categorias
  getCategorias() : Observable<Categoria[]>
  {
    return this.httpClient.get<Categoria[]>(this.url);
  }

  //Retorna a categoria pelo id
  getCategoriaById(id: number): Observable<Categoria>
  {
    return this.httpClient.get<Categoria>(`${this.url}/${id}`);
  }

  //Cria categoria
  postCategoria(categoria: Categoria): Observable<Categoria>
  {
    return this.httpClient.post<Categoria>(this.url, categoria);
  }

  //Edita categoria
  putCategoria(categoria: Categoria, id: number): Observable<Categoria>
  {
    return this.httpClient.put<Categoria>(`${this.url}/${id}`, categoria);
  }
}
