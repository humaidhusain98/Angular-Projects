import { User } from './../user';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   
   username:string;
   password:string;
  message='';
  constructor(private _service: RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
      let resp= this._service.login(this.username,this.password);
      resp.subscribe(data=>{
        console.log(data);
        this._router.navigate(['/loginsucess']);
      }
      );

  }


  gotoregistration(){
    this._router.navigate(['/registration']);
    
  }

  

}
