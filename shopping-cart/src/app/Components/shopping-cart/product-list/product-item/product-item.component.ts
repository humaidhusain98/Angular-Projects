import { WishlistService } from './../../../../services/wishlist.service';
import { CartService } from './../../../../services/cart.service';
import { MessengerService } from './../../../../services/messenger.service';
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

  constructor(private msg:MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService
    ) { }

  ngOnInit(): void {

  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
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

}
