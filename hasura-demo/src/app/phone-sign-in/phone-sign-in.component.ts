import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { WindowService } from './../services/window/window.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-sign-in',
  templateUrl: './phone-sign-in.component.html',
  styleUrls: ['./phone-sign-in.component.css']
})
export class PhoneSignInComponent implements OnInit ,AfterViewInit{
  phoneNumber:string;
  otp:string;
  windowRef:any;
  disableOTPButton=true;
  constructor(private router:Router,private windowService:WindowService,
    public afAuth:AngularFireAuth) { 
    this.windowRef=this.windowService.windowRef;
    
  }

  ngOnInit(): void {
   
    
  }

  ngAfterViewInit(){
    this.windowRef.recaptchaVerifier=new auth.RecaptchaVerifier('recaptcha-container',
    {'size':'normal',
    'callback':(response)=>{
     this.disableOTPButton=false;
    }
    });
    this.windowRef.recaptchaVerifier.render();
  }


  sendOTP(){
    this.afAuth.signInWithPhoneNumber(this.phoneNumber,this.windowRef.recaptchaVerifier).then((confirmationResult)=>{
      this.windowRef.confirmationResult=confirmationResult;
    })
  }

  verifyOTP(){
    this.windowRef.confirmationResult.confirm(this.otp).then((userCredentials)=>{
      console.log(userCredentials);this.router.navigate(['/']);
    });
  }

  goback(){
    this.router.navigate(['/login']);

  }

}
