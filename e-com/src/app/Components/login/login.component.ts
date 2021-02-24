import { MessengerService } from './../../Services/messenger.service';
import { User } from './../../Models/user';
import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
   password:string;
  user:User=new User();
  constructor(private service:UserService,private router:Router,private msgServ:MessengerService) { 
    
  }

  ngOnInit(): void {
  }

  dologin(){
    const cred="Basic "+btoa(this.username +":"+this.password);
    
    localStorage.setItem("auth",cred);
    let resp=this.service.cart();
    resp.subscribe(data=>
      {console.log(data);
        localStorage.setItem("user",this.username);
        this.msgServ.setrefresh();
        this.router.navigate(['/logged']);
        
    
    
    });

  }



  registerUser(){
    this.service.register(this.user).subscribe(data=>{
      console.log(data);

    });

  

  }

}
