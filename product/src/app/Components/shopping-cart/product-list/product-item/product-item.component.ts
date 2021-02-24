
import { MessengerService } from './../../../../services/new/messenger.service';
import { CartService } from './../../../../services/new/cart.service';
import { WishlistService } from './../../../../services/new/wishlist.service';
import { Product } from './../../../../models/product';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
   
  @Input() productItem:Product;
  @Input() addedTowishlist:boolean;
  
  cartId=0;


  constructor(private msg:MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService
    ) { }

  ngOnInit(): void {
  }


  handleAddToCart(){
    
    this.cartService.addProductToCart(this.productItem).subscribe((data)=>{
      this.cartId=data.id;
      console.log("Handle Add to Cart");
      this.msg.sendMsg(this.productItem);
    
    })

   
    

  }


  

  handleAddToWishList(){
    this.wishlistService.addTowishlist(this.productItem.id).subscribe(()=>{
        this.addedTowishlist=true;

    })
  }

  handleRemoveFromWishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(()=>{
        this.addedTowishlist=false;
       
      
    })
  }

  handle(){
    this.cartService.exists(this.productItem.id).subscribe((data)=>{
      console.log(data);
      if(data==null)
        this.cartId=0;
      else
        this.cartId=data.id;
      console.log(this.cartId);
    })
    if (this.cartId==0)
    {
      this.handleAddToCart();
    }
    else{
      this.cartService.increment(this.cartId);
    }
  }

}
