import { MessengerService } from 'src/app/services/new/messenger.service';

import { Product } from '../../models/product';
import { cartUrl } from '../../config/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cart-Item';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  item: CartItem;

  constructor(private http:HttpClient,
    public msg:MessengerService) { 

    
  }
  getCartItems():Observable<CartItem[]>{

    return this.http.get<CartItem[]>(cartUrl);
    // return this.http.get<CartItem[]>(cartUrl).pipe(
    //   map((result:any[])=>{
    //     let cartItems:CartItem[]=[];
    //     let productExists=false;
    //     console.log(result);
    //     for(let item of result){
    //       console.log(item)
    //        for(let i in cartItems){
    //          console.log(cartItems[i].products.id )
    //          console.log(item.product.id )
             
    //         if(cartItems[i].products.id == item.products.id){
    //           cartItems[i].qty++;
    //         productExists=true;
    //           break;
    //        }
      
    //        }
          
    //        if(!productExists){
    //          cartItems.push(new CartItem(item.id,item.products));
      
      
    //        }

          
    //     }


        


    //     return cartItems;
    //   })
    // );
  }

   addProductToCart(product:Product):Observable<any>{
  
    
    return this.http.post(cartUrl,{
      id:product.id
      ,products:product
    });


  }


   removeProductFromCart(cartItem:CartItem):Observable<any>{
    
    return this.http.delete(cartUrl+'/'+cartItem.id);

  }


  editProductFromCart(cartItem:CartItem,amt:number):Observable<any>{
    cartItem.qty=cartItem.qty+amt;
    return this.http.put(cartUrl,cartItem);
  }

  increment(cartid:number){
    this.http.get<CartItem>(cartUrl+'/'+cartid).subscribe((cart:CartItem)=>{
      this.editProductFromCart(cart,1).subscribe((data)=>{
        console.log(data);
      });
    })
    

  }

  exists(id:number):Observable<any>{
    return this.http.get<CartItem>(cartUrl+'/'+id);
  }

  


}
