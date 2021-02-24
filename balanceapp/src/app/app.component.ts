import { ServiceService } from './service.service';
import { Component, OnInit } from '@angular/core';
import { Transactions } from './transactions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'balanceapp';
  description:String;
  amt:number;
  checkbox:boolean;
  removeId:number;
  balance:number;
  authenticated:boolean;
  password:String;
  transactionslist:Transactions[];
  constructor(private service:ServiceService){
    this.authenticated=false;
    this.setBalance();
  }
  ngOnInit(): void {
    this.authenticated=false;
    this.setBalance();

  }



  addTransactionObj(){
    this.service.getCounterData().subscribe((counter)=>{
      let id=counter['count'];
      counter['count']++;
      this.service.editCounterData(counter).subscribe((count)=>{
          let transact=new Transactions(id,this.amt,this.checkbox,this.description);
          this.service.postTransaction(transact).subscribe(()=>{
            this.setBalance();
          });
      });
      
    });
   
  }//add Transaction

  removeTransaction(){

         this.service.deleteTransaction(this.removeId).subscribe(()=>{
          this.setBalance();
            },(error)=>{
              console.log('Maybe Id Doesnt Exist!! error message=>'+error);
            });
  
  }//remove Transaction
  
  setBalance(){
    this.service.getAllTransaction().subscribe((transactlist:Transactions[])=>{
        this.transactionslist=transactlist;
        transactlist.reverse();
        var i;var balance=0;
        for(i=0;i<transactlist.length;i++)
        {
          if(transactlist[i].putin==true)
          {
            balance=balance+transactlist[i].amt;
          }
          else
          {
            balance=balance-transactlist[i].amt;
          }
        }//for loop
        this.service.editBalance({id:1,balance:balance}).subscribe((data)=>{console.log(data)
          this.balance=balance;})
    });//getAllTransactCall
  }

  getBalance(){
    this.service.getBalance().subscribe((balanceObj)=>{
      this.balance=balanceObj['balance'];
    });
  }


  setDefaultVal(){
    this.description=null;
    this.amt=null
  }

  authenticate(){
    if(this.password=='password12345')
      {
        this.authenticated=true;
      }
  }

}
