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
  oldPassword:String;
  newPassword:String;
  renewPassword:String;
  removePassword:String;
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

  removeTransaction(id){

         this.service.deleteTransaction(id).subscribe(()=>{
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
    this.service.getPassword().subscribe((pass)=>{
      if(this.password==pass['pass'])
        this.authenticated=true;
    });
  }


  changePassword()
  {
    this.service.getPassword().subscribe((pass)=>{
      if(this.oldPassword==pass['pass'])
      {
        this.service.setPassword(this.newPassword).subscribe((res)=>{
          console.log("Password Successfully Changed");
          alert("Password Successfully Changed");
        });
      }
      else
      {
        alert("Incorrect Password Entered");
        console.log("Incorrect Password");
      }
      this.oldPassword=null;
      this.newPassword=null;
      this.renewPassword=null;
    })
  }

  removeItemAuth(id)
  { 
    this.service.getPassword().subscribe((pass)=>{
      if(this.removePassword==pass['pass'])
      {
        this.removeTransaction(id);
      }
      else
      {
        alert("Incorrect Password Entered!");
      }
      this.removePassword=null;
      
    })

  }


  setRemoveId(id)
  {
    this.removeId=id;
  }

}
