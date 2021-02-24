import { Component, OnInit } from '@angular/core';
import {FirebaseTSAuth} from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  em:string;
  pass:string;
  private auth:FirebaseTSAuth;


  constructor(private _router:Router) {
    this.auth=new FirebaseTSAuth();
    

   }




  ngOnInit(): void {
  }

  onCreateButtonClick(
    emailInput:string,
    passwordInput:string
    ){
      const email=emailInput;
      const password=passwordInput;
      this.auth.createAccountWith(
        {
          email:email,
          password:password,
          onComplete:(uc) =>{
              alert("CREATED ACCOUNT");
          },
          onFail:(err) =>{
            alert("FAILED ACCOUNT CREATION");
          }
        }
      );
    }


    gotolog(){
      this._router.navigate(['/']);

    }
  

}
