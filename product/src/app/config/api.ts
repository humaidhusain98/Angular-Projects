import { environment } from '../../environments/environment';

export const baseUrl=environment.production?'https://api.shoppingcart.com':'http://localhost:8080';
export const productUrl=baseUrl+'/products';
export const cartUrl=baseUrl+'/cart';
export const wishlistUrl=baseUrl+'/wishlist';
