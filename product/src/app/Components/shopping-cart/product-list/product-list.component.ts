import { ProductService } from './../../../services/new/product.service';
import { WishlistService } from './../../../services/new/wishlist.service';
import { wishlistUrl } from './../../../config/api';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:Product[]=[]
  wishlist:number[];
  cartlist:number[];
  constructor(private productService:ProductService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
   
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{
      console.log(products);
      this.productList=products;
      

  })
  }

  loadWishlist(){
    this.wishlistService.getwishlist().subscribe(productIds=>this.wishlist=productIds);
  }

}
