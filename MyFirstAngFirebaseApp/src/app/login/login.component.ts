import { switchMap, take } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import {FirebaseTSAuth} from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   em:string;
  pass:string;
  private auth:AngularFireAuth;
  private auths:FirebaseTSAuth;
  constructor(private _router:Router) {
    this.auths=new FirebaseTSAuth();

   }

  ngOnInit(): void {
  }


   onSignInButtonClick(
      emailInput:string,
      passwordInput:string
      ){
        const email=emailInput;
        const password=passwordInput;
        this.auths.signInWith(
          {
            email:email,
            password:password,
            onComplete:(uc) =>{
                alert("Log In Successful ");
                this._router.navigate(['dash'])
            },
            onFail:(err) =>{
              alert("Failed To Sign In");
            }
          }
        );
      }

      gotoreg(){
        this._router.navigate(['/reg']);



      }

}
