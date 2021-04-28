import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {produit} from '../model/produit';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

  
})
export class DataService {
 private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getAllproduit() {
    return this.http.get(this.apiUrl + 'index');
  }
  getViande() :Observable<produit[]> {
    return this.http.get(this.apiUrl + 'viande')
    .pipe(
      map((jsonArray: Object[]) => jsonArray.map(jsonItem => produit.fromJson(jsonItem)))
    );
  }
  // getAll(): Observable<Product[]> {
  //   return this.http.get(this.apiUrl+'/product/index')
  //   .pipe(
  //     map((jsonArray: Object[]) => jsonArray.map(jsonItem => Product.fromJson(jsonItem)))
  //   );
  // }
  getVolaille() {
    return this.http.get(this.apiUrl + 'volaille');
  }

  getCharcuterie() {
    return this.http.get(this.apiUrl + 'charcuterie');
  }

  getRestaurant() {
    return this.http.get(this.apiUrl + 'restaurant');
  }

  getNgalakh() {
    return this.http.get(this.apiUrl + 'ngalakh');
  }
}
