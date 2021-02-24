import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { wishlistUrl } from './../config/api';
import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
  
  getwishlist(){
    return this.http.get(wishlistUrl).pipe(
      map((result:any[])=>{
        let productIds=[];
        result.forEach(item=>productIds.push(item.id));
        return productIds;

      })
    )

  }


  addTowishlist(productId){
    return this.http.post(wishlistUrl,{id:productId});

  }

  removeFromWishlist(productId){
    return this.http.delete(wishlistUrl+'/'+productId); 

  }
}
