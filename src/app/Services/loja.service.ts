import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loja } from '../Models/loja';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  private url = `${environment.api}/loja`


  constructor(private httpClient: HttpClient) { }

  //Retorna as loja
  getLojas() : Observable<Loja[]>
  {
    return this.httpClient.get<Loja[]>(this.url);
  }

  //Retorna a loja pelo id
  getLojaById(id: number): Observable<Loja>
  {
    return this.httpClient.get<Loja>(`${this.url}/${id}`);
  }

  //Cria loja
  postLoja(loja: Loja): Observable<Loja>
  {
    return this.httpClient.post<Loja>(this.url, loja);
  }

  //Edita loja
  putLoja(loja: Loja, id: number): Observable<Loja>
  {
    return this.httpClient.put<Loja>(`${this.url}/${id}`, loja);
  }

  //Excluir loja
  deleteLoja(id: number): Observable<Loja>
  {
    return this.httpClient.delete<Loja>(`${this.url}/${id}`);
  }
}
