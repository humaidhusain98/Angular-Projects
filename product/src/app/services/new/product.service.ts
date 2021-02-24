import { productUrl } from '../../config/api';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //TODO: Populate products from an API
  // products:Product[]=[
  //   // new Product(1,'Product 1',"This is the product description",100),
  //   // new Product(2,'Product 2',"This is the product description",150),
  //   // new Product(3,'Product 3',"This is the product description",10),
  //   // new Product(4,'Product 4',"This is the product description",50),
  //   // new Product(5,'Product 5',"This is the product description",200),
  //   // new Product(6,'Product 6',"This is the product description",800),
  //   // new Product(7,'Product 7',"This is the product description",50),
  //   // new Product(8,'Product 8',"This is the product description",70),
  //   // new Product(9,'Product 9',"This is the product description",250)


  // ]
  constructor(private _http:HttpClient) { }

  getProducts():Observable<Product[]>{

    //TODO: Populate products from an API and return an Observable
    
    return this._http.get<Product[]>(productUrl);
  }
}
