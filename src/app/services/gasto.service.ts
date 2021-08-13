import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Gasto } from '../models/gasto';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  url = 'https://naogaste-back.herokuapp.com'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os Gastoros
  getGastos(page:any,size:any): Observable<Page> {
    return this.httpClient.get<Page>(this.url+'/gastos/'+`?pag=${page}&size=${size}`)
      .pipe()
  }
  // Obtem todos os Gastoros
  getGasto(): Observable<Gasto[]> {
    return this.httpClient.get<Gasto[]>(this.url+'/gasto')
      .pipe()
  }
  getGastosLimited(): Observable<Gasto[]> {
    return this.httpClient.get<Gasto[]>(this.url+'/gastos/limit')
      .pipe()
  }

  // Obtem um Gastoro pelo id
  getGastoById(id: number): Observable<Gasto> {
    return this.httpClient.get<Gasto>(this.url + 'gastos/' + id)
      .pipe()
  }

  // salva um Gastoro
  saveGasto(Gasto: Gasto): Observable<Gasto> {
    return this.httpClient.post<Gasto>(this.url+'/gastos', JSON.stringify(Gasto), this.httpOptions)
      .pipe(
        
      )
  }

  // utualiza um Gastoro
  updateGasto(Gasto: Gasto): Observable<Gasto> {
    return this.httpClient.put<Gasto>(this.url + 'gastos/' + Gasto.id, JSON.stringify(Gasto), this.httpOptions)
      .pipe(
       
      )
  }

  // deleta um Gastoro
  deleteGasto(Gasto: Gasto) {
    return this.httpClient.delete<Gasto>(this.url + 'gastos/' + Gasto.id, this.httpOptions)
      .pipe(
       
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
