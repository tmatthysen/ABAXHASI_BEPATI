import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {category} from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategorySvcService {

  categories: Observable<category[]>;

  constructor(private http:HttpClient) { 
    this.categories =  this.http.get<category[]>('https://app.abaxhasibepati.ml/categories/category')
  }

  getCategory(){
    return this.categories;
  }
}
