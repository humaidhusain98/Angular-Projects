import { ServiceService } from './service.service';
export class Transactions {
   
   id:number;
   amt:number;
   putin:boolean;
   date:Date;
  description:String;
  

   constructor(id:number,amt:number,putin:boolean,description:String){
       this.id=id;
       this.amt=amt;
       this.putin=putin;
       this.date=new Date();
       this.description=description;
   }


   

}
