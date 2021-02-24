import { RestapiService } from './../restapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  message:any;

  constructor(private service: RestapiService) { }

  ngOnInit(): void {
  }

  doLogin(){
    let respons= this.service.login(this.username,this.password);
    respons.subscribe(data=>{console.log(data)})
  }

}
