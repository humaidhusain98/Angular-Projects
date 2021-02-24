
import { CartService } from './../../../../services/new/cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessengerService } from 'src/app/services/new/messenger.service';
import { CartItem } from 'src/app/models/cart-Item';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem:any;
  @Input() remov:boolean;
  @Output("ngonit") ngonit:EventEmitter<any> = new EventEmitter();
  remove:boolean=false;
  constructor(public cartService:CartService,
     msg:MessengerService
    ) { }
  donotremove:boolean=true;
  ngOnInit(): void {
  }

   removeProduct(){
     this.remove=true;
      this.cartService.removeProductFromCart(this.cartItem).subscribe((data)=>{
        console.log(data);
        console.log("item deleted");
        this.refresh();
      });
      

  }

  refresh(){

    this.ngonit.emit();
  }

  incrementQty(){
      this.cartService.editProductFromCart(this.cartItem,1).subscribe((data)=>{
        console.log(data);
        console.log("item Qty Edited");
      })
 }


 decrementQty(){
  this.cartService.editProductFromCart(this.cartItem,-1).subscribe((data)=>{
    console.log(data);
    console.log("item Qty Edited");
  })
}






}


