import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
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
  createUser(email:string,password:string){
    this.auth.createUserWithEmailAndPassword(email,password).then(user=>{
      console.log('RegisterComponent---->CreateUser-->user',user);
      this.router.navigate(['']);
    });

  }
  signIn(email:string,password:string){
    this.auth.signInWithEmailAndPassword(email,password);
    alert('User signed In');
    this.router.navigate(['/']);
    
  }

  gotophone(){
    this.router.navigate(['/phone']);
  }


}
