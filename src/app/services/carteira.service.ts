import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Carteira } from '../models/carteira';

let headersReq = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {
  url = 'https://naogaste-back.herokuapp.com'; // api rest fake

  // injetando o HttpClient
  
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os Carteiraros
  getCarteiras(): Observable<Carteira[]> {
    return this.httpClient.get<Carteira[]>(this.url)
      .pipe()
  }
  // Obtem todos os Carteiraros
  getCarteira(): Observable<Carteira[]> {
    return this.httpClient.get<Carteira[]>(this.url+'/carteiras/max',{ headers: headersReq })
      .pipe()
  }
  getcarteirasLimited(): Observable<Carteira[]> {
    return this.httpClient.get<Carteira[]>(this.url+'carteira/limit')
      .pipe()
  }

  // Obtem um Carteiraro pelo id
  getCarteiraById(id: number): Observable<Carteira> {
    return this.httpClient.get<Carteira>(this.url + '/' + id)
      .pipe()
  }

  // salva um Carteiraro
  saveCarteira(carteira: Carteira): Observable<Carteira> {
    return this.httpClient.post<Carteira>(this.url+'/carteiras', JSON.stringify(carteira), this.httpOptions)
      .pipe(
        
      )
  }

  // utualiza um Carteiraro
  updateCarteira(Carteira: Carteira): Observable<Carteira> {
    return this.httpClient.put<Carteira>(this.url + '/' + Carteira.id, JSON.stringify(Carteira), this.httpOptions)
      .pipe(
       
      )
  }

  // deleta um Carteiraro
  deleteCarteira(Carteira: Carteira) {
    return this.httpClient.delete<Carteira>(this.url + '/' + Carteira.id, this.httpOptions)
      .pipe(
       
      )
  }

  // Manipula????o de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `C??digo do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
