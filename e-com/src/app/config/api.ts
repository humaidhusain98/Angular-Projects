import { environment } from '../../environments/environment';

export const baseUrl=environment.production?'https://api.shoppingcart.com':'http://localhost:8080';
export const adminUrl=baseUrl+'/admin';
export const cartUrl=baseUrl+'/cart';
