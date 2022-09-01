import { qty } from './../interfaces/qty';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { drink } from '../interfaces/drink';
import { order } from '../interfaces/order';

@Injectable({
  providedIn: 'root',
})

export class DrinksSvcService {

  filter: String = "";

  constructor(private http:HttpClient){}

  getDrinks(filter: String): Observable<drink[]> {
    return this.http.get<drink[]>('https://app.abaxhasibepati.ml/drinks/drinks/' + filter);
  }

  getQTY(filter: String): Observable<qty[]> {
    return this.http.get<qty[]>('https://app.abaxhasibepati.ml/qty/qty/' + filter);
  }

  getAllDrinks(): Observable<drink[]> {
    return this.http.get<drink[]>('https://app.abaxhasibepati.ml/drinks/drinks/All');
  }

  getOrders(suite: any): Observable<order[]> {
    return this.http.get<order[]>('https://app.abaxhasibepati.ml/order/order/' + suite);
  }

  addOrder(suite: any,item: string,itemqty: string,itemprice: string){
    const body = JSON.stringify({"suiteNumber":suite,"item":item, "itemqty": itemqty, "itemprice": itemprice});
    const headers = { 'content-type': 'application/json'};
    console.log(body);
    this.http.post('http://localhost:3080/order/new', body, {'headers':headers}).subscribe((res) => {
      console.log(res);
    });
  }
}
