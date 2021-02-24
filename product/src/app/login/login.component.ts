import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  em:string;
  pass:string;


  constructor(private auth:AngularFireAuth,private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(()=>this.router.navigate(['/']));
  }
  logout() {
    this.auth.signOut();
  }

  gotophone(){
    this.router.navigate(['/phone']);
  }



}
