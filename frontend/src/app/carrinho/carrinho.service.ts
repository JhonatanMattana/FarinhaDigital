import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Carrinho } from './carrinho';

@Injectable()
export class CarrinhoService {

  private carrinhosUrl = 'http://localhost:4200/api/graos';

  constructor(private http: Http) { }

  public addCarrinho(body: Object): Observable<Carrinho[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.carrinhosUrl, body, options)
      .map((res: Response) => res.json());
  }

  public updateCarrinho(body: Object): Observable<Carrinho[]> {

    const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.carrinhosUrl}/${body['id']}`, body, options)
      .map((res: Response) => res.json());

  }

  public removeCarrinho(id: number): Observable<Carrinho[]> {

    const bodyString = JSON.stringify(id);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.delete(`${this.carrinhosUrl}/${id}`)
      .map((res: Response) => res.json());
  }

  public loadCarrinhos(): Observable<Carrinho[]> {
    return this.http.get(`${this.carrinhosUrl}`)
      .map((res: Response) => res.json());
  }

}
