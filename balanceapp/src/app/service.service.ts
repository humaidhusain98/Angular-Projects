import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Transactions } from './transactions';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  //http://13.127.176.63:8080/transactions
  getAllTransaction(){
     return this.http.get('http://13.127.176.63:8080/transactions');
  }

  getTransactionById(id:number){
    return this.http.get('http://13.127.176.63:8080/transactions');
  }

  postTransaction(transact:Transactions){
    return this.http.post('http://13.127.176.63:8080/transactions',transact)
  }

  deleteTransaction(id:number){
   
    return this.http.delete('http://13.127.176.63:8080/transactions/'+id);
    
  }

  editTransactions(id:number,transact:Transactions){
    return this.http.put('http://13.127.176.63:8080/transactions/'+id,transact);
  }

  getCounterData(){
    return this.http.get('http://13.127.176.63:8080/counter/1');
  }

  editCounterData(counter){
    return this.http.put('http://13.127.176.63:8080/counter/1',counter);
  }

  handleError(error){
    return throwError(error.message || "Server Error");
  }

  editBalance(balance){
    return this.http.put('http://13.127.176.63:8080/balance/1',balance);
  }

  getBalance(){
    return this.http.get('http://13.127.176.63:8080/balance/1');
  }

  getPassword(){
    return this.http.get('http://13.127.176.63:8080/password1234567890');
  }

  setPassword(password){
    return this.http.post('http://13.127.176.63:8080/password1234567890?pass='+password,{});
  }



}
