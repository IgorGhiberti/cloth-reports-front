import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Tamanho } from '../Models/tamanho';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TamanhoService {

  private url = `${environment.api}/tamanho`


  constructor(private httpClient: HttpClient) { }

  //Retorna os tamanhos
  getTamanho() : Observable<Tamanho[]>
  {
    return this.httpClient.get<Tamanho[]>(this.url);
  }

  //Retorna o Tamanho pelo id
  getTamanhoById(id: number): Observable<Tamanho>
  {
    return this.httpClient.get<Tamanho>(`${this.url}/${id}`);
  }

  //Cria Tamanho
  postTamanho(tamanho: Tamanho): Observable<Tamanho>
  {
    return this.httpClient.post<Tamanho>(this.url, tamanho);
  }

  //Edita Tamanho
  putTamanho(tamanho: Tamanho, id: number): Observable<Tamanho>
  {
    return this.httpClient.put<Tamanho>(`${this.url}/${id}`, tamanho);
  }

  //Exclui Tamanho
  deleteTamanho(id: number): Observable<Tamanho>
  {
    return this.httpClient.delete<Tamanho>(`${this.url}/${id}`);
  }
}
