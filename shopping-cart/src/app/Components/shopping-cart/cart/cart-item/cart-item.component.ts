import { CartService } from './../../../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem:any;
  constructor(public cartService:CartService) { }
  donotremove:boolean=true;
  ngOnInit(): void {
  }





}


