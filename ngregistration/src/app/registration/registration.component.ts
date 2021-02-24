import { User } from './../user';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user= new User();
  msg='';

  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("Response recieved");
        this.msg="Registration Successful";
        this._router.navigate(['/signin']);
      }
      ,
      error=>{
        console.log("Exception Occured");
        this.msg=error.error;

      }

    );


  }

  gotoLogin(){
    this._router.navigate(['/signin']);

  }

}
