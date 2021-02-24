import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { AuthService } from './services/auth.service';
import { AppPage } from './../../e2e/src/app.po';
import { Component } from '@angular/core';
import {FirebaseTSFirestore, BatchOperation} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import {FirebaseTSAuth} from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { User } from './services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  

  constructor(public auth:AuthService){



  }
  title = 'MyFirstAngFirebaseApp';

  

  // dataRef:USER;
  // em:string;
  // pass:string;


  // private auth:FirebaseTSAuth;
 
  // private firestore: FirebaseTSFirestore;

  // constructor(){
    
  //   //firestore
  //   this.firestore=new FirebaseTSFirestore();

  //   //firebaseAuth
  //   this.auth=new FirebaseTSAuth();


    // this.firestore.create(
    //   {
    //     path: ["USERS_COLLECTION", "1"],
    //     data:{
    //       name:"Md Humaid Husain",
    //       age:23,
    //       hobbies:["Soccer","Guitar"]
    //     },
    //     onComplete:(docId)=>{
    //         alert("Document Created Successfull");
    //     },
    //     onFail:(err)=>{
    //       alert("Failed to create document.")

    //     }
    //   }
    // );

    // this.firestore.update(
    //   {
    //     path: ["USERS_COLLECTION", "1"],
    //     data:{
    //       name:"Md Humaid Husain",
    //       age:23,
    //       hobbies:["Soccer","Guitar"]
    //     },
    //     onComplete:(docref)=>{
    //         alert("Update Successfull");
    //     },
    //     onFail:(err)=>{
    //       alert("Failed to update document.")

    //     }
    //   }
    // );

    
    // this.firestore.getDocument(
    //   {
    //     path:["USERS_COLLECTION","1"],
    //     onComplete:(result)=>{
    //       this.dataRef=<USER>result.data();
    //       this.dataRef.name;
    //       this.dataRef.age;
    //       alert(this.dataRef.name +" " +this.dataRef.age);
    //     },
    //     onFail:(err)=>{
    //       alert("Failed to get Document");
    //     }

  
    //   }
    // );
    // this.firestore.listenToDocument(
    //   {
    //     name:"USERS_LISTENER",
    //     path:["USERS_COLLECTION","1"],
    //     onUpdate:(result)=>{
    //      this.dataRef= <USER>result.data();

    //     }
    //   }
    // );


    // this.firestore.delete(
    //   {
    //     path:["USERS_COLLECTION","1"],
    //     onComplete:()=>{
    //       alert("Document Successfully Deleted");
    //     },

    //     onFail:(err)=>{
    //       alert("Document Deletion Failed");
    //     }
    //   }
    // );

    // this.firestore.all(
    //   {
    //     operations:[
    //       new BatchOperation(
    //         "create",
    //         ["USERS_COLLECTION","3"],
    //         {
    //           age:28,
    //           name:"Atiba",

    //         }

    //         ),

    //         new BatchOperation(
    //           "update",
    //           ["USERS_COLLECTION","3"],
    //           {
    //             age:25,
    //             name:"Tuba",
                
    //           }
  
    //           )

    //     ],
    //     onComplete:()=>{
    //         alert("SUCCESS!!");
    //     },
    //     onFail:(err)=>{
    //         alert("FAILED!!");
    //     }

    //   }
    // );






  }

  // increment(){
  //   this.firestore.update(
  //     {
  //       path:["USERS_COLLECTION","1"],
  //       data:{
  //         wealth:this.firestore.increment(100)

  //       }

  //     }

  //   );
  // }



  // decrement(){
  //   this.firestore.update(
  //     {
  //       path:["USERS_COLLECTION","1"],
  //       data:{
  //         wealth:this.firestore.increment(-100)

  //       }

  //     }

  //   );
  // }

 

  // onCreateButtonClick(
  //   emailInput:string,
  //   passwordInput:string
  //   ){
  //     const email=emailInput;
  //     const password=passwordInput;
  //     this.auth.createAccountWith(
  //       {
  //         email:email,
  //         password:password,
  //         onComplete:(uc) =>{
  //             alert("CREATED ACCOUNT");
  //         },
  //         onFail:(err) =>{
  //           alert("FAILED ACCOUNT CREATION");
  //         }
  //       }
  //     );
  //   }




    // onSignInButtonClick(
    //   emailInput:string,
    //   passwordInput:string
    //   ){
    //     const email=emailInput;
    //     const password=passwordInput;
    //     this.auth.signInWith(
    //       {
    //         email:email,
    //         password:password,
    //         onComplete:(uc) =>{
    //             alert("Log In Successful ");
    //         },
    //         onFail:(err) =>{
    //           alert("Failed To Sign In");
    //         }
    //       }
    //     );
    //   }



// }

// export interface USER{
//   name:string;
//   age:number;
//   hobbies:string[];
// }