
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  em:string;
  pass:string;

  constructor(private auth:AngularFireAuth,private router:Router) { }

  ngOnInit(): void {
  

  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((uses)=>{
      console.log(uses.user.uid);
      this.router.navigate(['/'])});
     
  }


  logout() {
    this.auth.signOut();
  }
  createUser(email:string,password:string){
    this.auth.createUserWithEmailAndPassword(email,password).then(user=>{
      console.log(user.user.uid);
      this.router.navigate(['']);
    });

  }
  signIn(email:string,password:string) {
    this.auth.signInWithEmailAndPassword(email,password).then((user)=>{
      console.log(user.user.uid);
      alert('User signed In');
    this.router.navigate(['/']);
    })
    
    
  }


  

  


}
