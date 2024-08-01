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

  //Cria categoria
  postCategoria (categoria: Categoria)
  {
    return this.httpClient.post<Categoria>(this.url, categoria);
  }
}
