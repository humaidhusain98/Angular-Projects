import { Address } from './../Models/address';
import { Router } from '@angular/router';


import { baseUrl } from './../config/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class  UserService {

  
  

  constructor(private _http:HttpClient,private router:Router) { }

  public cart(){
    const credd=localStorage.getItem("auth");
    const headers=new HttpHeaders({Authorization: credd})
    return this._http.get("http://localhost:8080/cart",{headers});
  }

  public addProductToCart(productid:number){
    const credd=localStorage.getItem("auth");
    const headers=new HttpHeaders({Authorization: credd});
    return this._http.get("http://localhost:8080/cart/add/"+productid,{headers});
  }

  public removeProductFromCart(productid:number){
    const credd=localStorage.getItem("auth");
    const headers=new HttpHeaders({Authorization: credd});
    return this._http.get("http://localhost:8080/cart/remove/"+productid,{headers});
  }

  public getcartTotal(){
    const credd=localStorage.getItem("auth");
    const headers=new HttpHeaders({Authorization: credd});
    return this._http.get("http://localhost:8080/cart/total",{headers});
  }

  public getProductById(id:number){
    const credd=localStorage.getItem("auth");
    const headers=new HttpHeaders({Authorization: credd});
    return this._http.get("http://localhost:8080/cart/"+id,{headers});
  }


  public getaddresses(){
    const credd=localStorage.getItem("auth");
    const headers=new HttpHeaders({Authorization: credd});
    return this._http.get("http://localhost:8080/cart/address",{headers});
  }

  public addAddress(address:Address){
    const credd=localStorage.getItem("auth");
    const headers=new HttpHeaders({Authorization: credd});
    return this._http.post("http://localhost:8080/cart/address",address,{headers});
  }
  
  public processCODorder(addressid:number){
    const credd=localStorage.getItem("auth");
    const headers=new HttpHeaders({Authorization: credd});
    return this._http.get("http://localhost:8080/cart/address/"+addressid,{headers});
  }

  public getOrders(){
    const credd=localStorage.getItem("auth");
    const headers=new HttpHeaders({Authorization: credd});
    return this._http.get("http://localhost:8080/cart/getOrders",{headers});

  }

  public removAddressLink(addre:Address){
    const credd=localStorage.getItem("auth");
    const headers=new HttpHeaders({Authorization: credd});
    return this._http.post("http://localhost:8080/cart/deleteaddress",addre,{headers})
  }


 






  public logout(){
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  public register(user:User){
    return this._http.post(baseUrl+'/register',user);
  }



}
