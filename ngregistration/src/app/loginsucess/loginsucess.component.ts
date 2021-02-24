import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsucess',
  templateUrl: './loginsucess.component.html',
  styleUrls: ['./loginsucess.component.css']
})
export class LoginsucessComponent implements OnInit {

  constructor(private _service: RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }


  logOut(){

    this._service.logout();
    


  }
}
