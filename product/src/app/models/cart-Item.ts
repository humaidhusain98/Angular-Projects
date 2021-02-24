import { Product } from './product';
export class CartItem {
    id:number;
    products:Product;
    qty:number;
    

    constructor(id:number,products:Product,qty=1){
        this.id=id;
        this.products=products;
        this.qty=qty;
    }
}
