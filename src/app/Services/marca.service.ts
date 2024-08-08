import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Marca } from '../Models/marca';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private url = `${environment.api}/marcas`


  constructor(private httpClient: HttpClient) { }

  //Retorna as Marca
  getMarcas() : Observable<Marca[]>
  {
    return this.httpClient.get<Marca[]>(this.url);
  }

  //Retorna a Marca pelo id
  getMarcaById(id: number): Observable<Marca>
  {
    return this.httpClient.get<Marca>(`${this.url}/${id}`);
  }

  //Cria Marca
  postMarca(Marca: Marca): Observable<Marca>
  {
    return this.httpClient.post<Marca>(this.url, Marca);
  }

  //Edita Marca
  putMarca(Marca: Marca, id: number): Observable<Marca>
  {
    return this.httpClient.put<Marca>(`${this.url}/${id}`, Marca);
  }

  //Excluir Marca
  deleteMarca(id: number): Observable<Marca>
  {
    return this.httpClient.delete<Marca>(`${this.url}/${id}`);
  }
}
