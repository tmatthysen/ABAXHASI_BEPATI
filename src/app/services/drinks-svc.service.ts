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
    return this.http.get<drink[]>('http://express-js.dggkegh0b7e7c2gn.westeurope.azurecontainer.io:3000/drinks/drinks/' + filter);
  }

  getQTY(filter: String): Observable<qty[]> {
    return this.http.get<qty[]>('http://express-js.dggkegh0b7e7c2gn.westeurope.azurecontainer.io:3000/qty/qty/' + filter);
  }

  getAllDrinks(): Observable<drink[]> {
    return this.http.get<drink[]>('http://express-js.dggkegh0b7e7c2gn.westeurope.azurecontainer.io:3000/drinks/drinks/All');
  }

  getOrders(suite: any): Observable<order[]> {
    return this.http.get<order[]>('http://express-js.dggkegh0b7e7c2gn.westeurope.azurecontainer.io:3000/order/order/' + suite);
  }

  addOrder(suite: any,item: string,itemqty: string,itemprice: string){
    const body = JSON.stringify({"suiteNumber":suite,"item":item, "itemqty": itemqty, "itemprice": itemprice});
    const headers = { 'content-type': 'application/json'};
    console.log(body);
    this.http.post('http://express-js.dggkegh0b7e7c2gn.westeurope.azurecontainer.io:3000/order/new', body, {'headers':headers}).subscribe((res) => {
      console.log(res);
    });
  }
}
