import { wishlistUrl } from './../../../config/api';
import { WishlistService } from './../../../services/wishlist.service';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:Product[]=[]
  wishlist:number[];
  constructor(private productService:ProductService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
   
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{
      this.productList=products;
      

  })
  }

  loadWishlist(){
    this.wishlistService.getwishlist().subscribe(productIds=>this.wishlist=productIds);
  }

}
