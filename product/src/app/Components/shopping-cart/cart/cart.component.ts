import { MessengerService } from './../../../services/new/messenger.service';
import { CartService } from './../../../services/new/cart.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-Item';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems=[
  /*{id:1,productId:1,productName:'Test 1',qty:4,price:100},
  {id:2,productId:3,productName:'Test 2',qty:5,price:50},
  {id:3,productId:2,productName:'Test 3',qty:3,price:150},
  {id:4,productId:4,productName:'Test 4',qty:2,price:200}
  */
];
remove:boolean=false;

cartTotal=0;


  constructor(private msg:MessengerService,
    private cartServicE:CartService) { }

  ngOnInit(): void {
    console.log("NgOnIt Triggered");
    this.handleSubscription();
    this.loadCartItems();
  }


  handleSubscription(){

    this.msg.getMsg().subscribe((product:Product)=>{
      this.loadCartItems();

     })



  }

  loadCartItems(){

    this.cartServicE.getCartItems().subscribe((items:CartItem[])=>{
        this.cartItems=items;
        this.calculateCartTotal();
        
    })

  }

 

  calculateCartTotal(){

    this.cartTotal=0;
    this.cartItems.forEach(items=>{
      this.cartTotal += (items.qty*items.products.price)
    })

  }
}
